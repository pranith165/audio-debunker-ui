// API Service with Basic Authentication
import { debugAuth, testBackendAuth } from '../utils/debugAuth';

const API_BASE_URL = 'https://debunker-production-4920.up.railway.app';

// Debug on load
if (process.env.NODE_ENV === 'development') {
  debugAuth();
}

// Get credentials from environment variables
const getCredentials = () => {
  const username = process.env.REACT_APP_API_USERNAME;
  const password = process.env.REACT_APP_API_PASSWORD;
  
  console.log('Debug - Environment variables:', { 
    username: username || 'NOT SET', 
    passwordSet: !!password 
  });
  
  if (!username || !password) {
    console.warn('API credentials not found in environment variables. Using production credentials.');
    // Use actual credentials since env vars aren't working in Vercel
    return btoa('ysoma:Debunk@12445');
  }
  
  return btoa(`${username}:${password}`);
};

const API_CREDENTIALS = getCredentials();

// Helper function for authenticated requests
const authenticatedFetch = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Basic ${API_CREDENTIALS}`
    }
  });

  if (response.status === 401) {
    throw new Error('Authentication failed - invalid credentials');
  }

  if (response.status === 403) {
    throw new Error('Access denied - insufficient permissions');
  }

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response;
};

// Helper function for public requests (no auth needed)
const publicFetch = async (url, options = {}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response;
};

// API Service
export const apiService = {
  // PROTECTED ENDPOINTS (require authentication)
  
  // Analyze audio file (protected)
  async analyzeFile(formData) {
    const response = await authenticatedFetch(`${API_BASE_URL}/api/analyze-file`, {
      method: 'POST',
      body: formData // Don't set Content-Type for FormData
    });
    
    return response.json();
  },

  // Analyze text claim (protected)
  async analyzeClaim(claimData) {
    const response = await authenticatedFetch(`${API_BASE_URL}/api/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(claimData)
    });
    
    return response.json();
  },

  // Trigger manual aggregation (protected)
  async triggerAggregation() {
    const response = await authenticatedFetch(`${API_BASE_URL}/api/trigger-aggregation`, {
      method: 'POST'
    });
    
    return response.json();
  },

  // Enhance with Grok (protected)
  async enhanceWithGrok(claimId) {
    const response = await authenticatedFetch(`${API_BASE_URL}/api/claims/${claimId}/enhance-with-grok`, {
      method: 'POST'
    });
    
    return response.json();
  },

  // PUBLIC ENDPOINTS (no authentication required)

  // Get trending claims (public)
  async getTrendingClaims(params = {}) {
    const queryParams = new URLSearchParams({
      page: params.page || '1',
      limit: params.limit || '12',
      status: 'completed',
      sort: params.sort || 'hybrid',
      ...(params.category && { category: params.category })
    });

    const response = await publicFetch(`${API_BASE_URL}/api/trending-claims?${queryParams}`);
    return response.json();
  },

  // Get specific claim details (public)
  async getClaimDetails(claimId) {
    const response = await publicFetch(`${API_BASE_URL}/api/trending-claims/${claimId}`);
    return response.json();
  },

  // Share claim (public - but should this be protected?)
  async shareClaim(claimId) {
    const response = await publicFetch(`${API_BASE_URL}/api/claims/${claimId}/share`, {
      method: 'POST'
    });
    
    return response.json();
  },

  // Get categories (public)
  async getCategories() {
    const response = await publicFetch(`${API_BASE_URL}/api/claims/categories`);
    return response.json();
  },

  // Get analytics (public)
  async getAnalytics(days = 7) {
    const response = await publicFetch(`${API_BASE_URL}/api/claims/analytics?days=${days}`);
    return response.json();
  },

  // Get scheduler status (public)
  async getSchedulerStatus() {
    const response = await publicFetch(`${API_BASE_URL}/api/scheduler/status`);
    return response.json();
  },

  // Health check (public)
  async healthCheck() {
    const response = await publicFetch(`${API_BASE_URL}/health`);
    return response.json();
  }
};

// Error handler for components
export const handleApiError = (error) => {
  console.error('API Error:', error);
  
  if (error.message.includes('Authentication failed')) {
    alert('Authentication failed. Please check your credentials.');
    return;
  }
  
  if (error.message.includes('Access denied')) {
    alert('Access denied. You do not have permission for this action.');
    return;
  }
  
  // Generic error
  alert(`Error: ${error.message}`);
};

export default apiService;