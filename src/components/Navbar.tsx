import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../styles/theme';

function Navbar() {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Filet Crochet Designer</Logo>
        <NavLinks>
          <NavLink to="/" isActive={location.pathname === '/'}>
            Designer
          </NavLink>
          <NavLink to="/about" isActive={location.pathname === '/about'}>
            What is Filet Crochet?
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

// Styled Components
const Nav = styled.nav`
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.soft};
  padding: 1rem 0;
  border-bottom: 2px solid ${theme.colors.border};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: ${theme.transitions.default};
  font-family: ${theme.typography.fontFamily.heading};

  &:hover {
    color: ${theme.colors.hover};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.textLight};
  text-decoration: none;
  font-weight: ${props => props.isActive ? '600' : '400'};
  transition: ${theme.transitions.default};
  position: relative;
  padding: 0.5rem 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
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

export default Navbar; 