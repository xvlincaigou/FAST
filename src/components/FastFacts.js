import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const FastFacts = () => {
  const factsRef = useRef([]);

  const facts = [
    {
      number: 1152,
      suffix: '+',
      label: '发现脉冲星',
      description: '超过同一时期国际其他望远镜发现总数的3倍',
      icon: '🌟',
      color: '#00D4FF'
    },
    {
      number: 500,
      suffix: '米',
      label: '口径直径（米）',
      description: '世界最大单口径球面射电望远镜',
      icon: '🔭',
      color: '#FFD700'
    },
    {
      number: 137,
      suffix: '亿光年',
      label: '观测距离（亿光年）',
      description: '可探测到接近宇宙边缘的微弱信号',
      icon: '🌌',
      color: '#FF6B35'
    },
    {
      number: 2.5,
      suffix: '倍',
      label: '灵敏度领先（倍）',
      description: '比世界第二大的射电望远镜灵敏度高2.5倍',
      icon: '⚡',
      color: '#20B2AA'
    },
    {
      number: 5300,
      suffix: '+',
      label: '年观测时长（小时）',
      description: '每年超过5300小时的稳定观测时间',
      icon: '⏱️',
      color: '#FF1493'
    },
    {
      number: 70,
      suffix: '+',
      label: '高水平论文',
      description: '基于FAST数据发表在国际顶级期刊',
      icon: '📄',
      color: '#9370DB'
    }
  ];

  useEffect(() => {
    // Animate facts on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            animateFact(index);
          }
        });
      },
      { threshold: 0.3 }
    );

    factsRef.current.forEach((fact) => {
      if (fact) observer.observe(fact);
    });

    return () => {
      factsRef.current.forEach((fact) => {
        if (fact) observer.unobserve(fact);
      });
    };
  }, []);

  const animateFact = (index) => {
    const fact = facts[index];
    
    anime({
      targets: factsRef.current[index],
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 800,
      delay: index * 100,
      easing: 'easeOutElastic(1, .8)'
    });

    anime({
      targets: factsRef.current[index].querySelector('.fact-number'),
      innerHTML: [0, fact.number],
      duration: 2000,
      delay: index * 100 + 400,
      round: fact.number > 100 ? 1 : 10,
      easing: 'easeOutExpo'
    });
  };

  return (
    <div className="fast-facts">
      <div className="facts-grid">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="fact-card glass-card"
            ref={(el) => (factsRef.current[index] = el)}
            data-index={index}
          >
            <div className="fact-icon" style={{ color: fact.color }}>
              {fact.icon}
            </div>
            <div className="fact-number" style={{ color: fact.color }}>
              {fact.number}{fact.suffix}
            </div>
            <div className="fact-label">{fact.label}</div>
            <div className="fact-description">{fact.description}</div>
          </div>
        ))}
      </div>

      <div className="comparison-section">
        <h3>FAST 与世界其他射电望远镜对比</h3>
        <div className="comparison-chart">
          <div className="telescope-item">
            <div className="telescope-name">中国 FAST</div>
            <div className="telescope-spec">
              <div className="spec-bar" style={{ width: '100%', background: '#00D4FF' }}>
                500米口径
              </div>
            </div>
          </div>
          <div className="telescope-item">
            <div className="telescope-name">美国 Arecibo</div>
            <div className="telescope-spec">
              <div className="spec-bar" style={{ width: '70%', background: '#FFD700' }}>
                305米口径
              </div>
            </div>
          </div>
          <div className="telescope-item">
            <div className="telescope-name">德国 Effelsberg</div>
            <div className="telescope-spec">
              <div className="spec-bar" style={{ width: '20%', background: '#FF6B35' }}>
                100米口径
              </div>
            </div>
          </div>
          <div className="telescope-item">
            <div className="telescope-name">澳大利亚 Parkes</div>
            <div className="telescope-spec">
              <div className="spec-bar" style={{ width: '12.8%', background: '#20B2AA' }}>
                64米口径
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fast-facts {
          padding: 2rem 0;
        }

        .facts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .fact-card {
          padding: 2rem;
          text-align: center;
          border-radius: 16px;
          transition: all 0.3s ease;
          opacity: 0;
          transform: scale(0.8);
        }

        .fact-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .fact-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .fact-number {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-family: 'Noto Serif SC', serif;
        }

        .fact-label {
          font-size: 1.2rem;
          font-weight: 600;
          color: #E2E8F0;
          margin-bottom: 1rem;
        }

        .fact-description {
          font-size: 0.95rem;
          color: #94A3B8;
          line-height: 1.5;
        }

        .comparison-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
        }

        .comparison-section h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #FFD700;
        }

        .comparison-chart {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .telescope-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .telescope-name {
          min-width: 150px;
          text-align: left;
          font-weight: 600;
          color: #E2E8F0;
        }

        .telescope-spec {
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .spec-bar {
          height: 30px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0B1426;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .spec-bar:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .facts-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .fact-card {
            padding: 1.5rem;
          }

          .fact-number {
            font-size: 2.5rem;
          }

          .comparison-section {
            padding: 2rem 1rem;
          }

          .telescope-item {
            flex-direction: column;
            align-items: stretch;
            gap: 0.5rem;
          }

          .telescope-name {
            min-width: auto;
            text-align: center;
          }

          .spec-bar {
            height: 25px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FastFacts;