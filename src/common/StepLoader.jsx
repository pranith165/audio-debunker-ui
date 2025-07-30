import { StepContainer, Title, Subtitle, Step, CheckIcon } from './StepLoader.styled'

function StepLoader({ steps }) {
  return (
    <StepContainer>
      {steps.map((step, idx) => (
        <Step key={idx} $done={step.done}>
          <Title>
            {step.title} {step.done && <CheckIcon>✔️</CheckIcon>}
          </Title>
          <Subtitle>{step.subtitle}</Subtitle>
        </Step>
      ))}
    </StepContainer>
  );
}

export default StepLoader;