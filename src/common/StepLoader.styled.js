import styled from 'styled-components';

export const StepContainer = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 2rem;
`;

export const Step = styled.div`
  background: white;
  padding: 1.2rem 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  border-left: 4px solid ${({ $done }) => ($done ? '#4CAF50' : '#ccc')};
  box-shadow: 0 0 4px rgba(0,0,0,0.05);
`;

export const Title = styled.h3`
  font-weight: 600;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0.2rem 0 0;
`;

export const CheckIcon = styled.span`
  float: right;
  font-size: 18px;
  color: #4CAF50;
`;
