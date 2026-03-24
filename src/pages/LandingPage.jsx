import { Wrapper, DecorativeLineWrapper, Heading, Subtext, RichText, VerticalStripe, LandingPageWrapper, PoorText, AnalyzeButton, ButtonWrapper, TrustBar, TrustItem } from './LandingPage.styled';
import TrendingClaimsGrid from '../components/TrendingClaimsGrid';
import VisionSection from '../components/VisionSection';
import FeatureDemoSection from '../components/FeatureDemoSection';
import StatsSection from '../components/StatsSection';

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
                            <AnalyzeButton to='/fact-check'>Let's Bust the Myths</AnalyzeButton>
                        </ButtonWrapper>
                    </DecorativeLineWrapper>
                    <TrustBar>
                        <TrustItem>5,000+ claims verified</TrustItem>
                        <TrustItem>Free to use</TrustItem>
                        <TrustItem>No signup required</TrustItem>
                    </TrustBar>
                </Wrapper>
            </div>
            <div>
                <VerticalStripe className="right"> </VerticalStripe>
            </div>
        </LandingPageWrapper>
        <StatsSection />
        <FeatureDemoSection />
        <TrendingClaimsGrid />
        <VisionSection />
    </>
  );
}

export default LandingPage;
