import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useErrorHandler = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleError = useCallback((err, options = {}) => {
    console.error('Application Error:', err);
    
    // Create a standardized error object
    const errorObj = {
      message: err?.message || 'An unexpected error occurred',
      code: err?.status || err?.code || 'UNKNOWN_ERROR',
      originalError: err
    };

    // Set user-friendly error messages based on error type
    if (err?.status === 401 || err?.message?.includes('Authentication failed')) {
      errorObj.message = 'Authentication failed. Please try again.';
      errorObj.code = 'AUTH_ERROR';
    } else if (err?.status === 403) {
      errorObj.message = 'Access denied. You do not have permission for this action.';
      errorObj.code = 'ACCESS_DENIED';
    } else if (err?.status === 413) {
      errorObj.message = 'File too large. Please upload a smaller audio file.';
      errorObj.code = 'FILE_TOO_LARGE';
    } else if (err?.status === 415) {
      errorObj.message = 'Unsupported file format. Please upload a valid audio file.';
      errorObj.code = 'INVALID_FORMAT';
    } else if (err?.status >= 500) {
      errorObj.message = 'Server error. Our team has been notified. Please try again later.';
      errorObj.code = 'SERVER_ERROR';
    } else if (err?.name === 'NetworkError' || err?.message?.includes('fetch')) {
      errorObj.message = 'Network error. Please check your connection and try again.';
      errorObj.code = 'NETWORK_ERROR';
    }

    setError(errorObj);

    // Optional: Auto-redirect to home after delay to show trending data
    if (options.autoRedirect !== false) {
      setTimeout(() => {
        navigate('/', { 
          replace: true,
          state: { fromError: true, message: 'Check out trending claims while we fix the issue!' }
        });
        clearError();
      }, options.redirectDelay || 5000);
    }

    return errorObj;
  }, [navigate]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const retryOperation = useCallback((retryFn) => {
    if (retryFn && typeof retryFn === 'function') {
      clearError();
      try {
        return retryFn();
      } catch (err) {
        handleError(err);
      }
    }
  }, [clearError, handleError]);

  return {
    error,
    handleError,
    clearError,
    retryOperation,
    hasError: !!error
  };
};