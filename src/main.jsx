import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FactCheckPage from './pages/FactCheckPage';
import ResultsPage from './pages/ResultsPage';
import Header from './common/Header';
import './styles/global.css';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fact-check" element={<FactCheckPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
