import styled from 'styled-components';

export const StatsOuter = styled.section`
  background-color: #111;
  border-top: 3px solid #111;
`;

export const StatsWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    flex-wrap: wrap;
    gap: 0;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;

export const StatItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
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
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  font-weight: 800;
  font-family: sans-serif;
  letter-spacing: -0.04em;
  color: #fff;
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 0.1em;
`;

export const StatSuffix = styled.span`
  font-size: 0.55em;
  font-weight: 700;
  color: #9ca3af;
`;

export const StatLabel = styled.p`
  font-family: monospace;
  font-size: 11px;
  color: #6b7280;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0;
`;

export const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: #2d2d2d;
  flex-shrink: 0;

  @media (max-width: 480px) {
    display: none;
  }
`;
