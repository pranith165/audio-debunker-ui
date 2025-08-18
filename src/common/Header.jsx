import { HeaderWrapper, HeaderLogo, NavItems, HeaderLogoLink, NavItem, NavItemLink } from "./Header.styled";



function Header() {
  return (
    <HeaderWrapper>
        <HeaderLogo>
            <HeaderLogoLink to='/'>debunker</HeaderLogoLink>
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
            <NavItemLink to="/fact-check">Get started</NavItemLink>
        </NavItems>
    </HeaderWrapper>
  );
}

export default Header;