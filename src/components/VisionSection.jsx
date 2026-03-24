import { useEffect, useRef, useState } from 'react';
import {
  VisionOuter,
  VisionWrapper,
  VisionHeader,
  VisionEyebrow,
  VisionTitle,
  VisionSubtitle,
  StickyLayout,
  StepsColumn,
  StepItem,
  StepNum,
  StepHeading,
  StepDescription,
  MobileImg,
  VisualColumn,
  BrowserFrame,
  BrowserBar,
  BrowserDot,
  BrowserUrl,
  ImageSlide,
  StepImg,
  ProgressTrack,
  ProgressDot,
  ClosingCTAWrapper,
  ClosingCTAText,
  ClosingCTAButton,
  ComingSoonBadge,
} from './VisionSection.styled';

import step1 from '../assets/images/vision-step1.jpg';
import step2 from '../assets/images/vision-step2.jpg';
import step3 from '../assets/images/vision-step3.jpg';

const steps = [
  {
    number: '01',
    heading: "You see a reel. You wonder if it's real.",
    description:
      "Every day, millions of viral clips make bold claims — about health, politics, science. You watch, you share, but you never really know what's true.",
    image: step1,
    alt: 'Person watching a viral reel on their phone',
  },
  {
    number: '02',
    heading: "You'll hit share. You'll pick debunker.",
    description:
      "No copy-pasting. No switching apps. Once debunker launches on mobile, you'll just hit the share button on any reel and select debunker — right from your phone's share sheet.",
    image: step2,
    alt: 'iOS share sheet with debunker as an option',
    comingSoon: true,
  },
  {
    number: '03',
    heading: 'An instant verdict. Evidence. Sources.',
    description:
      'Debunker will analyze the claim, cross-reference it against credible sources, and deliver a verdict in seconds — so you\'ll always know what to believe.',
    image: step3,
    alt: 'Debunker showing a fact-check verdict with evidence',
    comingSoon: true,
  },
];

function VisionSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveStep(parseInt(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <VisionOuter>
      <VisionWrapper>
        <VisionHeader>
          <VisionEyebrow>What we're building</VisionEyebrow>
          <VisionTitle>Truth at the<br />speed of scroll.</VisionTitle>
          <VisionSubtitle>
            Debunker isn't on your share sheet yet — but here's exactly what we're building toward.
          </VisionSubtitle>
        </VisionHeader>

        <StickyLayout>
          {/* Left: scrollable steps */}
          <StepsColumn>
            <ProgressTrack>
              {steps.map((_, i) => (
                <ProgressDot key={i} $active={activeStep === i} />
              ))}
            </ProgressTrack>

            {steps.map((step, index) => (
              <StepItem
                key={step.number}
                $active={activeStep === index}
                data-index={index}
                ref={el => stepRefs.current[index] = el}
              >
                <StepNum>
                  {step.number}
                  {step.comingSoon && <ComingSoonBadge>Coming soon</ComingSoonBadge>}
                </StepNum>
                <StepHeading>{step.heading}</StepHeading>
                <StepDescription>{step.description}</StepDescription>

                {/* Image shown inline on mobile only */}
                <MobileImg src={step.image} alt={step.alt} loading="lazy" />
              </StepItem>
            ))}
          </StepsColumn>

          {/* Right: sticky browser-frame mockup */}
          <VisualColumn>
            <BrowserFrame>
              <BrowserBar>
                <BrowserDot $c="#ef4444" />
                <BrowserDot $c="#f59e0b" />
                <BrowserDot $c="#22c55e" />
                <BrowserUrl>de-bunker.com</BrowserUrl>
              </BrowserBar>

              {steps.map((step, index) => (
                <ImageSlide key={step.number} $visible={activeStep === index}>
                  <StepImg src={step.image} alt={step.alt} loading="lazy" />
                </ImageSlide>
              ))}
            </BrowserFrame>
          </VisualColumn>
        </StickyLayout>

        <ClosingCTAWrapper>
          <ClosingCTAText>The web version is live — try it now.</ClosingCTAText>
          <ClosingCTAButton to="/fact-check">Try debunker →</ClosingCTAButton>
        </ClosingCTAWrapper>
      </VisionWrapper>
    </VisionOuter>
  );
}

export default VisionSection;
