import { Link, Route, HashRouter as Router, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AboutMe from './components/AboutMe';
import { FiletCrochetInfo } from './components/FiletCrochetInfo';
import Grid from './components/Grid';
import './styles/global.css';
import { theme } from './styles/theme';

const NavBar = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavLink to="/" isActive={location.pathname === '/'}>
        Designer
      </NavLink>
      <NavLink to="/info" isActive={location.pathname === '/info'}>
        What is Filet Crochet?
      </NavLink>
      <NavLink to="/about-me" isActive={location.pathname === '/about-me'}>
        About Me
      </NavLink>
    </Nav>
  );
};

const App = () => {
  return (
    <Router>
      <Container>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
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
                  <Grid onGridChange={() => {}} />
                </GridContainer>
              </>
            }
          />
          <Route path="/info" element={<FiletCrochetInfo />} />
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
  color: ${(props) => (props.isActive ? theme.colors.primary : theme.colors.text)};
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
    width: ${(props) => (props.isActive ? '100%' : '0')};
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
  background-color: ${(props) => (props.isFilled ? theme.colors.primary : theme.colors.white)};
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
