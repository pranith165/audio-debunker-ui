import { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
`;

const Modal = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 360px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
  font-family: sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.65rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  box-sizing: border-box;
  font-family: sans-serif;

  &:focus {
    outline: none;
    border-color: #000;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const Btn = styled.button`
  flex: 1;
  padding: 0.65rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  font-family: sans-serif;
  border: 1px solid #000;
  background: ${p => p.$primary ? '#000' : 'white'};
  color: ${p => p.$primary ? 'white' : '#000'};

  &:hover {
    opacity: 0.85;
  }
`;

const ErrorMsg = styled.p`
  color: #dc2626;
  font-size: 0.8rem;
  margin: 0.25rem 0 0;
  font-family: sans-serif;
`;

const StatusDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${p => p.$active ? '#16a34a' : '#9ca3af'};
  margin-right: 0.4rem;
`;

export function AdminLogin({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Enter both username and password.');
      return;
    }

    // Verify credentials against the backend before storing
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
      const verifyRes = await fetch(`${API_BASE_URL}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        },
        body: JSON.stringify({ text_claim: 'ping', enable_prosody: false })
      });

      if (verifyRes.status === 401) {
        setError('Invalid credentials.');
        return;
      }

      localStorage.setItem('admin_credentials', btoa(`${username}:${password}`));
      onClose(true);
    } catch {
      setError('Could not reach the server. Try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_credentials');
    onClose(false);
  };

  const isLoggedIn = !!localStorage.getItem('admin_credentials');

  return (
    <Overlay onClick={(e) => e.target === e.currentTarget && onClose(isLoggedIn)}>
      <Modal>
        <Title>
          <StatusDot $active={isLoggedIn} />
          {isLoggedIn ? 'Admin session active' : 'Admin login'}
        </Title>

        {isLoggedIn ? (
          <>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', fontFamily: 'sans-serif', marginBottom: '1.5rem' }}>
              You have unlimited access. Session ends when you close the browser.
            </p>
            <Row>
              <Btn onClick={() => onClose(true)}>Close</Btn>
              <Btn $primary onClick={handleLogout}>Log out</Btn>
            </Row>
          </>
        ) : (
          <>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => { setUsername(e.target.value); setError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              autoFocus
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
            />
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <Row>
              <Btn onClick={() => onClose(false)}>Cancel</Btn>
              <Btn $primary onClick={handleLogin}>Login</Btn>
            </Row>
          </>
        )}
      </Modal>
    </Overlay>
  );
}
