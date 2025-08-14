import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin: 1rem 0;
  }
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border: 1px solid ${({ $active }) => $active ? '#000' : '#d1d5db'};
  border-radius: 20px;
  background-color: ${({ $active }) => $active ? '#000' : 'white'};
  color: ${({ $active }) => $active ? 'white' : '#374151'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    border-color: #000;
    background-color: ${({ $active }) => $active ? '#000' : '#f9fafb'};
  }

  @media (max-width: 768px) {
    padding: 7px 14px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
    letter-spacing: 0.3px;
  }
`;