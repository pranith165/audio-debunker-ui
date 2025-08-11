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
  color: ${({ disabled }) => disabled ? '#ccc' : '#000'};
  margin-right: 8px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  border: 1px dotted ${({ disabled }) => disabled ? '#ccc' : 'black'};
  border-radius: 28px;
  transition: all 0.3s ease;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};

  &:hover {
    border-color: ${({ disabled }) => disabled ? '#ccc' : 'oklch(0.685 0.169 237.323)'};
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
    color: ${({ disabled }) => disabled ? '#666' : 'white'};
    background-color: ${({ disabled }) => disabled ? '#ccc' : 'black'};
    border: none;
    padding: 12px 24px;
    border-radius: 20px;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.3s ease;
    opacity: ${({ disabled }) => disabled ? 0.7 : 1};
    position: relative;

    &:hover {
        background-color: ${({ disabled }) => disabled ? '#ccc' : '#333'};
        transform: ${({ disabled }) => disabled ? 'none' : 'translateY(-1px)'};
    }

    ${({ analyzing }) => analyzing && `
        &::after {
            content: '';
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 12px;
            border: 2px solid transparent;
            border-top: 2px solid #666;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: translateY(-50%) rotate(0deg); }
            100% { transform: translateY(-50%) rotate(360deg); }
        }
    `}
`;