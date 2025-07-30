import {ResultsHeaderWrapper, ResultHeadliner, ResultsWrapper, ResultsOverview,OverviewCard, OverViewBookIcon, OverViewAIIcon, OverViewIcon3, OverViewTitle, OverViewDescription, OverViewDetails, IconWrapper} from './ResultsPage.styled';
import { VerticalStripe, DecorativeLineWrapper } from './LandingPage.styled';

function ResultsPage() {
  return (
    <>
      <ResultsWrapper>
        <div>
          <VerticalStripe className="left"> </VerticalStripe>
        </div>
        <div>
          <ResultsHeaderWrapper>
            <ResultHeadliner>Analysis Complete: Truth Revealed</ResultHeadliner>

            <DecorativeLineWrapper/>
            <ResultsOverview>
                <OverviewCard hoverBg='rgb(236 72 153 / 0.05)' hoverColor='#f74f87'>
                  <IconWrapper>
                    <OverViewBookIcon> </OverViewBookIcon>
                  </IconWrapper>
                  <OverViewDetails>
                    <OverViewTitle hoverColor='#f74f87'>CLAIM OVERVIEW</OverViewTitle>
                    <OverViewDescription>Original claim analyzed: Bananas contain tracking chips causing tiredness.</OverViewDescription>
                  </OverViewDetails>
                </OverviewCard>
                <OverviewCard hoverBg='rgba(65, 107, 211, 0.09)' hoverColor='rgba(107, 99, 255, 1)'>
                  <IconWrapper>
                    <OverViewAIIcon> </OverViewAIIcon>
                  </IconWrapper>
                  <OverViewDetails>
                    <OverViewTitle highlighted>VERDICT & CONFIDENCE</OverViewTitle>
                    <OverViewDescription>Result: False (Confidence: 95%). The claim is unsupported by scientific evidence.</OverViewDescription>
                  </OverViewDetails>
                </OverviewCard>
                <OverviewCard hoverBg='oklch(0.685 0.169 237.323 / 0.09)' hoverColor='oklch(0.685 0.169 237.323)'>
                    <IconWrapper>
                      <OverViewIcon3> </OverViewIcon3>
                    </IconWrapper>
                    <OverViewDetails>
                      <OverViewTitle>EVIDENCE & SOURCES</OverViewTitle>
                      <OverViewDescription>Cross-checked against FDA, WHO, Nature Journal, and other trusted sources.</OverViewDescription>
                    </OverViewDetails>
                </OverviewCard>
            </ResultsOverview>
            <DecorativeLineWrapper/>
          </ResultsHeaderWrapper>
        </div>
        <div>
          <VerticalStripe className="right"> </VerticalStripe>
        </div>
      </ResultsWrapper>
    </>
  );
}

export default ResultsPage;
