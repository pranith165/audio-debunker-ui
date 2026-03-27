import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between; /* Logo left, items right */
  align-items: center;
  padding: 1rem 2rem;
  color: var(--text);
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 1px 3px var(--shadow-md);

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const HeaderLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const NavItems = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    flex-wrap: wrap;
  }
`;

export const NavItem = styled.a`
  color: #838282;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  min-height: 44px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    min-height: 40px;
  }
`;

export const HeaderLogoLink = styled(Link)`
  text-decoration: none;
  color: var(--text);
`;

export const NavItemLink = styled(Link)`
  color: #838282;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  min-height: 44px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    min-height: 40px;
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 6px 8px;
  cursor: pointer;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: var(--bg-secondary);
    color: var(--text);
  }
`;
