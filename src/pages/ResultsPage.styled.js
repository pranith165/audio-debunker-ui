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
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: white;
  width: 100%;
`;

export const OverviewCard = styled.div`
    padding: 2rem;
    border-right: 1px solid #979292;
    text-align: left;
    background-color: white;
    transition: background 0.3s ease;
    display: grid;
    grid-template-columns: 20% 80%;

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

`;

export const OverViewDetails = styled.div`
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
`;