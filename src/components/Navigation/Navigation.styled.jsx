import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
display: flex;
margin-left: 30px;
  
`;

export const Link = styled(NavLink)`
  padding: 16px 10px;

  text-decoration: none;
  font-weight: 500;
  color: #000;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
  &.active {
    color: var(--accent-color);
  }
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  &:not(:last-child) {
      margin-right: 10px;
    }
 
`;
