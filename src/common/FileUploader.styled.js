import styled from 'styled-components';
import { PiUploadSimpleBold } from 'react-icons/pi';

export const Headliner = styled.h2`
    display: block;
    text-align: center;
`;

export const Subheadliner = styled.p`
    text-align: center;
`;

export const FileUploaderWrapper = styled.div`
    text-align: center;
    margin: 20px 0;
`;

export const Upload = styled.input`
    border: 1px solid green;
    display: none;
`;

export const UploadIcon = styled(PiUploadSimpleBold)`
  font-size: 53px;
  padding: 7px;
  color: #000;
  margin-right: 8px;
  cursor: pointer;
  border: 1px dotted black;
  border-radius: 28px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: oklch(0.685 0.169 237.323);
  }
`;


export const FileName = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const UploadDescription = styled.p`
    font-size: 12px;
`;


export const UploadWrapper = styled.div`
    margin: 15px 0;
`;
export const ApiButtonWrapper = styled.div`

`;

export const CallButton = styled.button`
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    padding: 12px;
    border-radius: 20px;
    cursor: pointer;
`;