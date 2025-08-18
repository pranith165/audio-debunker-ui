import { useState } from 'react';
import { apiService } from '../services/apiService';
import { useErrorHandler } from '../hooks/useErrorHandler';
import ErrorNotification from '../common/ErrorNotification';
import styled from 'styled-components';

const AdminWrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #f9fafb;
`;

const AdminTitle = styled.h2`
  color: #111827;
  margin-bottom: 1.5rem;
`;

const ActionButton = styled.button`
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 0.5rem 1rem 0.5rem 0;
  font-family: monospace;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

const StatusBox = styled.div`
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
  font-family: monospace;
  font-size: 0.875rem;
`;

const ErrorBox = styled.div`
  background: #fef2f2;
  border: 1px solid #ef4444;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
  color: #dc2626;
  font-family: monospace;
  font-size: 0.875rem;
`;

function AdminPanel() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { error: errorHandler, handleError, clearError } = useErrorHandler();

  const triggerAggregation = async () => {
    setLoading(true);
    setError('');
    setStatus('');

    try {
      setStatus('Triggering manual news aggregation...');
      const result = await apiService.triggerAggregation();
      setStatus(`Success: ${result.message || 'Aggregation completed'}`);
    } catch (err) {
      setError(`Failed: ${err.message}`);
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const checkHealth = async () => {
    setLoading(true);
    setError('');
    setStatus('');

    try {
      setStatus('Checking API health...');
      const result = await apiService.healthCheck();
      setStatus(`API Status: ${JSON.stringify(result)}`);
    } catch (err) {
      setError(`Health check failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getSchedulerStatus = async () => {
    setLoading(true);
    setError('');
    setStatus('');

    try {
      setStatus('Getting scheduler status...');
      const result = await apiService.getSchedulerStatus();
      setStatus(`Scheduler: ${result.status}, Jobs: ${result.jobs?.length || 0}`);
    } catch (err) {
      setError(`Scheduler status failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminWrapper>
      <AdminTitle>🔧 Admin Panel</AdminTitle>
      
      <div>
        <ActionButton onClick={triggerAggregation} disabled={loading}>
          🔄 Trigger News Aggregation (Auth Required)
        </ActionButton>
        
        <ActionButton onClick={checkHealth} disabled={loading}>
          🏥 Health Check (Public)
        </ActionButton>
        
        <ActionButton onClick={getSchedulerStatus} disabled={loading}>
          📅 Scheduler Status (Public)
        </ActionButton>
      </div>

      {loading && <StatusBox>Processing...</StatusBox>}
      {status && <StatusBox>{status}</StatusBox>}
      {error && <ErrorBox>{error}</ErrorBox>}

      <div style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#6b7280' }}>
        <p><strong>Note:</strong> This panel demonstrates both authenticated and public API endpoints.</p>
        <p>• News aggregation requires authentication (protected endpoint)</p>
        <p>• Health check and scheduler status are public endpoints</p>
      </div>
      
      {errorHandler && (
        <ErrorNotification
          error={errorHandler}
          onClose={clearError}
          autoRedirect={false}
        />
      )}
    </AdminWrapper>
  );
}

export default AdminPanel;