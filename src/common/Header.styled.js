import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  color: var(--text);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;

  /* Transparent when over hero */
  background-color: transparent;
  border-bottom: 1px solid transparent;

  /* Solid once scrolled (.scrolled class added via JS) */
  &.scrolled {
    background-color: var(--bg-surface);
    border-bottom: 1px solid var(--border);
    box-shadow: 0 1px 3px var(--shadow-sm);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
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
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  min-height: 44px;
  display: flex;
  align-items: center;
  transition: color 0.35s ease;

  .scrolled & {
    color: #838282;
  }

  &:hover {
    color: #fff;
    text-decoration: none;
  }

  .scrolled &:hover {
    color: var(--text);
  }

  @media (max-width: 768px) { font-size: 13px; }
  @media (max-width: 480px) { font-size: 12px; min-height: 40px; }
`;

export const HeaderLogoLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.35s ease;

  .scrolled & {
    color: var(--text);
  }
`;

export const NavItemLink = styled(Link)`
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  min-height: 44px;
  display: flex;
  align-items: center;
  transition: color 0.35s ease;

  .scrolled & {
    color: #838282;
  }

  &:hover {
    color: #fff;
  }

  .scrolled &:hover {
    color: var(--text);
  }

  @media (max-width: 768px) { font-size: 13px; }
  @media (max-width: 480px) { font-size: 12px; min-height: 40px; }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: 1px solid rgba(255,255,255,0.25);
  color: rgba(255,255,255,0.65) !important;
  transition: border-color 0.35s ease, color 0.35s ease, background-color 0.35s ease;

  .scrolled & {
    border-color: var(--border);
    color: var(--text-muted) !important;
  }

  /* override original: */
  border-radius: 8px;
  padding: 6px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;

  &:hover {
    background-color: rgba(255,255,255,0.1);
    color: #fff !important;
  }

  .scrolled &:hover {
    background-color: var(--bg-secondary);
    color: var(--text) !important;
  }

  /* Remove the original border re-declaration: */
  border: 1px solid rgba(255,255,255,0.25);
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
