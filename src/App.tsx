import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from './styles/theme';
import Grid from './components/Grid';
import {FiletCrochetInfo} from './components/FiletCrochetInfo';
import AboutMe from './components/AboutMe';
import './styles/global.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavLink to="/" isActive={location.pathname === '/'}>Designer</NavLink>
      <NavLink to="/about" isActive={location.pathname === '/about'}>What is Filet Crochet?</NavLink>
      <NavLink to="/about-me" isActive={location.pathname === '/about-me'}>About Me</NavLink>
    </Nav>
  );
};

const App = () => {
  const [grid, setGrid] = useState<boolean[][]>([]);

  return (
    <Router>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/filet-crochet" replace />} />
          <Route path="/filet-crochet" element={
            <>
              <Title>Filet Crochet Designer</Title>
              <Legend>
                <LegendItem>
                  <LegendSquare isFilled={true} />
                  <LegendText>3 double crochets</LegendText>
                </LegendItem>
                <LegendItem>
                  <LegendSquare isFilled={false} />
                  <LegendText>Skip 2 dc, dc in next dc</LegendText>
                </LegendItem>
              </Legend>
              <GridContainer>
                <Grid onGridChange={setGrid} />
              </GridContainer>
            </>
          } />
          <Route path="/about" element={<FiletCrochetInfo />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Container>
    </Router>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.large};
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.small};
  transition: ${theme.transitions.default};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background-color: ${theme.colors.primary};
    transition: ${theme.transitions.default};
  }

  &:hover {
    color: ${theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xxxlarge};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.soft};
  border: 1px solid ${theme.colors.border};
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LegendSquare = styled.div<{ isFilled: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid ${theme.colors.border};
  background-color: ${props => props.isFilled ? theme.colors.primary : theme.colors.white};
  flex-shrink: 0;
`;

const LegendText = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSize.medium};
  font-family: ${theme.typography.fontFamily.primary};
  margin: 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

export default App;