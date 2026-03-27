// LandingPage.styled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// LandingPage.styled.js

export const LandingPageWrapper = styled.div`
  background-color: var(--bg-page);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 3% auto 3%;
  margin-bottom: 0;

  @media (max-width: 768px) {
    grid-template-columns: 2% auto 2%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1% auto 1%;
  }
`;

export const VerticalStripe = styled.div`
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    var(--stripe-bg),
    var(--stripe-bg) 10px,
    var(--stripe-line) 10px,
    var(--stripe-line) 11px
  );

  &.left {
    border-right: 1px solid var(--stripe-line); /* faint right edge */
  }

  &.right {
    border-left: 1px solid var(--stripe-line); /* faint left edge */
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




export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1rem;
  text-align: left;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.75rem;
  }
`;

export const DecorativeLineWrapper = styled.div`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(30, 41, 59, 0.05); /* gray-950/5 */
    transform: translateX(-50%);
    left: 50%;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  @media (max-width: 768px) {
    &::before,
    &::after {
      width: 95%;
    }
  }
`;



export const Heading = styled.h1`
  font-size: clamp(2.5rem, 6vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  padding: 20px 0;
  line-height: 1.05;
  font-family: sans-serif;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 3.5rem);
    line-height: 1.1;
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 9vw, 2.5rem);
    line-height: 1.1;
    padding: 10px 0;
    text-align: center;
  }
`;

export const Subtext = styled.p`
  max-width: 720px;
  font-size: 1.125rem;
  line-height: 1.75;
  color: var(--text-secondary); /* text-gray-600 */
  padding: 8px 0;
  text-align: left;
  font-family: sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    text-align: center;
    padding: 6px 0;
  }
`;

export const RichText = styled.span`
  max-width: 720px;
  font-size: 1.125rem;
  line-height: 1.75;
  color: oklch(0.685 0.169 237.323);
  text-align: left;
  font-family: sans-serif;
`;

export const PoorText = styled.span`
  display: flex;
  max-width: 720px;
  font-size: 12px;
  line-height: 1.75;
  color: gray;
  text-align: left;
  height: 35px;
  align-items: flex-end;
  font-family: monospace;
`;

export const AnalyzeButton = styled(Link)`
  background-color: var(--text);
  color: var(--bg);
  font-family: monospace;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 32px;
  height: 52px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  text-align: center;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #222;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 14px 28px;
    height: 52px;
    min-height: 44px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

export const TrustBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 12px 0;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: center;
    gap: 1rem;
  }
`;

export const TrustItem = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: var(--text-faint);
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #22c55e;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 12px 0;

  @media (max-width: 480px) {
    text-align: center;
    padding: 16px 0;
  }
`;
