import styled from 'styled-components';

export const ClaimCardWrapper = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: white;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border-color: #d1d5db;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    min-height: 260px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 240px;
  }
`;

export const VerdictBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  font-family: monospace;
  text-transform: uppercase;
  background-color: ${({ $verdict }) => {
    switch($verdict?.toLowerCase()) {
      case 'true': return '#10b981';
      case 'false': return '#ef4444'; 
      case 'mixed': return '#f59e0b';
      case 'uncertain': return '#6b7280';
      default: return '#6b7280';
    }
  }};

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 4px 8px;
    top: 8px;
    right: 8px;
  }
`;

export const ClaimTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  line-height: 1.4;
  margin-top: 2rem; /* Space for badge */
  font-family: sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-top: 1.5rem;
  }
`;

export const ClaimText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
  flex: 1;
  font-family: monospace;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

export const ClaimMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  gap: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

export const CategoryTag = styled.span`
  background-color: ${({ $category }) => {
    switch($category?.toLowerCase()) {
      case 'health': return '#dcfce7';
      case 'politics': return '#dbeafe';
      case 'science': return '#f3e8ff';
      case 'environment': return '#ecfdf5';
      case 'technology': return '#fef7cd';
      default: return '#f3f4f6';
    }
  }};
  color: ${({ $category }) => {
    switch($category?.toLowerCase()) {
      case 'health': return '#166534';
      case 'politics': return '#1e40af';
      case 'science': return '#7c3aed';
      case 'environment': return '#059669';
      case 'technology': return '#d97706';
      default: return '#374151';
    }
  }};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  font-family: monospace;

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 3px 6px;
  }
`;

export const TrendingScore = styled.span`
  font-size: 12px;
  color: #ef4444;
  font-weight: bold;
  font-family: monospace;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const ClaimStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #9ca3af;
  border-top: 1px solid #f3f4f6;
  padding-top: 0.75rem;
  font-family: monospace;

  .views, .time {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .share-btn {
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.2s ease;
    font-family: monospace;

    &:hover {
      background-color: #f3f4f6;
      color: #6b7280;
    }
  }

  @media (max-width: 480px) {
    font-size: 10px;
    
    .share-btn {
      font-size: 10px;
      padding: 3px 6px;
    }
  }
`;