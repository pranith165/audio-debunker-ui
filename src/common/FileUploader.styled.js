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
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        margin: 15px 0;
        padding: 0 0.5rem;
    }

    @media (max-width: 480px) {
        margin: 10px 0;
        padding: 0 0.25rem;
    }
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

  @media (max-width: 768px) {
    font-size: 60px;
    padding: 12px;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    font-size: 48px;
    padding: 10px;
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
    min-height: 44px;

    &:hover {
        background-color: ${({ disabled }) => disabled ? '#ccc' : '#333'};
        transform: ${({ disabled }) => disabled ? 'none' : 'translateY(-1px)'};
    }

    @media (max-width: 768px) {
        font-size: 16px;
        padding: 14px 28px;
        min-height: 48px;
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 280px;
        font-size: 16px;
        padding: 16px 32px;
        margin: 0 auto;
        display: block;
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

export const ModeToggle = styled.div`
    display: flex;
    background-color: #f3f4f6;
    border-radius: 12px;
    padding: 4px;
    margin: 20px 0;
    gap: 4px;
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 480px) {
        max-width: 100%;
        margin: 15px 0;
    }
`;

export const ModeButton = styled.button`
    flex: 1;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.3s ease;
    background-color: ${({ active }) => active ? 'white' : 'transparent'};
    color: ${({ active, disabled }) => 
        disabled ? '#ccc' : 
        active ? '#000' : '#6b7280'
    };
    box-shadow: ${({ active }) => active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'};
    opacity: ${({ disabled }) => disabled ? 0.5 : 1};
    min-height: 44px;

    &:hover {
        background-color: ${({ disabled, active }) => 
            disabled ? 'transparent' :
            active ? 'white' : 'rgba(255,255,255,0.5)'
        };
    }

    @media (max-width: 768px) {
        font-size: 15px;
        padding: 14px 18px;
        min-height: 48px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        padding: 12px 16px;
        min-height: 44px;
    }
`;