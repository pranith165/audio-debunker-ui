import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
  backdrop-filter: blur(4px);
`;

export const ErrorContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid #e5e7eb;
  position: relative;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
    max-width: 85%;
    margin: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    border-radius: 8px;
    max-width: 90%;
  }
`;

export const ErrorImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 1.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 120px;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    width: 100px;
    margin-bottom: 1rem;
  }
`;

export const ErrorTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 0.25rem;
  font-family: sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const ErrorSubtitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 2rem;
  font-family: sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const ErrorButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px;
  font-family: sans-serif;
  margin-bottom: 1rem;

  &:hover {
    background-color: #333;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

export const CountdownText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  font-family: sans-serif;
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;