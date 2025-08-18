import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFile, markUploaded } from '../redux/uploadSlice';
import { useErrorHandler } from '../hooks/useErrorHandler';
import {
  RecorderWrapper,
  RecordButton,
  RecordingIndicator,
  TimerDisplay,
  PreviewControls,
  PlayButton,
  RerecordButton,
  RecordingStatus,
  WaveformContainer
} from './AudioRecorder.styled';

function AudioRecorder({ disabled = false }) {
  const dispatch = useDispatch();
  const { handleError } = useErrorHandler();
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [localError, setLocalError] = useState(null);
  
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  // Check browser support
  useEffect(() => {
    const checkSupport = () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setLocalError('Media recording not supported in this browser');
        return false;
      }
      if (!window.MediaRecorder) {
        setLocalError('MediaRecorder not supported in this browser');
        return false;
      }
      return true;
    };

    setIsSupported(checkSupport());
  }, []);

  useEffect(() => {
    // Clean up timer on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setPermissionGranted(true);
      setLocalError(null);
      return stream;
    } catch (error) {
      console.error('Microphone permission denied:', error);
      const errorMsg = 'Microphone access denied. Please allow microphone access and try again.';
      setLocalError(errorMsg);
      handleError(new Error(errorMsg), { autoRedirect: false });
      return null;
    }
  };

  const startRecording = async () => {
    if (disabled || !isSupported) return;

    try {
      const stream = await requestMicrophonePermission();
      if (!stream) return;

      // Reset previous recording
      setRecordedBlob(null);
      audioChunksRef.current = [];
      setRecordingTime(0);

      // Set up MediaRecorder with fallback mime types
      let mimeType = 'audio/webm;codecs=opus';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'audio/webm';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          mimeType = 'audio/mp4';
          if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = ''; // Let browser choose
          }
        }
      }

      const mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : {});
      mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

      mediaRecorder.onstop = () => {
        const finalMimeType = mimeType || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type: finalMimeType });
        setRecordedBlob(blob);
        
        // Convert blob to file and dispatch to Redux
        const extension = finalMimeType.includes('mp4') ? '.mp4' : '.webm';
        const file = new File([blob], `recording-${Date.now()}${extension}`, { type: finalMimeType });
        dispatch(setFile({ file, fileName: file.name }));
        dispatch(markUploaded());
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      // Start recording
      mediaRecorder.start();
      setIsRecording(true);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (error) {
      console.error('Recording error:', error);
      const errorMsg = 'Failed to start recording. Please try again.';
      setLocalError(errorMsg);
      handleError(new Error(errorMsg), { autoRedirect: false });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const playRecording = () => {
    if (recordedBlob && !isPlaying) {
      const audio = new Audio(URL.createObjectURL(recordedBlob));
      audioRef.current = audio;
      
      audio.onended = () => {
        setIsPlaying(false);
      };
      
      audio.play();
      setIsPlaying(true);
    }
  };

  const stopPlaying = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const rerecord = () => {
    if (isPlaying) {
      stopPlaying();
    }
    setRecordedBlob(null);
    setRecordingTime(0);
    dispatch(setFile({ file: null, fileName: '' }));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Early return for unsupported browsers
  if (!isSupported || localError) {
    return (
      <RecorderWrapper>
        <div style={{ padding: '2rem', textAlign: 'center', color: '#ef4444' }}>
          ⚠️ {localError || 'Recording not supported'}<br/>
          <small style={{ color: '#6b7280' }}>Please use file upload instead.</small>
        </div>
      </RecorderWrapper>
    );
  }

  return (
    <RecorderWrapper>
      {!recordedBlob ? (
        <>
          <RecordButton 
            onClick={isRecording ? stopRecording : startRecording}
            $isRecording={isRecording}
            disabled={disabled}
          >
            {isRecording ? '⏹️' : '🎤'}
          </RecordButton>
          
          {isRecording && (
            <>
              <RecordingIndicator>
                <WaveformContainer>
                  <div className="wave-bar"></div>
                  <div className="wave-bar"></div>
                  <div className="wave-bar"></div>
                  <div className="wave-bar"></div>
                  <div className="wave-bar"></div>
                </WaveformContainer>
              </RecordingIndicator>
              <TimerDisplay>{formatTime(recordingTime)}</TimerDisplay>
            </>
          )}
          
          <RecordingStatus>
            {isRecording 
              ? 'Recording... Click stop when finished' 
              : 'Click the microphone to start recording'
            }
          </RecordingStatus>
        </>
      ) : (
        <PreviewControls>
          <PlayButton 
            onClick={isPlaying ? stopPlaying : playRecording}
            disabled={disabled}
          >
            {isPlaying ? '⏸️' : '▶️'} {isPlaying ? 'Stop' : 'Play'} Recording
          </PlayButton>
          
          <RerecordButton onClick={rerecord} disabled={disabled}>
            🔄 Record Again
          </RerecordButton>
          
          <RecordingStatus>
            Recording ready ({formatTime(recordingTime)}) - Click "Analyze" to proceed
          </RecordingStatus>
        </PreviewControls>
      )}
    </RecorderWrapper>
  );
}

export default AudioRecorder;