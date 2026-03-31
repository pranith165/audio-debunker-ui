import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

const BC = 'cubic-bezier(0.32, 0.94, 0.6, 1)';

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HeroSection = styled.section`
  position: relative;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background: #000;
`;

export const HeroVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.92) 0%,
    rgba(0,0,0,0.35) 50%,
    rgba(0,0,0,0.15) 100%
  );
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem 5rem;

  @media (max-width: 768px) { padding: 0 2rem 4rem; }
  @media (max-width: 480px) { padding: 0 1.25rem 3rem; }
`;

export const HeroEyebrow = styled.span`
  display: block;
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin-bottom: 1.25rem;
  opacity: 0;
  transform: translateY(1.5rem);
  transition: opacity 0.6s ${BC}, transform 0.6s ${BC};

  .loaded & {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.1s;
  }
`;

export const Heading = styled.h1`
  font-size: clamp(3.5rem, 9vw, 10rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.88;
  font-family: sans-serif;
  color: #fff;
  margin: 0 0 2rem;
  max-width: 900px;
  opacity: 0;
  transform: translateY(2rem);
  transition: opacity 0.7s ${BC}, transform 0.7s ${BC};

  .loaded & {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.18s;
  }

  @media (max-width: 768px) { font-size: clamp(2.5rem, 10vw, 5rem); }
  @media (max-width: 480px) { font-size: clamp(2rem, 11vw, 3.5rem); line-height: 0.92; }
`;

export const HeroBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  opacity: 0;
  transform: translateY(1.5rem);
  transition: opacity 0.6s ${BC}, transform 0.6s ${BC};

  .loaded & {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.3s;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const HeroSubtext = styled.p`
  max-width: 360px;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.55);
  font-family: sans-serif;
  margin: 0;
`;

export const HeroCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;

  @media (max-width: 768px) { align-items: flex-start; }
`;

export const AnalyzeButton = styled(Link)`
  background-color: #fff;
  color: #000;
  font-family: monospace;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 16px 40px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: opacity 0.25s ease, transform 0.25s ease;
  white-space: nowrap;

  &:hover { opacity: 0.8; transform: translateY(-2px); }
  &:active { transform: translateY(0); }

  @media (max-width: 480px) { padding: 14px 28px; font-size: 11px; }
`;

export const TrustBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const TrustItem = styled.span`
  font-family: monospace;
  font-size: 10px;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.35);
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
  }
`;

export const ScrollHint = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  opacity: 0;
  transition: opacity 0.6s ease 0.8s;

  .loaded & { opacity: 1; }

  span {
    font-family: monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
  }
`;

export const ScrollLine = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.2);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.6);
    animation: scrollDrop 1.8s ease-in-out infinite;
  }

  @keyframes scrollDrop {
    0% { top: -100%; }
    100% { top: 100%; }
  }
`;

// ─── Full-bleed image break sections ────────────────────────────────────────

export const ImageBreak = styled.section`
  position: relative;
  height: ${p => p.$height || '80vh'};
  overflow: hidden;
`;

export const ImageBreakImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 115%;
  object-fit: cover;
  object-position: ${p => p.$position || 'center'};
  will-change: transform;
`;

export const ImageBreakOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${p => p.$bg || 'rgba(0,0,0,0.45)'};
  z-index: 1;
`;

export const ImageBreakContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: ${p => p.$align || 'center'};
  align-items: ${p => p.$halign || 'flex-start'};
  padding: 5rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  left: 0;
  right: 0;

  @media (max-width: 768px) { padding: 3rem 2rem; }
  @media (max-width: 480px) { padding: 2rem 1.25rem; }
`;

export const ImageBreakEyebrow = styled.span`
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  margin-bottom: 1rem;
  display: block;
`;

export const ImageBreakHeading = styled.h2`
  font-size: clamp(2.5rem, 6vw, 7rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.9;
  font-family: sans-serif;
  color: #fff;
  margin: 0 0 1.5rem;
  max-width: 700px;

  @media (max-width: 480px) { font-size: clamp(2rem, 9vw, 3.5rem); }
`;

export const ImageBreakSub = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.6);
  font-family: sans-serif;
  max-width: 400px;
  margin: 0;
`;

// ─── Reveal utility (used globally via .reveal / .reveal.visible) ─────────────

export const revealCss = css`
  .reveal {
    opacity: 0;
    transform: translateY(2.5rem);
    transition: opacity 0.65s ${BC}, transform 0.65s ${BC};
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-scale {
    opacity: 0;
    transform: scale(0.92);
    transition: opacity 0.7s ${BC}, transform 0.7s ${BC};
  }
  .reveal-scale.visible {
    opacity: 1;
    transform: scale(1);
  }
`;

// Kept for compatibility
export const RichText = styled.span`
  color: rgba(255,255,255,0.9);
  font-weight: 700;
`;
export const Eyebrow = styled.span``;
export const Subtext = styled.p``;
export const ButtonWrapper = styled.div``;
export const HeroImage = styled.img``;
export const HeroLeft = styled.div``;
export const HeroRight = styled.div``;
export const DecorativeLineWrapper = styled.div``;
export const PoorText = styled.span`display:none`;
export const LandingPageWrapper = styled.div``;
export const VerticalStripe = styled.div``;
export const Wrapper = styled.div``;
