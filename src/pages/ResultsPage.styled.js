import styled from 'styled-components';
import { SiBookstack } from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import { GrResources } from "react-icons/gr";


export const ResultsWrapper = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 3% auto 3%;

  @media (max-width: 768px) {
    grid-template-columns: 2% auto 2%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1% auto 1%;
  }
`;

export const ResultsHeaderWrapper = styled.div`


`;

export const ResultHeadliner = styled.h1`
  text-align: center;
  margin: 25px auto;
  font-family: monospace;
  font-size: 1.5rem;
  line-height: 1.2;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 20px auto;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin: 15px auto;
    padding: 0 0.5rem;
  }
`;

export const ResultsOverview = styled.div`
  border: 1px solid gray;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: white;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    & > div {
      border-right: none;
      border-bottom: 1px solid #979292;
    }
    
    & > div:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

export const OverviewCard = styled.div`
    padding: 2rem;
    border-right: 1px solid #979292;
    text-align: left;
    background-color: white;
    transition: background 0.3s ease;
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 1rem;
    min-height: 200px;
    max-height: 200px;
    align-content: start;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${({ hoverBg }) => hoverBg || "#fafafa"};
    cursor: pointer;
    svg {
      color: ${({ hoverColor }) => hoverColor || "#000"};
    }

    h4 {
      color: ${({ hoverColor }) => hoverColor || "#000"};
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    text-align: left;
    padding: 1.5rem;
    min-height: 140px;
    max-height: 140px;
    gap: 0.75rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 120px;
    max-height: 120px;
    gap: 0.5rem;
    grid-template-columns: auto 1fr;
  }
`;

export const OverViewBookIcon = styled(SiBookstack)`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const OverViewAIIcon = styled(DiIllustrator)`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const OverViewIcon3 = styled(GrResources)`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const OverViewTitle = styled.h4`
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${({ highlighted }) => (highlighted ? "#007bff" : "#000")};
  margin: 0 0 0.5rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 12px;
    letter-spacing: 0.5px;
    margin: 0 0 0.375rem 0;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    letter-spacing: 0.25px;
    margin: 0 0 0.25rem 0;
  }
`;

export const OverViewDescription = styled.p`
  font-size: 16px;
  color: #a09b9b;
  margin: 0;
  font-family: monospace;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 5.6em;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 1.3;
    -webkit-line-clamp: 3;
    max-height: 3.9em;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    line-height: 1.3;
    -webkit-line-clamp: 3;
    max-height: 3.6em;
  }
`;

export const OverViewDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    height: auto;
  }

  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 0.25rem;
    }

    @media (max-width: 480px) {
      justify-content: flex-start;
      align-items: flex-start;
    }
`;

// Detailed Analysis Components
export const DetailedAnalysisWrapper = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin: 2rem 0;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
    border-radius: 6px;
  }
`;

export const TabNavigation = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  overflow: visible;

  /* LG: Large screens (1025px+) - Horizontal layout */
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
  }

  /* MD: Medium screens (821px-1024px) */
  @media (max-width: 1024px) and (min-width: 821px) {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
  }

  /* SM: Small screens (601px-820px) - FIX THE 622px ISSUE */
  @media (max-width: 820px) and (min-width: 601px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    justify-content: center;
    width: 100%;
  }

  /* XS: Extra small screens (360px-600px) */
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0;
  }
`;

export const TabButton = styled.button`
  flex: 0 0 auto;
  padding: 1rem 2rem;
  background: none;
  border: none;
  font-weight: 500;
  color: ${({ active }) => active ? 'oklch(0.685 0.169 237.323)' : '#6b7280'};
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 2px solid ${({ active }) => active ? 'oklch(0.685 0.169 237.323)' : 'transparent'};
  font-family: monospace;
  font-size: 14px;
  min-height: 44px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;

  /* LG: Large screens (1025px+) - Horizontal layout */
  @media (min-width: 1025px) {
    flex: 1;
    padding: 1rem 1.5rem;
    font-size: 14px;
    white-space: nowrap;
    width: 25%;
  }

  /* MD: Medium screens (821px-1024px) */
  @media (max-width: 1024px) and (min-width: 821px) {
    flex: 1;
    padding: 0.875rem 1rem;
    font-size: 13px;
    white-space: nowrap;
    width: 25%;
  }

  /* SM: Small screens (601px-820px) - Grid layout */
  @media (max-width: 820px) and (min-width: 601px) {
    padding: 0.75rem 0.5rem;
    font-size: 11px;
    white-space: normal;
    line-height: 1.3;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  /* XS: Extra small screens (360px-600px) */
  @media (max-width: 600px) {
    padding: 0.75rem 1rem;
    font-size: 12px;
    white-space: normal;
    line-height: 1.3;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    text-align: center;
    margin: 0;
    flex-shrink: 0;
  }

  &:hover {
    background-color: #f3f4f6;
    color: ${({ active }) => active ? 'oklch(0.685 0.169 237.323)' : '#1f2937'};
  }

  ${({ active }) => active && `
    background-color: white;
  `}
`;

export const TabContent = styled.div`
  padding: 2rem;
  min-height: 300px;

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 250px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 200px;
  }
`;

export const OverviewSection = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
  max-width: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;
  word-wrap: break-word;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  h3 {
    color: #1f2937;
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-family: monospace;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    font-family: monospace;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 0.875rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.5;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;

    h3 {
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
    }

    p {
      font-size: 0.8rem;
      line-height: 1.4;
    }
  }
`;

export const TranscriptionBox = styled.div`
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid oklch(0.685 0.169 237.323);
  color: #4b5563;
  line-height: 1.6;
  font-style: italic;
  font-family: monospace;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.25rem;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    font-size: 0.8rem;
    line-height: 1.4;
    border-radius: 6px;
  }
`;

export const ClaimsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ClaimItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ status }) => {
    switch(status) {
      case 'false': return '#fef2f2';
      case 'true': return '#f0fdf4';
      case 'mixed': return '#fffbeb';
      default: return '#f9fafb';
    }
  }};
  border-radius: 8px;
  border-left: 4px solid ${({ status }) => {
    switch(status) {
      case 'false': return '#ef4444';
      case 'true': return '#10b981';
      case 'mixed': return '#f59e0b';
      default: return '#6b7280';
    }
  }};

  p {
    margin: 0;
    font-family: monospace;
    color: #1f2937;
  }
`;

export const ClaimStatus = styled.span`
  flex-shrink: 0;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  font-family: monospace;
  background-color: ${({ status }) => {
    switch(status) {
      case 'false': return '#fee2e2';
      case 'true': return '#dcfce7';
      case 'mixed': return '#fef3c7';
      default: return '#f3f4f6';
    }
  }};
  color: ${({ status }) => {
    switch(status) {
      case 'false': return '#dc2626';
      case 'true': return '#16a34a';
      case 'mixed': return '#d97706';
      default: return '#6b7280';
    }
  }};
`;

export const SourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 0.875rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const SourceItem = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #fafafa;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 600;
    color: #1f2937;
    line-height: 1.4;
    font-family: monospace;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
  }

  a {
    color: oklch(0.685 0.169 237.323);
    text-decoration: none;
    font-size: 0.875rem;
    font-family: monospace;
    font-weight: 600;
    margin-top: auto;
    padding: 0.5rem 0.75rem;
    background-color: rgba(110, 142, 251, 0.1);
    border-radius: 4px;
    transition: all 0.2s ease;
    display: inline-block;
    text-align: center;

    &:hover {
      background-color: rgba(110, 142, 251, 0.2);
      transform: translateY(-1px);
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    min-height: 110px;

    h4 {
      font-size: 0.8rem;
      max-width: 220px;
    }

    a {
      font-size: 0.8rem;
      padding: 0.4rem 0.6rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 100px;

    h4 {
      font-size: 0.75rem;
      max-width: 100%;
      white-space: normal;
      line-height: 1.3;
    }

    a {
      font-size: 0.75rem;
      padding: 0.375rem 0.5rem;
    }
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const MetricGroup = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;

  h3 {
    color: #1f2937;
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    border-bottom: 2px solid #f3f4f6;
    padding-bottom: 0.5rem;
    font-family: monospace;
  }

  span {
    font-family: monospace;
    color: #4b5563;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 1.25rem;
    }

    span {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    h3 {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    span {
      font-size: 0.8rem;
    }
  }
`;

export const MetricBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

export const MetricFill = styled.div`
  height: 100%;
  background-color: oklch(0.685 0.169 237.323);
  border-radius: 4px;
  width: ${({ width }) => Math.min(width, 100)}%;
  transition: width 0.3s ease;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;

  /* MD: Medium screens (821px-1024px) */
  @media (max-width: 1024px) and (min-width: 821px) {
    gap: 1rem;
    margin: 1.75rem 0;
    padding-top: 1.75rem;
  }

  /* SM: Small screens (601px-820px) */
  @media (max-width: 820px) and (min-width: 601px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0;
    padding-top: 1.5rem;
  }

  /* XS: Extra small screens (360px-600px) */
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0.875rem;
    margin: 1.25rem 0;
    padding-top: 1.25rem;
  }
`;

export const PrimaryButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 32px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: monospace;
  min-height: 44px;
  min-width: 140px;

  &:hover {
    background-color: #1f2937;
    transform: translateY(-1px);
  }

  /* MD: Medium screens (821px-1024px) */
  @media (max-width: 1024px) and (min-width: 821px) {
    font-size: 15px;
    padding: 0.875rem 2.5rem;
    min-height: 46px;
    min-width: 150px;
  }

  /* SM: Small screens (601px-820px) */
  @media (max-width: 820px) and (min-width: 601px) {
    font-size: 13px;
    padding: 0.75rem 1.5rem;
    min-height: 42px;
    min-width: 120px;
  }

  /* XS: Extra small screens (360px-600px) */
  @media (max-width: 600px) {
    width: auto;
    max-width: 200px;
    font-size: 12px;
    padding: 0.625rem 1.25rem;
    min-height: 40px;
  }
`;

export const SecondaryButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: transparent;
  color: #6b7280;
  border: 2px solid #d1d5db;
  border-radius: 32px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: monospace;
  min-height: 44px;
  min-width: 140px;

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
    color: #1f2937;
  }

  /* MD: Medium screens (821px-1024px) */
  @media (max-width: 1024px) and (min-width: 821px) {
    font-size: 15px;
    padding: 0.875rem 2.5rem;
    min-height: 46px;
    min-width: 150px;
  }

  /* SM: Small screens (601px-820px) */
  @media (max-width: 820px) and (min-width: 601px) {
    font-size: 13px;
    padding: 0.75rem 1.5rem;
    min-height: 42px;
    min-width: 120px;
  }

  /* XS: Extra small screens (360px-600px) */
  @media (max-width: 600px) {
    width: auto;
    max-width: 200px;
    font-size: 12px;
    padding: 0.625rem 1.25rem;
    min-height: 40px;
  }
`;