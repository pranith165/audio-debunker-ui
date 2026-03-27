import styled, { keyframes, css } from 'styled-components';

// ── Animations ───────────────────────────────────────────────────────────────

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const pulseRing = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3); }
  70%  { box-shadow: 0 0 0 8px rgba(0, 0, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
`;

const checkPop = keyframes`
  0%   { transform: scale(0.5); opacity: 0; }
  60%  { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1);   opacity: 1; }
`;

const fadeSlideIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ── Container ─────────────────────────────────────────────────────────────────

export const StepContainer = styled.div`
  max-width: 560px;
  margin: 0 auto 3rem;
  padding: 2rem 2rem 1.75rem;
  box-sizing: border-box;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 4px 24px var(--shadow-sm), 0 1px 4px rgba(0, 0, 0, 0.04);

  @media (max-width: 600px) {
    border-radius: 12px;
    padding: 1.5rem 1.25rem;
  }
`;

// ── Header ────────────────────────────────────────────────────────────────────

export const StepHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);
`;

export const StepOverallLabel = styled.span`
  font-family: sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text);
`;

export const StepCount = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: var(--text-faint);
  letter-spacing: 0.05em;
`;

// ── Timeline ──────────────────────────────────────────────────────────────────

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StepRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  min-height: 48px;
`;

// ── Icon column (dot + connector line) ───────────────────────────────────────

export const IconCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
`;

export const StepDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  z-index: 1;

  ${({ $completed }) => $completed && css`
    background-color: var(--text);
    border: 2px solid var(--text);
    color: var(--bg);
    > svg { animation: ${checkPop} 0.35s ease forwards; }
  `}

  ${({ $active }) => $active && css`
    background-color: var(--text);
    border: 2px solid var(--text);
    animation: ${pulseRing} 1.8s ease-out infinite;
  `}

  ${({ $pending }) => $pending && css`
    background-color: transparent;
    border: 2px solid var(--border);
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const SpinnerRing = styled.div`
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: rgba(255, 255, 255, 0.8);
  animation: ${spin} 0.7s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ConnectorLine = styled.div`
  width: 2px;
  flex: 1;
  min-height: 20px;
  margin: 3px 0;
  background: ${({ $completed }) => $completed ? 'var(--text)' : 'var(--border)'};
  transition: background-color 0.5s ease;
`;

// ── Step content ──────────────────────────────────────────────────────────────

export const StepContent = styled.div`
  flex: 1;
  padding: 2px 0 1.25rem;
`;

export const StepTitle = styled.div`
  font-family: sans-serif;
  font-size: 0.9375rem;
  font-weight: ${({ $active }) => $active ? 600 : 500};
  color: ${({ $completed, $active }) =>
    $completed ? 'var(--text-faint)' :
    $active    ? 'var(--text)' :
                 'var(--text-faint)'
  };
  transition: color 0.3s ease;
  line-height: 1.4;

  ${({ $completed }) => $completed && css`
    text-decoration: line-through;
    text-decoration-color: var(--border);
  `}
`;

export const StepSubtitle = styled.p`
  font-family: sans-serif;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0.3rem 0 0;
  animation: ${fadeSlideIn} 0.3s ease forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

// ── Status badge ──────────────────────────────────────────────────────────────

export const StepStatus = styled.span`
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding-top: 4px;
  flex-shrink: 0;
  min-width: 52px;
  text-align: right;

  color: ${({ $completed, $active }) =>
    $completed ? '#22c55e' :
    $active    ? 'var(--text)' :
                 'transparent'
  };
  font-weight: ${({ $active }) => $active ? 600 : 400};
`;
