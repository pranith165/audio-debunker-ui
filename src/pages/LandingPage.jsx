import { Helmet } from 'react-helmet-async';
import { Wrapper, DecorativeLineWrapper, Heading, Subtext, RichText, VerticalStripe, LandingPageWrapper, PoorText, AnalyzeButton, ButtonWrapper, TrustBar, TrustItem } from './LandingPage.styled';
import TrendingClaimsGrid from '../components/TrendingClaimsGrid';
import VisionSection from '../components/VisionSection';
import FeatureDemoSection from '../components/FeatureDemoSection';
import StatsSection from '../components/StatsSection';

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>De-Bunker — AI Fact Checking for Audio & Viral Claims</title>
        <meta name="description" content="Upload audio or paste a claim — our AI fact-checks it against credible sources in seconds. Free, no signup required." />
        <link rel="canonical" href="https://www.de-bunker.com/" />
        <meta property="og:title" content="De-Bunker — AI Fact Checking for Audio & Viral Claims" />
        <meta property="og:description" content="Upload audio or paste a claim — our AI fact-checks it against credible sources in seconds. Free, no signup required." />
        <meta property="og:url" content="https://www.de-bunker.com/" />
      </Helmet>
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
