import styled from 'styled-components';

export const AboutWrapper = styled.div`
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 3% auto 3%;
  margin-bottom: 0;

  @media (max-width: 768px) {
    grid-template-columns: 2% auto 2%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1% auto 1%;
  }
`;

export const VerticalStripe = styled.div`
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    #f8fafc,
    #f8fafc 10px,
    rgba(0, 0, 0, 0.05) 10px,
    rgba(0, 0, 0, 0.05) 11px
  );

  &.left {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
  }

  &.right {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    background: repeating-linear-gradient(
      45deg,
      #f8fafc,
      #f8fafc 8px,
      rgba(0, 0, 0, 0.08) 8px,
      rgba(0, 0, 0, 0.08) 9px
    );
  }

  @media (max-width: 480px) {
    background: repeating-linear-gradient(
      45deg,
      #f8fafc,
      #f8fafc 6px,
      rgba(0, 0, 0, 0.1) 6px,
      rgba(0, 0, 0, 0.1) 7px
    );
  }
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem 4rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.3;
  color: #424242;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-top: 1.5rem;
  line-height: 1.6;
`;

export const ContentSection = styled.section`
  padding: 2.5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContentBlock = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #424242;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const AcknowledgmentSection = styled.section`
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }
`;

export const ClaudeCodeSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const ClaudeCodeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: #f0f0f0;
  margin-bottom: 2rem;
  font-family: monospace;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const PixelText = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 3rem;
  font-weight: bold;
  color: #ff6b5a;
  text-shadow: 
    2px 2px 0px #d45544,
    4px 4px 0px #b33e2e,
    6px 6px 0px #922818;
  letter-spacing: 0.5rem;
  margin: 2rem 0;
  line-height: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 0.3rem;
    text-shadow: 
      1px 1px 0px #d45544,
      2px 2px 0px #b33e2e,
      3px 3px 0px #922818;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    text-shadow: 
      1px 1px 0px #d45544,
      2px 2px 0px #b33e2e;
  }
`;

export const ClaudeCodeText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #d0d0d0;
  margin-top: 2rem;
  font-family: monospace;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const FoundersSection = styled.section`
  padding: 4rem 2rem;
  border-top: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #424242;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const FoundersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
  justify-items: center;

  /* Third card (Claude Code) spans both columns and centers itself */
  & > div:nth-child(3) {
    grid-column: 1 / -1;
    justify-self: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    
    & > div:nth-child(3) {
      grid-column: 1;
    }
  }
`;

export const FounderCard = styled.div`
  text-align: center;
`;

export const FounderImageContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

export const FounderImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
  }
`;

export const FounderInfo = styled.div`
  text-align: center;
`;

export const FounderName = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: #424242;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const FounderTitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const FounderBio = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #424242;
  text-align: left;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;