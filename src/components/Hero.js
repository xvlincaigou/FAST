import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate hero elements on mount
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    });

    timeline
      .add({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1200,
        delay: 500
      })
      .add({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 200
      }, '-=800')
      .add({
        targets: buttonRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.8, 1],
        duration: 600
      }, '-=400');

    // Parallax effect on scroll
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallax = heroRef.current;
      const speed = scrolled * 0.5;
      
      if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title" ref={titleRef}>
            宇宙中的中国天眼
          </h1>
          <p className="hero-subtitle" ref={subtitleRef}>
            探索百亿光年之外的宇宙奥秘<br/>
            聆听来自深空的脉冲信号<br/>
            见证中国天文学的辉煌成就
          </p>
          <div className="hero-buttons" ref={buttonRef}>
            <Link to="/discoveries" className="cosmic-button hero-btn">
              开始探索
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">1152</div>
            <div className="stat-label">发现脉冲星</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500米</div>
            <div className="stat-label">口径直径</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">137亿</div>
            <div className="stat-label">观测距离(光年)</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-text">向下滚动探索</div>
        <div className="scroll-arrow"></div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/hero-fast-cosmic.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(11, 20, 38, 0.7) 0%, rgba(26, 11, 46, 0.5) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1000px;
          padding: 0 2rem;
        }

        .hero-title {
          font-family: 'ZCOOL XiaoWei', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, #FFD700, #00D4FF, #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          color: #E2E8F0;
          margin-bottom: 3rem;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }

        .hero-btn {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          min-width: 120px;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #00D4FF, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #94A3B8;
          font-weight: 500;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        .scroll-text {
          font-size: 0.9rem;
          color: #94A3B8;
          margin-bottom: 0.5rem;
        }

        .scroll-arrow {
          width: 20px;
          height: 20px;
          border-right: 2px solid #00D4FF;
          border-bottom: 2px solid #00D4FF;
          transform: rotate(45deg);
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 0 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .hero-btn {
            width: 200px;
          }

          .hero-stats {
            gap: 1.5rem;
          }

          .stat-item {
            min-width: 100px;
            padding: 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .scroll-indicator {
            bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;