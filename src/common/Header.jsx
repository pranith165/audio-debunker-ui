import { useState, useRef } from 'react';
import { HeaderWrapper, HeaderLogo, NavItems, HeaderLogoLink, NavItem, NavItemLink } from "./Header.styled";
import { analytics } from '../utils/analytics';
import { AdminLogin } from './AdminLogin';

function Header() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef(null);

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
