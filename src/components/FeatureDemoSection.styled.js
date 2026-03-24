import styled, { keyframes, css } from 'styled-components';

// ── Animations ──────────────────────────────────────────────────────────────

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const wave = keyframes`
  0%, 100% { transform: scaleY(0.4); }
  50%       { transform: scaleY(1); }
`;

const fillProgress = keyframes`
  0%   { width: 0%; }
  100% { width: 78%; }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

// ── Section Shell ────────────────────────────────────────────────────────────

export const SectionOuter = styled.section`
  background-color: #fafafa;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`;

export const SectionWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 4rem;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.25rem;
  }
`;

// ── Header ───────────────────────────────────────────────────────────────────

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 4rem;
`;

export const SectionEyebrow = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: #9ca3af;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  font-family: sans-serif;
  letter-spacing: -0.04em;
  color: #111;
  line-height: 1.05;
  margin: 0;

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 7vw, 2.5rem);
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #4b5563;
  font-family: sans-serif;
  max-width: 440px;
  margin: 0;
`;

// ── Layout ───────────────────────────────────────────────────────────────────

export const DemoLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

// ── Feature List (Left) ──────────────────────────────────────────────────────

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const FeatureItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.25rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-left: 2.5px solid ${p => p.$active ? '#111' : 'transparent'};
  background-color: ${p => p.$active ? '#f3f4f6' : 'transparent'};

  &:hover {
    background-color: ${p => p.$active ? '#f3f4f6' : '#f9fafb'};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const FeatureIconWrap = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: ${p => p.$active ? '#111' : '#e5e7eb'};
  color: ${p => p.$active ? '#fff' : '#6b7280'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.2s ease, color 0.2s ease;
`;

export const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const FeatureItemTitle = styled.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  font-family: sans-serif;
  color: #111;
  margin: 0;
`;

export const FeatureItemDesc = styled.p`
  font-size: 0.8125rem;
  line-height: 1.6;
  color: #6b7280;
  font-family: sans-serif;
  margin: 0;
  max-height: ${p => p.$active ? '80px' : '0'};
  overflow: hidden;
  opacity: ${p => p.$active ? 1 : 0};
  transition: max-height 0.3s ease, opacity 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    max-height: none;
    opacity: 1;
    transition: none;
  }
`;

// ── Mockup Panel (Right) ─────────────────────────────────────────────────────

export const MockupPanel = styled.div`
  perspective: 1200px;
`;

export const MockupWindow = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

export const MockupBar = styled.div`
  background: #f3f4f6;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const MockupDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p => p.$color};
  opacity: 0.8;
`;

export const MockupContent = styled.div`
  position: relative;
  min-height: 280px;
  padding: 1.75rem;

  @media (max-width: 480px) {
    min-height: 240px;
    padding: 1.25rem;
  }
`;

export const MockupSlide = styled.div`
  position: absolute;
  inset: 0;
  padding: 1.75rem;
  pointer-events: none;
  opacity: ${p => p.$visible ? 1 : 0};
  transform: ${p => p.$visible ? 'translateY(0)' : 'translateY(8px)'};
  transition: opacity 0.22s ease, transform 0.22s ease;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: opacity 0.1s;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

// ── Slide 1: Audio Analysis ──────────────────────────────────────────────────

export const AudioHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

export const AudioLabel = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: #9ca3af;
  letter-spacing: 0.05em;
`;

export const AudioWaveform = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  height: 56px;
  margin-bottom: 1rem;
`;

export const AudioBar = styled.div`
  width: 4px;
  height: ${p => p.$height}px;
  background: #111;
  border-radius: 2px;
  transform-origin: bottom;
  animation: ${wave} ${p => 0.8 + (p.$delay % 300) / 300}s ease-in-out ${p => p.$delay}ms infinite;
  opacity: 0.7;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const AudioProgress = styled.div`
  width: 100%;
  height: 3px;
  background: #f3f4f6;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.75rem;
`;

export const AudioProgressFill = styled.div`
  height: 100%;
  background: #111;
  border-radius: 2px;
  width: 0%;
  animation: ${fillProgress} 3.5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    width: 78%;
    animation: none;
  }
`;

export const AudioStatus = styled.p`
  font-family: monospace;
  font-size: 11px;
  color: #9ca3af;
  margin: 0;
  line-height: 1.5;
  font-style: italic;
`;

// ── Slide 2: Source Verification ────────────────────────────────────────────

export const SourceHeader = styled.p`
  font-family: monospace;
  font-size: 11px;
  color: #9ca3af;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 1rem;
`;

export const SourceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const SourceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.875rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  animation: ${slideIn} 0.35s ease forwards;
  animation-delay: ${p => p.$delay}ms;
  opacity: 0;
`;

export const SourceIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #dcfce7;
  color: #16a34a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const SourceName = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: #111;
  flex: 1;
`;

export const SourceBadge = styled.span`
  font-family: monospace;
  font-size: 10px;
  color: #9ca3af;
  background: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
`;

// ── Slide 3: Verdict ─────────────────────────────────────────────────────────

export const VerdictHeader = styled.p`
  font-family: monospace;
  font-size: 11px;
  color: #9ca3af;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 0.875rem;
`;

export const VerdictBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  background: #fef2f2;
  color: #ef4444;
  border: 1px solid #fecaca;
  border-radius: 999px;
  font-family: monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  animation: ${fadeIn} 0.4s ease forwards;
`;

export const VerdictMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.875rem;
`;

export const VerdictConfidence = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: #4b5563;
  font-weight: 600;
`;

export const VerdictExcerpt = styled.p`
  font-family: sans-serif;
  font-size: 0.8125rem;
  line-height: 1.65;
  color: #6b7280;
  margin: 0;
  animation: ${slideIn} 0.4s ease 0.15s forwards;
  opacity: 0;
`;

// ── Slide 4: Evidence ────────────────────────────────────────────────────────

export const EvidenceHeader = styled.p`
  font-family: monospace;
  font-size: 11px;
  color: #9ca3af;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 1rem;
`;

export const EvidenceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const EvidenceCard = styled.div`
  padding: 0.65rem 0.875rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  animation: ${slideIn} 0.35s ease forwards;
  animation-delay: ${p => p.$delay}ms;
  opacity: 0;
`;

export const EvidenceUrl = styled.p`
  font-family: monospace;
  font-size: 11px;
  color: #3b82f6;
  margin: 0 0 0.4rem;
  text-decoration: underline;
  text-underline-offset: 2px;
`;

export const EvidenceLine = styled.div`
  height: 7px;
  width: ${p => p.$w}%;
  background: #f3f4f6;
  border-radius: 3px;
  margin-bottom: 0.3rem;

  &:last-child { margin-bottom: 0; }
`;
