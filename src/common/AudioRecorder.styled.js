import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;

const waveAnimation = keyframes`
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.5); }
`;

export const RecorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

export const RecordButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid ${({ $isRecording }) => $isRecording ? '#ef4444' : '#000'};
  background-color: ${({ $isRecording }) => $isRecording ? '#ef4444' : 'white'};
  color: ${({ $isRecording }) => $isRecording ? 'white' : '#000'};
  font-size: 2rem;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  
  ${({ $isRecording }) => $isRecording && css`
    animation: ${pulse} 1.5s infinite;
  `}

  &:hover {
    transform: ${({ disabled }) => disabled ? 'none' : 'scale(1.05)'};
    box-shadow: ${({ disabled }) => disabled ? 'none' : '0 4px 12px rgba(0,0,0,0.15)'};
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    width: 65px;
    height: 65px;
    font-size: 1.6rem;
  }
`;

export const RecordingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const WaveformContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  height: 30px;

  .wave-bar {
    width: 3px;
    height: 10px;
    background-color: #ef4444;
    border-radius: 2px;
    animation: ${waveAnimation} 1s infinite;
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.1s; }
    &:nth-child(3) { animation-delay: 0.2s; }
    &:nth-child(4) { animation-delay: 0.3s; }
    &:nth-child(5) { animation-delay: 0.4s; }
  }
`;

export const TimerDisplay = styled.div`
  font-family: monospace;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ef4444;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const PreviewControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const PlayButton = styled.button`
  background-color: #10b981;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  min-height: 44px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};

  &:hover {
    background-color: ${({ disabled }) => disabled ? '#10b981' : '#059669'};
    transform: ${({ disabled }) => disabled ? 'none' : 'translateY(-1px)'};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 28px;
    min-height: 48px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    font-size: 16px;
    padding: 16px 32px;
  }
`;

export const RerecordButton = styled.button`
  background-color: transparent;
  color: #6b7280;
  border: 1px solid #d1d5db;
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 12px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  min-height: 36px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};

  &:hover {
    background-color: ${({ disabled }) => disabled ? 'transparent' : '#f9fafb'};
    border-color: ${({ disabled }) => disabled ? '#d1d5db' : '#9ca3af'};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
    min-height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 12px 24px;
    min-height: 44px;
  }
`;

export const RecordingStatus = styled.p`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin: 0;
  font-family: monospace;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0 1rem;
  }
`;