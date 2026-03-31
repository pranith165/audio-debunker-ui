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

import step1 from '../assets/images/phone-scrolling-problem.jpg';
import step2a from '../assets/images/share-step1-instagram.png';
import step2b from '../assets/images/share-step2-ios.png';
import step3 from '../assets/images/vision-verdict-result.png';

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
    heading: "Tap the share icon. Hit 'Share to\u2026'",
    description:
      "On any Instagram or TikTok reel, tap the share icon. You'll see your contacts and apps \u2014 scroll to the bottom and tap 'Share to\u2026' to open the full iOS share sheet.",
    image: step2a,
    alt: 'Instagram share sheet showing Share to option',
    imagePosition: 'center bottom',
  },
  {
    number: '03',
    heading: 'Select Debunker from the list.',
    description:
      "The iOS share sheet opens — Debunker appears right in the list. One tap and you're done. No copy-pasting, no switching apps.",
    image: step2b,
    alt: 'iOS share sheet with Debunker in the list',
    imagePosition: 'center bottom',
    shortcut: true,
  },
  {
    number: '04',
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
