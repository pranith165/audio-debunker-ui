import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../utils/analytics';

// Page titles for different routes
const getPageTitle = (pathname) => {
  switch (pathname) {
    case '/':
      return 'Audio Debunker - AI-Powered Fact Checking';
    case '/fact-check':
      return 'Fact Check - Audio Debunker';
    case '/results':
      return 'Results - Audio Debunker';
    case '/about':
      return 'About - Audio Debunker';
    default:
      return 'Audio Debunker - AI-Powered Fact Checking';
  }
};

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever the route changes
    const pageTitle = getPageTitle(location.pathname);
    analytics.trackPageView(location.pathname + location.search, pageTitle);
  }, [location]);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;