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
  ShortcutLink,
} from './VisionSection.styled';

import step1 from '../assets/images/vision-step1.jpg';
import step2 from '../assets/images/vision-step2-share.png';
import step3 from '../assets/images/vision-step3.jpg';

const IOS_SHORTCUT_URL = 'https://www.icloud.com/shortcuts/c4244ff555e34b07bbec25297e0c1f13';

const isIOS = () =>
  /iPhone|iPad|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

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
    heading: 'Hit share. Pick debunker.',
    description:
      "No copy-pasting. No switching apps. Just hit the share button on any Instagram or TikTok reel and select debunker — right from your phone's share sheet.",
    image: step2,
    alt: 'iOS share sheet with debunker as an option',
    imagePosition: 'center 70%',
    shortcut: true,
  },
  {
    number: '03',
    heading: 'An instant verdict. Evidence. Sources.',
    description:
      "Debunker analyzes the claim, cross-references it against credible sources, and delivers a verdict in seconds — so you always know what to believe.",
    image: step3,
    alt: 'Debunker showing a fact-check verdict with evidence',
  },
];

function VisionSection() {
  const [activeStep, setActiveStep] = useState(0);
  const onIOS = isIOS();
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
          <VisionEyebrow>How it works</VisionEyebrow>
          <VisionTitle>Truth at the<br />speed of scroll.</VisionTitle>
          <VisionSubtitle>
            See a reel. Hit share. Get a verdict. Debunker works directly from Instagram and TikTok — no copy-pasting required.
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
                <StepNum>{step.number}</StepNum>
                <StepHeading>{step.heading}</StepHeading>
                <StepDescription>{step.description}</StepDescription>
                {step.shortcut && onIOS && (
                  <ShortcutLink href={IOS_SHORTCUT_URL} target="_blank" rel="noopener noreferrer">
                    ↑ Get the shortcut
                  </ShortcutLink>
                )}

                {/* Image shown inline on mobile only */}
                <MobileImg src={step.image} alt={step.alt} loading="lazy" $position={step.imagePosition} />
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
                  <StepImg src={step.image} alt={step.alt} loading="lazy" $position={step.imagePosition} />
                </ImageSlide>
              ))}
            </BrowserFrame>
          </VisualColumn>
        </StickyLayout>

        <ClosingCTAWrapper>
          <ClosingCTAText>Works on web too — paste any URL or claim and get a verdict instantly.</ClosingCTAText>
          <ClosingCTAButton to="/fact-check">Try debunker →</ClosingCTAButton>
        </ClosingCTAWrapper>
      </VisionWrapper>
    </VisionOuter>
  );
}

export default VisionSection;
