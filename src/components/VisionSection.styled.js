import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// ── Section shell ────────────────────────────────────────────────────────────

export const VisionOuter = styled.section`
  background-color: #fff;
  border-top: 1px solid #e5e7eb;
`;

export const VisionWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

// ── Header ───────────────────────────────────────────────────────────────────

export const VisionHeader = styled.div`
  padding: 5rem 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 640px;
`;

export const VisionEyebrow = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: #9ca3af;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const VisionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 800;
  font-family: sans-serif;
  letter-spacing: -0.04em;
  color: #111;
  line-height: 0.95;
  margin: 0;

  @media (max-width: 480px) {
    font-size: clamp(2rem, 8vw, 3rem);
  }
`;

export const VisionSubtitle = styled.p`
  font-size: 1rem;
  color: #4b5563;
  font-family: sans-serif;
  margin: 0;
  max-width: 400px;
  line-height: 1.75;
`;

// ── Sticky scroll layout ──────────────────────────────────────────────────────

export const StickyLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
  padding-bottom: 6rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding-bottom: 0;
  }
`;

// ── Left column (scrollable steps) ───────────────────────────────────────────

export const StepsColumn = styled.div`
  position: relative;
  padding-left: 2rem;
`;

export const ProgressTrack = styled.div`
  position: absolute;
  left: 0;
  top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0;

  /* vertical line behind dots */
  &::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 6px;
    width: 1px;
    bottom: 6px;
    background: #e5e7eb;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ProgressDot = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${p => p.$active ? '#111' : '#e5e7eb'};
  border: 2px solid ${p => p.$active ? '#111' : '#e5e7eb'};
  position: relative;
  z-index: 1;
  transition: background 0.3s ease, border-color 0.3s ease;
  /* space dots evenly — each step is ~50vh, so ~50vh / 3 apart */
  margin-bottom: calc(50vh - 11px);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StepItem = styled.div`
  min-height: 52vh;
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${p => p.$active ? 1 : 0.35};
  transform: ${p => p.$active ? 'none' : 'translateX(-4px)'};
  transition: opacity 0.4s ease, transform 0.4s ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }

  @media (max-width: 900px) {
    min-height: unset;
    padding: 3rem 0;
    opacity: 1;
    transform: none;
  }
`;

export const StepNum = styled.div`
  font-family: monospace;
  font-size: 12px;
  color: #9ca3af;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const ComingSoonBadge = styled.span`
  font-family: monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #d97706;
  background: #fef3c7;
  border: 1px solid #fde68a;
  padding: 2px 7px;
  border-radius: 4px;
`;

export const StepHeading = styled.h3`
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  font-weight: 700;
  font-family: sans-serif;
  letter-spacing: -0.03em;
  color: #111;
  margin: 0 0 0.875rem;
  line-height: 1.2;
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #4b5563;
  font-family: sans-serif;
  margin: 0;
  max-width: 420px;
`;

/* Shown on mobile only */
export const MobileImg = styled.img`
  display: none;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: ${p => p.$position || 'center'};
  border-radius: 12px;
  margin-top: 1.5rem;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.06);

  @media (max-width: 900px) {
    display: block;
  }
`;

// ── Right column (sticky visual) ─────────────────────────────────────────────

export const VisualColumn = styled.div`
  position: sticky;
  top: 120px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const BrowserFrame = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  position: relative;
`;

export const BrowserBar = styled.div`
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const BrowserDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p => p.$c};
  opacity: 0.75;
`;

export const BrowserUrl = styled.span`
  margin-left: 0.75rem;
  font-family: monospace;
  font-size: 11px;
  color: #9ca3af;
`;

export const ImageSlide = styled.div`
  position: ${p => p.$visible ? 'relative' : 'absolute'};
  inset: 0;
  opacity: ${p => p.$visible ? 1 : 0};
  transition: opacity 0.45s ease;
  pointer-events: none;
  display: ${p => p.$portrait ? 'flex' : 'block'};
  align-items: center;
  justify-content: center;
  padding: ${p => p.$portrait ? '1rem' : '0'};
  background: ${p => p.$portrait ? '#111' : 'transparent'};
  min-height: ${p => p.$portrait ? '380px' : 'auto'};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StepImg = styled.img`
  display: block;

  ${p => p.$portrait ? `
    width: auto;
    height: 420px;
    max-height: 100%;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  ` : `
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: ${p.$position || 'center'};
  `}
`;

// ── Closing CTA ───────────────────────────────────────────────────────────────

export const ClosingCTAWrapper = styled.div`
  text-align: center;
  padding: 4.5rem 0 5.5rem;
  border-top: 1px solid #e5e7eb;
`;

export const ClosingCTAText = styled.p`
  font-family: monospace;
  font-size: 12px;
  color: #9ca3af;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`;

export const ShortcutLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1rem;
  font-family: monospace;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #111;
  text-decoration: none;
  border-bottom: 1px solid #111;
  padding-bottom: 1px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const ClosingCTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #111;
  color: #fff;
  font-family: monospace;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 36px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #333;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
`;
