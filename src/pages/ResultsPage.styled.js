import styled from 'styled-components';
import { SiBookstack } from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import { GrResources } from "react-icons/gr";


export const ResultsWrapper = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 3% auto 3%;
`;

export const ResultsHeaderWrapper = styled.div`


`;

export const ResultHeadliner = styled.h1`
  text-align: center;
  margin: 25px;
  font-family: monospace;
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
`;

export const OverviewCard = styled.div`
    padding: 2rem;
    border-right: 1px solid #979292;
    text-align: left;
    background-color: white;
    transition: background 0.3s ease;
    display: grid;
    grid-template-columns: 20% 80%;
    min-height: 200px;
    max-height: 200px;
    align-content: start;
    width: 100%;
    box-sizing: border-box;

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
    grid-template-columns: 1fr;
    text-align: center;
    padding: 1.5rem;
  }
`;

export const OverViewBookIcon = styled(SiBookstack)`
  width: 50px;
  height: 50px;
`;

export const OverViewAIIcon = styled(DiIllustrator)`
  width: 50px;
  height: 50px;
`;

export const OverViewIcon3 = styled(GrResources)`
  width: 50px;
  height: 50px;
`;

export const OverViewTitle = styled.h4`
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  color: oklch(0.446 0.03 256.802)
  color: ${({ highlighted }) => (highlighted ? "#007bff" : "#000")};
`;

export const OverViewDescription = styled.p`
  font-size: 16px;
  color: #a09b9b;
  margin-top: 0.5rem;
  font-family: monospace;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 5.6em; /* 4 lines * 1.4 line-height */
`;

export const OverViewDetails = styled.div`
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`;

// Detailed Analysis Components
export const DetailedAnalysisWrapper = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  margin: 2rem 0;
  overflow: hidden;
`;

export const TabNavigation = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  font-weight: 500;
  color: ${({ active }) => active ? 'oklch(0.685 0.169 237.323)' : '#6b7280'};
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 2px solid ${({ active }) => active ? 'oklch(0.685 0.169 237.323)' : 'transparent'};
  font-family: monospace;
  font-size: 14px;

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
`;

export const OverviewSection = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;

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
  }

  p {
    color: #4b5563;
    line-height: 1.6;
    font-family: monospace;
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
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
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

  &:hover {
    background-color: #1f2937;
    transform: translateY(-1px);
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

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
    color: #1f2937;
  }
`;