import { Wrapper, DecorativeLineWrapper, Heading, Subtext, RichText, VerticalStripe, LandingPageWrapper, PoorText, AnalyzeButton, ButtonWrapper } from './LandingPage.styled';

function LandingPage() {
  return (
    <>
        <LandingPageWrapper>
            <div>
                <VerticalStripe className="left"> </VerticalStripe>
            </div>
            <div>
                <Wrapper>
                    <DecorativeLineWrapper>
                        <PoorText>Analyze audio. Detect truth instantly...</PoorText>
                    </DecorativeLineWrapper>
                    <DecorativeLineWrapper>
                        <Heading>Debunk viral audio claims — instantly.</Heading>
                    </DecorativeLineWrapper>
                    <DecorativeLineWrapper>
                        <PoorText>Break down misinformation in audio</PoorText>
                    </DecorativeLineWrapper>
                    <DecorativeLineWrapper>
                        <Subtext>
                            Use AI to verify <RichText>truth</RichText>, detect <RichText>sarcasm</RichText>, and visualize <RichText>misinformation</RichText>.
                        </Subtext>
                    </DecorativeLineWrapper>
                    <DecorativeLineWrapper>
                        <ButtonWrapper>
                            <AnalyzeButton to='/fact-check'>Get Started</AnalyzeButton>
                        </ButtonWrapper>
                    </DecorativeLineWrapper>
                </Wrapper>
            </div>
            <div>
                <VerticalStripe className="right"> </VerticalStripe>
            </div>
        </LandingPageWrapper>
    </>

  );
}

export default LandingPage;
