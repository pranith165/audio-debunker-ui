import styled from 'styled-components';
import { IoLogoGithub } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between; /* Logo left, items right */
  align-items: center;
  padding: 1rem 2rem;
  color: black;
`;

export const HeaderLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const NavItems = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavItem = styled.a`
  color: #838282;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const GitIcon = styled(IoLogoGithub)`
  font-size: 20px;
  color: #838282;
  margin-right: 8px;
  cursor: pointer;
  transition: border-color 0.3s ease;
`;

export const HeaderLogoLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
