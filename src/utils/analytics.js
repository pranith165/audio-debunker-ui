// Google Analytics utility functions
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-W8E7715ETQ';

// Check if gtag is available (for development vs production)
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Log analytics events in development mode
const logEvent = (eventName, parameters) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}:`, parameters);
  }
};

// Send page view event
export const pageview = (url, title) => {
  if (isGtagAvailable()) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_location: url,
      page_title: title,
    });
    
    window.gtag('event', 'page_view', {
      page_location: url,
      page_title: title,
    });
    
    logEvent('Page View', { url, title });
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (isGtagAvailable()) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
    
    logEvent(eventName, parameters);
  }
};

// Specific tracking functions for your app
export const analytics = {
  // Page navigation tracking
  trackPageView: (path, title) => {
    const url = `${window.location.origin}${path}`;
    pageview(url, title);
  },

  // Generic event tracking
  trackEvent: (eventName, parameters = {}) => {
    trackEvent(eventName, parameters);
  },

  // Fact-checking related events
  trackFileUpload: (fileType, fileSize) => {
    trackEvent('file_upload', {
      category: 'fact_check',
      label: fileType,
      value: Math.round(fileSize / 1024), // Size in KB
      file_type: fileType,
      file_size_kb: Math.round(fileSize / 1024)
    });
  },

  trackClaimSubmission: (claimType, claimLength) => {
    trackEvent('claim_submission', {
      category: 'fact_check',
      label: claimType,
      value: claimLength,
      claim_type: claimType,
      claim_length: claimLength
    });
  },

  trackAnalysisComplete: (analysisType, processingTime) => {
    trackEvent('analysis_complete', {
      category: 'fact_check',
      label: analysisType,
      value: Math.round(processingTime / 1000), // Time in seconds
      analysis_type: analysisType,
      processing_time_seconds: Math.round(processingTime / 1000)
    });
  },

  trackResultsView: (verificationStatus, confidenceScore) => {
    trackEvent('results_view', {
      category: 'engagement',
      label: verificationStatus,
      value: Math.round(confidenceScore || 0),
      verification_status: verificationStatus,
      confidence_score: confidenceScore
    });
  },

  // User engagement events
  trackButtonClick: (buttonName, location) => {
    trackEvent('button_click', {
      category: 'engagement',
      label: buttonName,
      button_name: buttonName,
      location: location
    });
  },

  trackExternalLink: (linkUrl, linkText) => {
    trackEvent('external_link_click', {
      category: 'engagement',
      label: linkUrl,
      link_url: linkUrl,
      link_text: linkText
    });
  },

  trackSearch: (searchQuery, resultsCount) => {
    trackEvent('search', {
      category: 'engagement',
      label: searchQuery,
      value: resultsCount || 0,
      search_query: searchQuery,
      results_count: resultsCount
    });
  },

  // Error tracking
  trackError: (errorType, errorMessage, location) => {
    trackEvent('error', {
      category: 'error',
      label: errorType,
      error_type: errorType,
      error_message: errorMessage,
      location: location
    });
  },

  // Performance tracking
  trackTiming: (name, value, category = 'performance') => {
    if (isGtagAvailable()) {
      window.gtag('event', 'timing_complete', {
        name: name,
        value: Math.round(value),
        event_category: category
      });
      
      logEvent('Timing', { name, value, category });
    }
  }
};

// Initialize analytics (call this once when the app starts)
export const initAnalytics = () => {
  if (isGtagAvailable()) {
    // Set user properties
    window.gtag('config', GA_MEASUREMENT_ID, {
      custom_map: {
        dimension1: 'user_type'
      }
    });
    
    // Track initial page load
    analytics.trackPageView(window.location.pathname, document.title);
    
    console.log('[Analytics] Google Analytics initialized');
  } else if (import.meta.env.DEV) {
    console.log('[Analytics] Running in development mode - events will be logged only');
  }
};

export default analytics;