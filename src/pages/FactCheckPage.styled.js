import styled from 'styled-components';

export const FactCheckWrapper = styled.div`
  background-color: var(--bg-page);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 3% auto 3%;

  @media (max-width: 768px) {
    grid-template-columns: 2% auto 2%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1% auto 1%;
    overflow-x: hidden;
  }
`;

export const PageHeader = styled.div`
  padding: 4rem 0 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
  align-items: center;
`;

export const PageEyebrow = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: var(--text-faint);
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const PageTitle = styled.h1`
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  font-family: sans-serif;
  letter-spacing: -0.04em;
  color: var(--text-heading);
  line-height: 1.05;
  margin: 0;
`;

export const PageSubtitle = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  font-family: sans-serif;
  margin: 0;
  max-width: 420px;
`;

export const FactCheckUploadWrapper = styled.div`
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 4px 24px var(--shadow-sm), 0 1px 4px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 560px;
  margin: 0 auto 3rem;
  padding: 2rem 2rem 1.75rem;
  box-sizing: border-box;

  @media (max-width: 600px) {
    border-radius: 12px;
    padding: 1.5rem 1.25rem;
  }
`;
