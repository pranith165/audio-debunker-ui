import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FactCheckPage from './pages/FactCheckPage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import Header from './common/Header';
import Footer from './common/Footer';
import AnalyticsTracker from './components/AnalyticsTracker';
import './styles/global.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { initAnalytics } from './utils/analytics';

// App component to handle analytics initialization
const App = () => {
  useEffect(() => {
    // Initialize Google Analytics when the app starts
    initAnalytics();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AnalyticsTracker />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fact-check" element={<FactCheckPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
