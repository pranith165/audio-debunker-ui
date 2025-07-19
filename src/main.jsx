import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FactCheckPage from './pages/FactCheckPage';
import ResultsPage from './pages/ResultsPage';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/fact-check" element={<FactCheckPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  </BrowserRouter>
);
