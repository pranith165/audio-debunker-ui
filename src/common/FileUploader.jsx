import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFile, markUploaded, setResults, setAnalyse } from '../redux/uploadSlice';
import { 
  FileUploaderWrapper, Upload, UploadWrapper, UploadIcon, 
  FileName, UploadDescription, Headliner, Subheadliner, 
  ApiButtonWrapper, CallButton 
} from './FileUploader.styled';
import Waves from '../common/Waves';

function FileUploader({ onStartAnalysis, onReportReady }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get file info from Redux
  const { file, fileName, isUploaded } = useSelector((state) => state.upload);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // ✅ Correct dispatch
      dispatch(setFile({ file: selectedFile, fileName: selectedFile.name }));
      // ✅ Mark upload as complete
      dispatch(markUploaded());
    }
  };

  const handleOnClick = async () => {
    if (!file) {
      alert('Please upload a file before analyzing.');
      return;
    }

    onStartAnalysis?.();

    console.log('Sending file to backend...');
    const formData = new FormData();
    formData.append('audio_file', file);

    dispatch(setAnalyse());
    try {
      const response = await fetch('http://0.0.0.0:8080/api/analyze-file', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Server error while analyzing.');

      const data = await response.json();
      dispatch(setResults());
      console.log('Analysis Result:', data);

      onReportReady?.();

      // Navigate to Results page
      navigate('/results');
    } catch (error) {
      console.error('Upload error:', error);
      alert('There was an error uploading the file.');
    }
  };

  return (
    <>
      <FileUploaderWrapper>
        <Headliner>Upload or Record Audio</Headliner>
        <Subheadliner>Submit a claim, podcast snippet, or voice memo for fact-checking analysis</Subheadliner>

        <UploadWrapper>
          <label htmlFor="input1"><UploadIcon /></label>
          <Upload id="input1" type="file" accept="audio/*" onChange={handleFileChange} />
          <UploadDescription>Click to upload or drag and drop</UploadDescription>

          {fileName && <FileName>🎧 {fileName}</FileName>}
        </UploadWrapper>

        <ApiButtonWrapper>
          <CallButton onClick={handleOnClick}>Analyze</CallButton>
        </ApiButtonWrapper>
      </FileUploaderWrapper>

      <Waves animation={isUploaded} />
    </>
  );
}

export default FileUploader;
