// LandingPage.styled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// LandingPage.styled.js

export const LandingPageWrapper = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 3% auto 3%;
`;

export const VerticalStripe = styled.div`
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    #f8fafc,
    #f8fafc 10px,
    rgba(0, 0, 0, 0.05) 10px,
    rgba(0, 0, 0, 0.05) 11px
  );

  &.left {
    border-right: 1px solid rgba(0, 0, 0, 0.05); /* faint right edge */
  }

  &.right {
    border-left: 1px solid rgba(0, 0, 0, 0.05); /* faint left edge */
  }
`;




export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1rem;
  text-align: left;
`;

export const DecorativeLineWrapper = styled.div`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100vw;
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
`;



export const Heading = styled.h1`
  font-size: clamp(2.5rem, 6vw, 6rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  padding: 20px 0;
  line-height: 85px;
  font-family: sans-serif;
`;

export const Subtext = styled.p`
  max-width: 720px;
  font-size: 1.125rem;
  line-height: 1.75;
  color: #4b5563; /* text-gray-600 */
  padding: 8px 0;
  text-align: left;
  font-family: sans-serif;
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
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-family: monospace;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  padding: 8px 16px;
  height: 40px;
  border: none;
  border-radius: 32px;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
`;

export const ButtonWrapper = styled.div`
  padding: 12px 0;
`;
