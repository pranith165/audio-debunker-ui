import { useState } from 'react';
import {FileUploaderWrapper,Upload, UploadWrapper, UploadIcon, FileName, UploadDescription, Headliner, Subheadliner, ApiButtonWrapper, CallButton} from './FileUploader.styled'

function FileUploader() {

  const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
      const file = e.target.files?.[0];
      if (file) {
        setFileName(file.name);
      }
    };

    const handleOnClick = (e, fileName) => {
      if (!fileName) {
        alert("Please upload a file before analyzing.");
        return;
      }
      console.log("handleClick");
      //proceed with analysis
    };

  return (
    <FileUploaderWrapper>
        <Headliner>Upload or Record Audio</Headliner>
        <Subheadliner>Submit a claim, podcast snippet, or voice memo for fact-checking analysis</Subheadliner>
        <UploadWrapper>
          <label for='input1'><UploadIcon /></label>
          <Upload id='input1' type="file" accept="audip/*"  onChange={handleFileChange}/>
          <UploadDescription>Click to upload or drag and drop</UploadDescription>
           {fileName && <FileName>🎧 {fileName}</FileName>}
        </UploadWrapper>
        <ApiButtonWrapper>
          <CallButton onClick={(e)=>{handleOnClick(e, fileName)}}>Analyse</CallButton>
        </ApiButtonWrapper>
    </FileUploaderWrapper>
  );
}

export default FileUploader;
