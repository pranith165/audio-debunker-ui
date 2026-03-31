import styled from 'styled-components';

export const StatsOuter = styled.section`
  position: relative;
  background-color: #0a0a0a;
  overflow: hidden;
`;

export const StatsBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  pointer-events: none;
  filter: grayscale(100%);
`;

export const StatsWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;

  @media (max-width: 768px) {
    padding: 3.5rem 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StatItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    min-width: 120px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const StatNumber = styled.div`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  font-family: sans-serif;
  letter-spacing: -0.05em;
  color: #fff;
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 0.1em;
`;

export const StatSuffix = styled.span`
  font-size: 0.5em;
  font-weight: 700;
  color: #6b7280;
`;

export const StatLabel = styled.p`
  font-family: monospace;
  font-size: 11px;
  color: #4b5563;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0;
`;

export const StatDivider = styled.div`
  width: 1px;
  height: 56px;
  background: #1f1f1f;
  flex-shrink: 0;

  @media (max-width: 480px) {
    display: none;
  }
`;
