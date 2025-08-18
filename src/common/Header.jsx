import { HeaderWrapper, HeaderLogo, NavItems, HeaderLogoLink, NavItem, NavItemLink } from "./Header.styled";



function Header() {
  return (
    <HeaderWrapper>
        <HeaderLogo>
            <HeaderLogoLink to='/'>debunker</HeaderLogoLink>
        </HeaderLogo>
        <NavItems> 
            <NavItemLink to="/about">About</NavItemLink>
            <NavItem>Blog</NavItem>
            <NavItem>Docs</NavItem>
            <NavItemLink to="/fact-check">Get started</NavItemLink>
        </NavItems>
    </HeaderWrapper>
  );
}

export default Header;