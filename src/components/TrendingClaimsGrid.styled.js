import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridSideStripe = styled.div`
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    var(--stripe-bg),
    var(--stripe-bg) 10px,
    var(--stripe-line) 10px,
    var(--stripe-line) 11px
  );

  &.left {
    border-right: 1px solid var(--border-subtle);
  }

  &.right {
    border-left: 1px solid var(--border-subtle);
  }

  @media (max-width: 768px) {
    background: repeating-linear-gradient(
      45deg,
      var(--stripe-bg),
      var(--stripe-bg) 8px,
      var(--stripe-line) 8px,
      var(--stripe-line) 9px
    );
  }

  @media (max-width: 480px) {
    background: repeating-linear-gradient(
      45deg,
      var(--stripe-bg),
      var(--stripe-bg) 6px,
      var(--stripe-line) 6px,
      var(--stripe-line) 7px
    );
  }
`;

export const GridContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`;

export const GridWrapper = styled.div`
  background-color: var(--bg-page);
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 3% auto 3%;

  @media (max-width: 768px) {
    grid-template-columns: 2% auto 2%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1% auto 1%;
  }
`;

export const GridHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

export const GridTitle = styled.h1`
  font-size: clamp(2.25rem, 5vw, 4.5rem);
  font-weight: 800;
  color: var(--text-heading);
  margin: 0 0 1rem 0;
  font-family: sans-serif;
  letter-spacing: -0.04em;
  line-height: 0.95;

  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 7vw, 2rem);
    margin-bottom: 0.75rem;
  }
`;

export const GridSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-muted);
  margin: 0 auto 2rem auto;
  max-width: 600px;
  line-height: 1.6;
  font-family: sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

export const StatsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  font-family: monospace;

  span {
    color: var(--text-muted);
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    span {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 0.75rem;

    span {
      font-size: 0.75rem;
    }
  }
`;

export const AnalyzeOwnButton = styled(Link)`
  background-color: var(--text);
  color: var(--bg);
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: monospace;

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
    display: block;
  }
`;

export const ClaimsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-muted);
  font-family: monospace;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    font-size: 0.85rem;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #ef4444;
  background-color: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 8px;
  margin: 2rem 0;
  font-family: monospace;

  button {
    margin-top: 1rem;
    background-color: #ef4444;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-family: monospace;

    &:hover {
      background-color: #dc2626;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    margin: 1rem 0;
    font-size: 0.9rem;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: transparent;
  color: var(--text);
  border: 1.5px solid var(--text);
  padding: 12px 32px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-family: monospace;

  &:hover {
    background-color: var(--text);
    color: var(--bg);
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.8rem;
    width: 100%;
    max-width: 200px;
  }
`;

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const SkeletonCard = styled.div`
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  background: var(--bg-surface);
  min-height: 280px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SkeletonLine = styled.div`
  height: ${p => p.$h || '14px'};
  width: ${p => p.$w || '100%'};
  border-radius: 6px;
  background: linear-gradient(90deg, var(--bg-secondary) 25%, var(--border) 50%, var(--bg-secondary) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--bg-secondary);
  }
`;
