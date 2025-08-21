import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { resetUpload } from '../redux/uploadSlice';
import FileUploader from '../common/FileUploader';
import StepLoader from '../common/StepLoader';
import {FactCheckWrapper, FactCheckUploadWrapper} from './FactCheckPage.styled';
import { VerticalStripe } from './LandingPage.styled';
import {initialSteps} from '../helpers';
import Breadcrumb from '../common/Breadcrumb';
import { analytics } from '../utils/analytics';

function FactCheckPage() {
  const dispatch = useDispatch();
  const stepLoaderRef = useRef(null);

  const [steps, setSteps] = useState(initialSteps);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisKey, setAnalysisKey] = useState(0);

  // Reset upload state when component mounts (when user navigates to fact-check page)
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    dispatch(resetUpload());
    // Also reset the steps state
    const freshSteps = initialSteps.map(step => ({ ...step, done: false }));
    setSteps(freshSteps);
    setCurrentStepIndex(0);
    setIsLoading(false);
  }, [dispatch]);

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
    // Track analysis start
    analytics.trackEvent('analysis_started', {
      category: 'fact_check',
      label: 'user_initiated'
    });

    // Create a fresh copy of initial steps to ensure state update
    const freshSteps = initialSteps.map(step => ({ ...step, done: false }));
    setSteps(freshSteps);
    setCurrentStepIndex(0);
    setIsLoading(true);
    setAnalysisKey(prev => prev + 1); // Force re-render of StepLoader
    
    // Auto scroll to the progress indicator
    setTimeout(() => {
      if (stepLoaderRef.current) {
        stepLoaderRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 100); // Small delay to ensure the StepLoader is rendered
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
        {isLoading && (
          <div ref={stepLoaderRef}>
            <StepLoader key={`analysis-${analysisKey}`} steps={steps} />
          </div>
        )}
      </div>
      <div>
          <VerticalStripe className="right"> </VerticalStripe>
      </div>
    </FactCheckWrapper>
  );
}

export default FactCheckPage;
