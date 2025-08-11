import { HorizontalStepContainer, HorizontalStep, StepTitle, TetrisLoader, TetrisBlock } from './StepLoader.styled'

function StepLoader({ steps }) {
  const currentStepIndex = steps.findIndex(step => !step.done);
  
  return (
    <HorizontalStepContainer>
      {steps.map((step, idx) => {
        const isCompleted = step.done;
        const isActive = idx === currentStepIndex;
        const isPending = idx > currentStepIndex;
        
        return (
          <HorizontalStep key={idx} $completed={isCompleted} $active={isActive} $pending={isPending}>
            <StepTitle $completed={isCompleted} $active={isActive}>
              {step.title}
              {isCompleted && <span className="checkmark">✓</span>}
            </StepTitle>
            
            <TetrisLoader $active={isActive} $completed={isCompleted}>
              {/* Create horizontal tetris blocks */}
              {Array.from({ length: 8 }).map((_, blockIdx) => (
                <TetrisBlock 
                  key={blockIdx} 
                  $delay={blockIdx * 0.15}
                  $active={isActive}
                  $completed={isCompleted}
                  $index={blockIdx}
                />
              ))}
            </TetrisLoader>
          </HorizontalStep>
        );
      })}
    </HorizontalStepContainer>
  );
}

export default StepLoader;