import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Discoveries from './pages/Discoveries';
import Technology from './pages/Technology';
import About from './pages/About';
import StarField from './components/StarField';
import './styles/globals.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <StarField />
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2 className="loading-text">正在连接中国天眼...</h2>
        </div>
      </div>
    );
  }

  return (
    <Router basename="/FAST">
      <div className="App">
        <CosmicBackground />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discoveries" element={<Discoveries />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Cosmic Background Component
const CosmicBackground = () => (
  <div className="cosmic-background">
    <StarField />
  </div>
);

// Loading Styles
const LoadingStyles = () => (
  <style jsx>{`
    .loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0B1426 0%, #1A0B2E 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }

    .loading-content {
      text-align: center;
      z-index: 10;
    }

    .loading-spinner {
      width: 80px;
      height: 80px;
      border: 4px solid rgba(0, 212, 255, 0.3);
      border-top: 4px solid #00D4FF;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 2rem;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .loading-text {
      font-size: 1.5rem;
      color: #F8FAFC;
      font-family: 'Noto Sans SC', sans-serif;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    .main-content {
      min-height: 100vh;
      padding-top: 80px;
    }
  `}</style>
);

// Add loading styles to App
const AppWithStyles = () => (
  <>
    <LoadingStyles />
    <App />
  </>
);

export default AppWithStyles;