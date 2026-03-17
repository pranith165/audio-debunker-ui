import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ErrorWrapper,
  ErrorContainer,
  ErrorImage,
  ErrorTitle,
  ErrorSubtitle,
  ErrorButton,
  CountdownText,
  SmallNote
} from './ErrorNotification.styled';
import errorImg from '../assets/images/errorImg.png';

function ErrorNotification({ 
  error, 
  onClose, 
  autoRedirect = true, 
  redirectDelay = 5000
}) {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(Math.ceil(redirectDelay / 1000));

  useEffect(() => {
    if (autoRedirect) {
      // Update countdown every second
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Navigate after the full delay
      const redirectTimer = setTimeout(() => {
        navigate('/', { replace: true });
        onClose?.();
      }, redirectDelay);

      return () => {
        clearInterval(countdownInterval);
        clearTimeout(redirectTimer);
      };
    }
  }, [autoRedirect, redirectDelay, navigate, onClose]);

  const handleGoBack = () => {
    navigate('/', { replace: true });
    onClose?.();
  };

  if (!error) return null;

  return (
    <ErrorWrapper>
      <ErrorContainer>
        <ErrorImage src={errorImg} alt="Server Error" />
        {error?.code === 'RATE_LIMITED' ? (
          <>
            <ErrorTitle>Daily Limit Reached</ErrorTitle>
            <ErrorSubtitle>{error.message}</ErrorSubtitle>
            <SmallNote>Debunker is in beta — limits help us keep it free for everyone.</SmallNote>
          </>
        ) : (
          <>
            <ErrorTitle>Uh-oh!</ErrorTitle>
            <ErrorSubtitle>Our server is in therapy Mode</ErrorSubtitle>
          </>
        )}
        <ErrorButton onClick={handleGoBack}>
          {error?.code === 'RATE_LIMITED' ? 'Got it' : 'Go back'}
        </ErrorButton>
        {autoRedirect && countdown > 0 && error?.code !== 'RATE_LIMITED' && (
          <CountdownText>
            Redirecting to home in {countdown} second{countdown !== 1 ? 's' : ''}...
          </CountdownText>
        )}
      </ErrorContainer>
    </ErrorWrapper>
  );
}

export default ErrorNotification;