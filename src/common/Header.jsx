import { HeaderWrapper, HeaderLogo, NavItems, HeaderLogoLink, NavItem, NavItemLink } from "./Header.styled";



function Header() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderWrapper>
        <HeaderLogo>
            <HeaderLogoLink to='/' onClick={handleLogoClick}>debunker</HeaderLogoLink>
        </HeaderLogo>
        <NavItems> 
            <NavItemLink to="/about">About</NavItemLink>
            <NavItem>
              <a href="https://medium.com/@pranith165/how-we-built-an-ai-that-fact-checks-viral-audio-in-real-time-746d63522101" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{ textDecoration: 'none', color: 'inherit' }}>
                Blog
              </a>
            </NavItem>
            <NavItem>Docs</NavItem>
            <NavItemLink to="/fact-check">Bust Myths</NavItemLink>
        </NavItems>
    </HeaderWrapper>
  );
}

export default Header;