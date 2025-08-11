import { HeaderWrapper, HeaderLogo, NavItems, GitIcon, HeaderLogoLink, NavItem } from "./Header.styled";



function Header() {
  return (
    <HeaderWrapper>
        <HeaderLogo>
            <HeaderLogoLink to='/'>debunker</HeaderLogoLink>
        </HeaderLogo>
        <NavItems> 
            <NavItem><GitIcon/></NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Docs</NavItem>
            <NavItem>Get started</NavItem>
        </NavItems>
    </HeaderWrapper>
  );
}

export default Header;