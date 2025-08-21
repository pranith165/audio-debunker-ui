import { HeaderWrapper, HeaderLogo, NavItems, HeaderLogoLink, NavItem, NavItemLink } from "./Header.styled";
import { analytics } from '../utils/analytics';

function Header() {
  const handleLogoClick = () => {
    analytics.trackButtonClick('logo', 'header');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
  );
}

export default Header;