import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: var(--bg-secondary);
  color: var(--text-muted);
  margin-top: auto;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FooterCopyright = styled.p`
  font-size: 0.875rem;
  color: var(--text-faint);
  margin: 0;
`;