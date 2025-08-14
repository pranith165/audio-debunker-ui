// Debug authentication helper
export const debugAuth = () => {
  console.log('=== AUTH DEBUG INFO ===');
  console.log('Environment Variables:');
  console.log('REACT_APP_API_USERNAME:', process.env.REACT_APP_API_USERNAME);
  console.log('REACT_APP_API_PASSWORD:', process.env.REACT_APP_API_PASSWORD ? 'SET' : 'NOT SET');
  
  const username = process.env.REACT_APP_API_USERNAME;
  const password = process.env.REACT_APP_API_PASSWORD;
  
  if (username && password) {
    const credentials = btoa(`${username}:${password}`);
    console.log('Generated Base64:', credentials);
    
    // Test decode
    try {
      const decoded = atob(credentials);
      console.log('Decoded back:', decoded);
    } catch (e) {
      console.log('Decode error:', e);
    }
  } else {
    console.log('Using fallback credentials');
    const fallback = btoa('admin:secure_password_change_in_production');
    console.log('Fallback Base64:', fallback);
  }
  
  console.log('=== END DEBUG ===');
};

// Test function to verify backend
export const testBackendAuth = async () => {
  const username = process.env.REACT_APP_API_USERNAME || 'admin';
  const password = process.env.REACT_APP_API_PASSWORD || 'secure_password_change_in_production';
  const credentials = btoa(`${username}:${password}`);
  
  try {
    const response = await fetch('https://debunker-production-4920.up.railway.app/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
      },
      body: JSON.stringify({ text_claim: 'Test authentication' })
    });
    
    console.log('Auth test response:', response.status, response.statusText);
    
    if (response.status === 401) {
      console.log('❌ Authentication failed - credentials are wrong');
    } else if (response.status === 200) {
      console.log('✅ Authentication successful');
    } else {
      console.log('ℹ️ Unexpected response:', response.status);
    }
    
    return response;
  } catch (error) {
    console.log('❌ Network error:', error);
    return null;
  }
};