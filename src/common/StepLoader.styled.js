import styled, { keyframes, css } from 'styled-components';

const blockDrop = keyframes`
  0% {
    transform: translateY(-10px) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0px) rotate(180deg);
    opacity: 1;
  }
`;

const blockShuffle = keyframes`
  0%, 100% { transform: translateX(0px); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
`;

export const HorizontalStepContainer = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 768px) {
    padding: 0.75rem;
    margin: 1.5rem auto;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    margin: 1rem auto;
    gap: 0.4rem;
  }
`;

export const HorizontalStep = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border-left: 3px solid ${({ $completed, $active }) => 
    $completed ? '#000' : $active ? '#333' : '#ccc'
  };
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  opacity: ${({ $pending }) => $pending ? 0.4 : 1};
  min-height: 60px;

  ${({ $active }) => $active && css`
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    transform: translateX(2px);
  `}

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    min-height: 55px;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0.625rem 0.75rem;
    min-height: 50px;
    gap: 0.4rem;
  }
`;

export const StepTitle = styled.div`
  font-weight: 600;
  margin: 0;
  font-size: 1rem;
  color: ${({ $completed, $active }) => 
    $completed ? '#000' : $active ? '#333' : '#666'
  };
  font-family: monospace;
  
  .checkmark {
    margin-left: 0.5rem;
    color: #000;
    font-weight: bold;
  }

  ${({ $active }) => $active && css`
    animation: ${pulse} 2s infinite;
  `}
`;

export const TetrisLoader = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  padding: 8px 12px;
  background-color: #f8f9fa;
  border-radius: 6px;
  border: 1px solid ${({ $completed, $active }) => 
    $completed ? '#000' : $active ? '#333' : '#ddd'
  };
`;

export const TetrisBlock = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ $completed, $active }) => 
    $completed ? '#000' : $active ? '#333' : '#ccc'
  };
  border-radius: 1px;
  opacity: ${({ $active, $completed }) => $completed ? 1 : $active ? 0.8 : 0.4};
  
  ${({ $active, $delay }) => $active && css`
    animation: ${blockDrop} 0.5s ease-out ${$delay}s both,
               ${blockShuffle} 1.5s ease-in-out ${$delay + 0.5}s infinite;
  `}

  ${({ $completed }) => $completed && css`
    animation: none;
    transform: scale(1);
  `}

  /* Create different tetris shapes with nth-child */
  &:nth-child(1), &:nth-child(2) {
    height: 12px; /* Taller block */
  }
  
  &:nth-child(3), &:nth-child(4), &:nth-child(5) {
    width: 6px;
    height: 10px;
  }
  
  &:nth-child(6), &:nth-child(7) {
    height: 14px; /* Extra tall */
  }
  
  &:nth-child(8) {
    width: 10px;
    height: 6px; /* Wide block */
  }
`;
