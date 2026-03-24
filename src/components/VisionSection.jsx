import {
  VisionOuter,
  VisionWrapper,
  VisionHeader,
  VisionEyebrow,
  VisionTitle,
  VisionSubtitle,
  StepsWrapper,
  Step,
  StepText,
  StepImage,
  StepNumber,
  StepHeading,
  StepDescription,
  StepImg,
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
    heading: 'Hit share. Pick debunker.',
    description:
      "No copy-pasting. No switching apps. Just hit the share button on any reel and select debunker — right from your phone's share sheet.",
    image: step2,
    alt: 'iOS share sheet with debunker as an option',
    reverse: true,
  },
  {
    number: '03',
    heading: 'Instant verdict. Evidence. Sources.',
    description:
      'Debunker analyzes the claim, checks it against credible sources, and gives you a verdict in seconds — so you always know what to believe.',
    image: step3,
    alt: 'debunker showing a fact-check verdict with evidence',
  },
];

function VisionSection() {
  return (
    <VisionOuter>
      <VisionWrapper>
        <VisionHeader>
          <VisionEyebrow>The Vision</VisionEyebrow>
          <VisionTitle>Truth at the<br />speed of scroll.</VisionTitle>
          <VisionSubtitle>
            We're building debunker to live where you already share — so fact-checking is never more than one tap away.
          </VisionSubtitle>
        </VisionHeader>

        <StepsWrapper>
          {steps.map((step) => (
            <Step key={step.number}>
              <StepText $reverse={step.reverse}>
                <StepNumber>{step.number}</StepNumber>
                <StepHeading>{step.heading}</StepHeading>
                <StepDescription>{step.description}</StepDescription>
              </StepText>
              <StepImage $reverse={step.reverse}>
                <StepImg src={step.image} alt={step.alt} />
              </StepImage>
            </Step>
          ))}
        </StepsWrapper>
      </VisionWrapper>
    </VisionOuter>
  );
}

export default VisionSection;
