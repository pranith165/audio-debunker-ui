import { 
  FooterWrapper, 
  FooterContainer, 
  FooterCopyright
} from "./Footer.styled";

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCopyright>
          © 2025 Audio Debunker. All rights reserved.
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;