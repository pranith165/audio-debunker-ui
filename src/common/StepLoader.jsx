import {
  StepContainer,
  StepHeader,
  StepCount,
  StepOverallLabel,
  Timeline,
  StepRow,
  IconCol,
  StepDot,
  SpinnerRing,
  ConnectorLine,
  StepContent,
  StepTitle,
  StepSubtitle,
  StepStatus,
} from './StepLoader.styled';

// Past-tense labels for completed steps
const PAST_TENSE = {
  'Processing Upload': 'Upload Processed',
  'Audio Transcription': 'Audio Transcribed',
  'Claim Extraction': 'Claims Extracted',
  'Prosody Analysis': 'Prosody Analyzed',
  'Fact Verification': 'Facts Verified',
  'Report Generation': 'Report Generated',
};

function StepLoader({ steps }) {
  const completedCount = steps.filter(s => s.done).length;
  const currentStepIndex = steps.findIndex(step => !step.done);
  const total = steps.length;

  return (
    <StepContainer>
      <StepHeader>
        <StepOverallLabel>Analyzing your claim</StepOverallLabel>
        <StepCount>{completedCount} / {total}</StepCount>
      </StepHeader>

      <Timeline>
        {steps.map((step, idx) => {
          const isCompleted = step.done;
          const isActive = idx === currentStepIndex;
          const isPending = idx > currentStepIndex;
          const isLast = idx === total - 1;

          return (
            <StepRow key={idx}>
              <IconCol>
                <StepDot $completed={isCompleted} $active={isActive} $pending={isPending}>
                  {isActive && <SpinnerRing />}
                  {isCompleted && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </StepDot>
                {!isLast && <ConnectorLine $completed={isCompleted} />}
              </IconCol>

              <StepContent>
                <StepTitle $completed={isCompleted} $active={isActive} $pending={isPending}>
                  {isCompleted ? (PAST_TENSE[step.title] || step.title) : step.title}
                </StepTitle>
                {isActive && step.subtitle && (
                  <StepSubtitle>{step.subtitle}</StepSubtitle>
                )}
              </StepContent>

              <StepStatus $completed={isCompleted} $active={isActive} $pending={isPending}>
                {isCompleted ? 'Done' : isActive ? 'Running' : ''}
              </StepStatus>
            </StepRow>
          );
        })}
      </Timeline>
    </StepContainer>
  );
}

export default StepLoader;
