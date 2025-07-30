import { useState, useEffect } from 'react';
import FileUploader from '../common/FileUploader';
import StepLoader from '../common/StepLoader';
import {FactCheckWrapper, FactCheckUploadWrapper} from './FactCheckPage.styled';
import { VerticalStripe } from './LandingPage.styled';
import {initialSteps} from '../helpers';
import Breadcrumb from '../common/Breadcrumb';

function FactCheckPage() {

  const [steps, setSteps] = useState(initialSteps);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate progress (you can control this based on backend response)
  useEffect(() => {
    // Only auto-complete steps up to the second last one
    if (isLoading && currentStepIndex < steps.length - 1) {
      const timeout = setTimeout(() => {
        const updatedSteps = [...steps];
        updatedSteps[currentStepIndex].done = true;
        setSteps(updatedSteps);
        setCurrentStepIndex(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, currentStepIndex, steps]);


  const startAnalysis = () => {
    setSteps(initialSteps);
    setCurrentStepIndex(0);
    setIsLoading(true);
  };

  const completeReportGeneration = () => {
    setSteps(prev => {
      const updated = [...prev];
      updated[updated.length - 1].done = true;
      return updated;
    });
  };

  
  return (
    <FactCheckWrapper>
      <div>
          <VerticalStripe className="left"> </VerticalStripe>
      </div>
      <div>
        <Breadcrumb></Breadcrumb>
        <FactCheckUploadWrapper>
          <FileUploader
            onStartAnalysis={startAnalysis}
            onReportReady={completeReportGeneration}
          />
        </FactCheckUploadWrapper>
        {isLoading && <StepLoader steps={steps} />}
      </div>
      <div>
          <VerticalStripe className="right"> </VerticalStripe>
      </div>
    </FactCheckWrapper>
  );
}

export default FactCheckPage;
