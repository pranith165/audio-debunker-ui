import styled from 'styled-components';
import { PiUploadSimpleBold } from 'react-icons/pi';

export const Headliner = styled.h2`
  display: none;
`;

export const Subheadliner = styled.p`
  display: none;
`;

export const FileUploaderWrapper = styled.div`
  text-align: center;
  width: 100%;
  box-sizing: border-box;
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
  margin: 0 0 0.5rem;
  text-align: center;
`;
export const ApiButtonWrapper = styled.div`
  margin-top: 1rem;
`;

export const CallButton = styled.button`
  width: 100%;
  font-size: 14px;
  font-family: monospace;
  font-weight: 600;
  color: ${({ disabled }) => disabled ? 'var(--text-faint)' : 'var(--bg)'};
  background-color: ${({ disabled }) => disabled ? 'var(--border)' : 'var(--text)'};
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  min-height: 48px;
  position: relative;

  &:hover {
    background-color: ${({ disabled }) => disabled ? 'var(--border)' : 'var(--text-secondary)'};
    box-shadow: ${({ disabled }) => disabled ? 'none' : '0 4px 14px var(--shadow-md)'};
  }

  ${({ analyzing }) => analyzing && `
    &::after {
      content: '';
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border: 2px solid transparent;
      border-top: 2px solid #999;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      0%   { transform: translateY(-50%) rotate(0deg); }
      100% { transform: translateY(-50%) rotate(360deg); }
    }
  `}
`;

export const UrlInput = styled.textarea`
  width: 100%;
  min-height: 110px;
  padding: 12px 14px;
  font-size: 14px;
  font-family: sans-serif;
  border: 1px solid var(--border);
  border-radius: 10px;
  resize: vertical;
  outline: none;
  box-sizing: border-box;
  background: ${({ disabled }) => disabled ? 'var(--bg-secondary)' : 'var(--bg-surface)'};
  color: ${({ disabled }) => disabled ? 'var(--text-faint)' : 'var(--text)'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'text'};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  line-height: 1.6;

  &:focus {
    border-color: var(--text);
    box-shadow: 0 0 0 3px var(--shadow-sm);
  }

  &::placeholder {
    color: var(--text-faint);
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const IOSBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 14px;
  margin-bottom: 1rem;
  font-size: 13px;
  font-family: sans-serif;
  color: var(--text-secondary);
  text-align: left;
`;

export const IOSBannerText = styled.span`
  flex: 1;
  line-height: 1.4;

  strong {
    color: var(--text);
    font-weight: 600;
  }
`;

export const IOSBannerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const IOSInstallButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: var(--text);
  color: var(--bg);
  font-size: 12px;
  font-weight: 600;
  font-family: sans-serif;
  text-decoration: none;
  padding: 7px 12px;
  border-radius: 7px;
  white-space: nowrap;
  transition: background 0.2s ease;

  &:hover {
    background: var(--text-secondary);
    color: var(--bg);
  }
`;

export const IOSBannerDismiss = styled.button`
  background: none;
  border: none;
  padding: 2px 4px;
  cursor: pointer;
  color: var(--text-faint);
  font-size: 16px;
  line-height: 1;
  border-radius: 4px;
  min-height: unset;

  &:hover {
    color: var(--text-muted);
    background: var(--border);
  }
`;

export const ModeToggle = styled.div`
  display: flex;
  background-color: var(--bg-secondary);
  border-radius: 10px;
  padding: 4px;
  gap: 3px;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const ModeButton = styled.button`
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  font-family: sans-serif;
  font-variant: normal;
  text-transform: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  background-color: ${({ active }) => active ? 'var(--bg-surface)' : 'transparent'};
  color: ${({ active, disabled }) =>
    disabled ? 'var(--text-faint)' :
    active ? 'var(--text)' : 'var(--text-muted)'
  };
  box-shadow: ${({ active }) => active ? '0 1px 4px var(--shadow-md)' : 'none'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  &:hover {
    background-color: ${({ disabled, active }) =>
      disabled ? 'transparent' :
      active ? 'var(--bg-surface)' : 'var(--bg-tertiary)'
    };
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 10px 12px;
    gap: 0.3rem;
  }
`;