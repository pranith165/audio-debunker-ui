import styled from 'styled-components';

export const VisionOuter = styled.section`
  background-color: #fff;
  border-top: 3px solid #111;
  border-bottom: 3px solid #111;
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

export const VisionHeader = styled.div`
  padding: 4rem 0 3rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const VisionEyebrow = styled.span`
  font-family: monospace;
  font-size: 16px;
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
  margin: 0.5rem 0 0;

  @media (max-width: 480px) {
    font-size: clamp(2rem, 8vw, 3rem);
  }
`;

export const VisionSubtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
  font-family: sans-serif;
  margin: 1.25rem 0 0;
  max-width: 480px;
  line-height: 1.6;
`;

export const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Step = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  padding: 5rem 0;
  border-bottom: 1px solid #e5e7eb;
  position: relative;

  &:last-child {
    border-bottom: none;
    padding-bottom: 5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3.5rem 0;
  }
`;

export const StepText = styled.div`
  order: ${p => p.$reverse ? 2 : 1};

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const StepImage = styled.div`
  order: ${p => p.$reverse ? 1 : 2};

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const StepNumber = styled.div`
  font-family: monospace;
  font-size: 5rem;
  font-weight: 800;
  color: #f3f4f6;
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.04em;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const StepHeading = styled.h3`
  font-size: clamp(1.6rem, 2.2vw, 2.25rem);
  font-weight: 700;
  font-family: sans-serif;
  letter-spacing: -0.03em;
  color: #111;
  margin: 0 0 1rem;
  line-height: 1.2;
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #6b7280;
  font-family: sans-serif;
  max-width: 420px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StepImg = styled.img`
  width: 100%;
  border-radius: 14px;
  display: block;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.08);
`;
