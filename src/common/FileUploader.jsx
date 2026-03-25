import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFile, markUploaded, setResults, setAnalyse, resetUpload } from '../redux/uploadSlice';
import { apiService } from '../services/apiService';
import { useErrorHandler } from '../hooks/useErrorHandler';
import {
  FileUploaderWrapper, Upload, UploadWrapper, UploadIcon,
  FileName, UploadDescription, Headliner, Subheadliner,
  ApiButtonWrapper, CallButton, ModeToggle, ModeButton, UrlInput,
  IOSBanner, IOSBannerText, IOSBannerActions, IOSInstallButton, IOSBannerDismiss
} from './FileUploader.styled';
import Waves from '../common/Waves';
import AudioRecorder from './AudioRecorder';
import ErrorNotification from './ErrorNotification';

// ─── Replace this URL once you've created and shared the Shortcut from your iPhone ───
const IOS_SHORTCUT_URL = 'https://www.icloud.com/shortcuts/c4244ff555e34b07bbec25297e0c1f13';

const isIOS = () =>
  /iPhone|iPad|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const BANNER_DISMISSED_KEY = 'ios_shortcut_banner_dismissed';


function FileUploader({ onStartAnalysis, onReportReady, initialUrl = '' }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mode, setMode] = useState(initialUrl ? 'url' : 'record'); // auto-switch to url mode when shared content arrives
  const [urlClaim, setUrlClaim] = useState(initialUrl);
  const { error, handleError, clearError, retryOperation } = useErrorHandler();
  const [showIOSBanner, setShowIOSBanner] = useState(
    () => isIOS() && !localStorage.getItem(BANNER_DISMISSED_KEY)
  );

  const dismissIOSBanner = () => {
    localStorage.setItem(BANNER_DISMISSED_KEY, '1');
    setShowIOSBanner(false);
  };

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

  const performUrlAnalysis = async () => {
    dispatch(setAnalyse());
    const data = await apiService.analyzeClaim({ text_claim: urlClaim.trim(), enable_prosody: true });
    dispatch(setResults(data));
    onReportReady?.();
    navigate('/results');
  };

  const handleOnClick = async () => {
    if (mode === 'url') {
      if (!urlClaim.trim()) {
        handleError(new Error('Please paste a URL or claim to analyze.'), { autoRedirect: false });
        return;
      }
      onStartAnalysis?.();
      try {
        await performUrlAnalysis();
      } catch (err) {
        console.error('URL analysis error:', err);
        dispatch(resetUpload());
        handleError(err);
      }
      return;
    }

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
        {/* iOS Shortcut install banner */}
        {showIOSBanner && (
          <IOSBanner>
            <IOSBannerText>
              <strong>On iPhone?</strong> Install our shortcut to fact-check any reel straight from the Instagram share button.
            </IOSBannerText>
            <IOSBannerActions>
              <IOSInstallButton href={IOS_SHORTCUT_URL} target="_blank" rel="noopener noreferrer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L12 15M12 2L8 6M12 2L16 6"/>
                  <path d="M20 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/>
                </svg>
                Get Shortcut
              </IOSInstallButton>
              <IOSBannerDismiss onClick={dismissIOSBanner} aria-label="Dismiss">✕</IOSBannerDismiss>
            </IOSBannerActions>
          </IOSBanner>
        )}

        {/* Mode Toggle */}
        <ModeToggle>
          <ModeButton active={mode === 'url'} onClick={() => setMode('url')} disabled={isAnalysed}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            URL / Text
          </ModeButton>
          <ModeButton active={mode === 'upload'} onClick={() => setMode('upload')} disabled={isAnalysed}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" x2="12" y1="3" y2="15"/>
            </svg>
            Upload
          </ModeButton>
          <ModeButton active={mode === 'record'} onClick={() => setMode('record')} disabled={isAnalysed}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" x2="12" y1="19" y2="22"/>
            </svg>
            Record
          </ModeButton>
        </ModeToggle>

        {/* URL / Text Mode */}
        {mode === 'url' && (
          <UploadWrapper>
            <UrlInput
              placeholder="Paste a link (Instagram, TikTok, YouTube…) or type a claim to fact-check"
              value={urlClaim}
              onChange={(e) => setUrlClaim(e.target.value)}
              disabled={isAnalysed}
              rows={4}
            />
          </UploadWrapper>
        )}

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
            disabled={isAnalysed || (mode !== 'url' && !file) || (mode === 'url' && !urlClaim.trim())}
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
