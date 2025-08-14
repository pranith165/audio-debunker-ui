import styled from 'styled-components';

export const SortWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin: 1rem 0;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const SortButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 2px solid ${({ $active }) => $active ? '#000' : '#d1d5db'};
  border-radius: 12px;
  background-color: ${({ $active }) => $active ? '#000' : 'white'};
  color: ${({ $active }) => $active ? 'white' : '#374151'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: monospace;
  min-width: 120px;
  position: relative;

  .sort-label {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    line-height: 1.2;
  }

  .sort-desc {
    font-size: 0.75rem;
    opacity: 0.8;
    line-height: 1.1;
  }

  &:hover {
    border-color: #000;
    background-color: ${({ $active }) => $active ? '#000' : '#f9fafb'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    min-width: 100px;
    padding: 0.6rem 0.8rem;
    
    .sort-label {
      font-size: 0.8rem;
    }
    
    .sort-desc {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    
    .sort-label {
      font-size: 0.9rem;
    }
    
    .sort-desc {
      font-size: 0.75rem;
      text-align: right;
    }
  }
`;