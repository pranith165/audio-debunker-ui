import { useState, useRef } from 'react';
import { HeaderWrapper, HeaderLogo, NavItems, HeaderLogoLink, NavItem, NavItemLink, ThemeToggle } from "./Header.styled";
import { analytics } from '../utils/analytics';
import { AdminLogin } from './AdminLogin';
import { useTheme } from '../hooks/useTheme';

function Header() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const handleLogoClick = () => {
    analytics.trackButtonClick('logo', 'header');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 5 rapid clicks opens admin login
    clickCount.current += 1;
    clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => { clickCount.current = 0; }, 1500);
    if (clickCount.current >= 5) {
      clickCount.current = 0;
      setShowAdminLogin(true);
    }
  };

  const handleGetStartedClick = () => {
    analytics.trackButtonClick('bust_myths', 'header');
  };

  const handleAboutClick = () => {
    analytics.trackButtonClick('about', 'header');
  };

  const handleBlogClick = () => {
    analytics.trackExternalLink(
      'https://medium.com/@pranith165/how-we-built-an-ai-that-fact-checks-viral-audio-in-real-time-746d63522101',
      'Blog - Medium Article'
    );
  };

  return (
    <>
      <HeaderWrapper>
          <HeaderLogo>
              <HeaderLogoLink to='/' onClick={handleLogoClick}>debunker</HeaderLogoLink>
          </HeaderLogo>
          <NavItems>
              <NavItemLink to="/about" onClick={handleAboutClick}>About</NavItemLink>
              <NavItem>
                <a href="https://medium.com/@pranith165/how-we-built-an-ai-that-fact-checks-viral-audio-in-real-time-746d63522101"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{ textDecoration: 'none', color: 'inherit' }}
                   onClick={handleBlogClick}>
                  Blog
                </a>
              </NavItem>
              <NavItem>Docs</NavItem>
              <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                )}
              </ThemeToggle>
              <NavItemLink to="/fact-check" onClick={handleGetStartedClick}>Bust Myths</NavItemLink>
          </NavItems>
      </HeaderWrapper>

      {showAdminLogin && (
        <AdminLogin onClose={() => setShowAdminLogin(false)} />
      )}
    </>
  );
}

export default Header;
