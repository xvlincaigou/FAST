import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FastFacts from '../components/FastFacts';
import LatestDiscoveries from '../components/LatestDiscoveries';
import '../styles/globals.css';

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home-page">
      <Hero />

      {/* FAST Facts Section */}
      <section 
        className="section fast-facts-section fade-in-up"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="container">
          <h2 className="section-title">FAST 惊人数据</h2>
          <FastFacts />
        </div>
      </section>

      {/* Latest Discoveries Section */}
      <section 
        className="section discoveries-section fade-in-up"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="container">
          <h2 className="section-title">最新发现</h2>
          <LatestDiscoveries />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section cta-section fade-in-up"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <div className="container">
          <div className="cta-content glass-card">
            <h2>探索更多宇宙奥秘</h2>
            <p>深入了解中国天眼的科学发现和技术创新</p>
            <div className="cta-buttons">
              <Link to="/discoveries" className="cosmic-button">
                科学发现
              </Link>
              <Link to="/technology" className="cosmic-button secondary">
                技术创新
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          position: relative;
          z-index: 1;
        }

        .section {
          padding: 5rem 0;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #94A3B8;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-section {
          background: linear-gradient(135deg, rgba(26, 11, 46, 0.3) 0%, rgba(11, 20, 38, 0.3) 100%);
          padding: 6rem 0;
        }

        .cta-content {
          text-align: center;
          padding: 4rem 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-content p {
          font-size: 1.2rem;
          color: #94A3B8;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cosmic-button.secondary {
          background: linear-gradient(45deg, #FF6B35, #FF1493);
        }

        .cosmic-button.secondary:hover {
          box-shadow: 0 10px 25px rgba(255, 107, 53, 0.4);
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .section {
            padding: 3rem 0;
          }

          .cta-content {
            padding: 2rem 1rem;
          }

          .cta-content h2 {
            font-size: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cosmic-button {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;