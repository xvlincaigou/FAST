import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: '首页', icon: '🏠' },
    { path: '/discoveries', label: '科学发现', icon: '🌟' },
    { path: '/technology', label: '技术创新', icon: '🔬' },
    { path: '/about', label: '关于项目', icon: '📖' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">🔭</div>
          <div className="logo-text">
            <span className="logo-main">中国天眼</span>
            <span className="logo-sub">FAST</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="切换菜单"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

// Styles
const HeaderStyles = () => (
  <style jsx>{`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(11, 20, 38, 0.8);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }

    .header.scrolled {
      background: rgba(11, 20, 38, 0.95);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #F8FAFC;
      transition: all 0.3s ease;
    }

    .logo:hover {
      transform: scale(1.05);
    }

    .logo-icon {
      font-size: 2.5rem;
      margin-right: 0.5rem;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .logo-main {
      font-family: 'Noto Serif SC', serif;
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(45deg, #FFD700, #00D4FF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .logo-sub {
      font-size: 0.9rem;
      color: #94A3B8;
      letter-spacing: 2px;
    }

    .desktop-nav {
      display: flex;
      gap: 2rem;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      text-decoration: none;
      color: #F8FAFC;
      border-radius: 8px;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }

    .nav-link.active {
      background: linear-gradient(45deg, #00D4FF, #20B2AA);
      color: #0B1426;
      font-weight: 600;
    }

    .nav-icon {
      font-size: 1.2rem;
    }

    .nav-label {
      font-family: 'Noto Sans SC', sans-serif;
      font-size: 0.95rem;
    }

    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .mobile-menu-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      width: 24px;
      height: 18px;
      justify-content: space-between;
    }

    .hamburger span {
      width: 100%;
      height: 2px;
      background: #F8FAFC;
      transition: all 0.3s ease;
      transform-origin: center;
    }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }

    .mobile-nav {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(11, 20, 38, 0.98);
      backdrop-filter: blur(20px);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .mobile-nav.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .mobile-nav-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2rem;
      text-decoration: none;
      color: #F8FAFC;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }

    .mobile-nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .mobile-nav-link.active {
      background: linear-gradient(45deg, #00D4FF, #20B2AA);
      color: #0B1426;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .header-container {
        padding: 0 1rem;
      }

      .desktop-nav {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
      }

      .mobile-nav {
        display: block;
      }

      .logo-main {
        font-size: 1.2rem;
      }

      .logo-icon {
        font-size: 2rem;
      }
    }
  `}</style>
);

const HeaderWithStyles = () => (
  <>
    <HeaderStyles />
    <Header />
  </>
);

export default HeaderWithStyles;