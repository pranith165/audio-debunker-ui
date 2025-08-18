import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFile, markUploaded, setResults, setAnalyse, resetUpload } from '../redux/uploadSlice';
import { apiService } from '../services/apiService';
import { useErrorHandler } from '../hooks/useErrorHandler';
import { 
  FileUploaderWrapper, Upload, UploadWrapper, UploadIcon, 
  FileName, UploadDescription, Headliner, Subheadliner, 
  ApiButtonWrapper, CallButton, ModeToggle, ModeButton 
} from './FileUploader.styled';
import Waves from '../common/Waves';
import AudioRecorder from './AudioRecorder';
import ErrorNotification from './ErrorNotification';

function FileUploader({ onStartAnalysis, onReportReady }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mode, setMode] = useState('record'); // 'upload' or 'record' - default to record
  const { error, handleError, clearError, retryOperation } = useErrorHandler();

  // Get file info from Redux
  const { file, fileName, isUploaded, isAnalysed } = useSelector((state) => state.upload);

  const handleFileChange = (e) => {
    // Prevent file change during analysis
    if (isAnalysed) return;
    
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // ✅ Correct dispatch
      dispatch(setFile({ file: selectedFile, fileName: selectedFile.name }));
      // ✅ Mark upload as complete
      dispatch(markUploaded());
    }
  };

  const performAnalysis = async () => {
    console.log('Sending file to backend with authentication...');
    const formData = new FormData();
    formData.append('audio_file', file);

    dispatch(setAnalyse());
    
    const data = await apiService.analyzeFile(formData);
    dispatch(setResults(data));
    console.log('Analysis Result:', data);

    onReportReady?.();

    // Navigate to Results page
    navigate('/results');
  };

  const handleOnClick = async () => {
    if (!file) {
      handleError(new Error('Please upload a file before analyzing.'), { autoRedirect: false });
      return;
    }

    onStartAnalysis?.();

    try {
      await performAnalysis();
    } catch (error) {
      console.error('Upload error:', error);
      // Reset the upload state on error
      dispatch(resetUpload());
      handleError(error);
    }
  };

  const handleRetry = () => {
    if (file) {
      retryOperation(performAnalysis);
    }
  };

  return (
    <>
      <FileUploaderWrapper>
        <Headliner>Upload or Record Audio</Headliner>
        <Subheadliner>Submit a claim, podcast snippet, or voice memo for fact-checking analysis</Subheadliner>

        {/* Mode Toggle */}
        <ModeToggle>
          <ModeButton 
            active={mode === 'upload'} 
            onClick={() => setMode('upload')}
            disabled={isAnalysed}
          >
            📁 Upload File
          </ModeButton>
          <ModeButton 
            active={mode === 'record'} 
            onClick={() => setMode('record')}
            disabled={isAnalysed}
          >
            🎤 Record Audio
          </ModeButton>
        </ModeToggle>

        {/* Upload Mode */}
        {mode === 'upload' && (
          <UploadWrapper>
            <label htmlFor="input1" style={{ cursor: isAnalysed ? 'not-allowed' : 'pointer' }}>
              <UploadIcon disabled={isAnalysed} />
            </label>
            <Upload 
              id="input1" 
              type="file" 
              accept="audio/*" 
              onChange={handleFileChange}
              disabled={isAnalysed}
            />
            <UploadDescription>
              {isAnalysed ? 'Analyzing audio file...' : 'Click to upload or drag and drop'}
            </UploadDescription>

            {fileName && <FileName>🎧 {fileName}</FileName>}
          </UploadWrapper>
        )}

        {/* Record Mode */}
        {mode === 'record' && (
          <UploadWrapper>
            <AudioRecorder disabled={isAnalysed} />
            {fileName && <FileName>🎧 {fileName}</FileName>}
          </UploadWrapper>
        )}

        <ApiButtonWrapper>
          <CallButton 
            onClick={handleOnClick} 
            disabled={isAnalysed || !file}
            analyzing={isAnalysed}
          >
            {isAnalysed ? 'Analyzing...' : 'Analyze'}
          </CallButton>
        </ApiButtonWrapper>
      </FileUploaderWrapper>

      <Waves animation={isUploaded} />
      
      {error && (
        <ErrorNotification
          error={error}
          onRetry={handleRetry}
          onClose={clearError}
          showRetry={!!file}
        />
      )}
    </>
  );
}

export default FileUploader;
