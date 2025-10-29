import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LatestDiscoveries = () => {
  const [activeDiscovery, setActiveDiscovery] = useState(0);

  const discoveries = [
    {
      id: 1,
      title: '发现轨道周期最短的脉冲星双星系统',
      date: '2023年6月',
      category: '脉冲星发现',
      description: '中国天眼FAST发现了人类已知轨道周期最短的脉冲星双星系统，轨道周期仅为53分钟，这一发现对研究致密星体演化具有重要意义。',
      image: `${process.env.PUBLIC_URL}/pulsars-cosmic.png`,
      significance: '这一发现为理解中子星和黑洞等致密天体的形成和演化提供了新的观测证据',
      publishedIn: '《自然》杂志',
      details: '该系统由一颗脉冲星和一颗白矮星组成，两者之间的距离仅为地球到月球的1.5倍。'
    },
    {
      id: 2,
      title: '探测到纳赫兹引力波存在的关键证据',
      date: '2023年6月',
      category: '引力波探测',
      description: '通过精确测量脉冲星计时阵列，FAST团队探测到了纳赫兹引力波存在的关键证据，为引力波天文学开辟了新窗口。',
      image: `${process.env.PUBLIC_URL}/frb-burst-cosmic.png`,
      significance: '这是人类首次在纳赫兹频段探测到引力波，证实了爱因斯坦广义相对论的又一重要预言',
      publishedIn: '《天文学与天体物理学》',
      details: '这一发现为研究超大质量黑洞并合、早期宇宙相变等物理过程提供了新的观测手段。'
    },
    {
      id: 3,
      title: '首次在射电波段观测到黑洞"脉搏"',
      date: '2023年7月',
      category: '黑洞研究',
      description: 'FAST首次在射电波段观测到黑洞的周期性信号，就像黑洞的"脉搏"一样，这一发现为理解黑洞物理提供了新的视角。',
      image: `${process.env.PUBLIC_URL}/fast-technical-diagram.png`,
      significance: '这一发现证实了黑洞周围存在复杂的物理过程，为黑洞物理学提供了重要观测约束',
      publishedIn: '《自然》杂志',
      details: '观测到的黑洞"脉搏"周期约为0.2秒'
    },
    {
      id: 4,
      title: '构建世界最大中性氢星系样本',
      date: '2023年12月',
      category: '星系巡天',
      description: '利用FAST的高灵敏度，天文学家构建了世界上最大的中性氢星系样本，包含数万个星系的中性氢观测数据。',
      image: `${process.env.PUBLIC_URL}/milky-way-panorama.png`,
      significance: '这一样本为研究星系形成和演化、暗物质分布等宇宙学重大问题提供了宝贵的观测数据',
      publishedIn: '《中国科学：物理学 力学 天文学》',
      details: '该样本覆盖的天空范围是之前最大样本的10倍以上，探测到的星系距离远至50亿光年。'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDiscovery((prev) => (prev + 1) % discoveries.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [discoveries.length]);

  const currentDiscovery = discoveries[activeDiscovery];

  return (
    <div className="latest-discoveries">
      <div className="discoveries-showcase">
        <div className="discovery-main">
          <div className="discovery-image">
            <img src={currentDiscovery.image} alt={currentDiscovery.title} />
            <div className="discovery-overlay">
              <span className="discovery-category">{currentDiscovery.category}</span>
              <span className="discovery-date">{currentDiscovery.date}</span>
            </div>
          </div>
          
          <div className="discovery-content">
            <h3 className="discovery-title">{currentDiscovery.title}</h3>
            <p className="discovery-description">{currentDiscovery.description}</p>
            
            <div className="discovery-details">
              <div className="detail-item">
                <strong>科学意义:</strong>
                <p>{currentDiscovery.significance}</p>
              </div>
              <div className="detail-item">
                <strong>发表期刊:</strong>
                <span className="journal">{currentDiscovery.publishedIn}</span>
              </div>
              <div className="detail-item">
                <strong>详细说明:</strong>
                <p>{currentDiscovery.details}</p>
              </div>
            </div>

            <Link to="/discoveries" className="cosmic-button">
              查看更多发现
            </Link>
          </div>
        </div>

        <div className="discoveries-navigation">
          {discoveries.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === activeDiscovery ? 'active' : ''}`}
              onClick={() => setActiveDiscovery(index)}
              aria-label={`查看发现 ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="discoveries-summary">
        <h3>FAST 重大科学成就</h3>
        <div className="achievements-grid">
          <div className="achievement-item">
            <div className="achievement-number">5</div>
            <div className="achievement-label">《自然》论文</div>
          </div>
          <div className="achievement-item">
            <div className="achievement-number">1</div>
            <div className="achievement-label">《科学》论文</div>
          </div>
          <div className="achievement-item">
            <div className="achievement-number">15</div>
            <div className="achievement-label">国家合作</div>
          </div>
          <div className="achievement-item">
            <div className="achievement-number">900+</div>
            <div className="achievement-label">小时国际观测</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .latest-discoveries {
          padding: 2rem 0;
        }

        .discoveries-showcase {
          margin-bottom: 4rem;
        }

        .discovery-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 2rem;
        }

        .discovery-image {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 16/10;
        }

        .discovery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .discovery-image:hover img {
          transform: scale(1.05);
        }

        .discovery-overlay {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .discovery-category,
        .discovery-date {
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .discovery-category {
          background: linear-gradient(45deg, #00D4FF, #20B2AA);
        }

        .discovery-date {
          background: linear-gradient(45deg, #FFD700, #FF6B35);
        }

        .discovery-content {
          padding: 1rem;
        }

        .discovery-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.3;
        }

        .discovery-description {
          font-size: 1.1rem;
          color: #E2E8F0;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .discovery-details {
          margin-bottom: 2rem;
        }

        .detail-item {
          margin-bottom: 1rem;
        }

        .detail-item strong {
          color: #FFD700;
          display: block;
          margin-bottom: 0.5rem;
        }

        .detail-item p {
          color: #94A3B8;
          line-height: 1.5;
          margin: 0;
        }

        .journal {
          background: linear-gradient(45deg, #FF6B35, #FF1493);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        .discoveries-navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dot:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: scale(1.2);
        }

        .nav-dot.active {
          background: linear-gradient(45deg, #00D4FF, #FFD700);
          transform: scale(1.3);
        }

        .discoveries-summary {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
        }

        .discoveries-summary h3 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #FFD700;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }

        .achievement-item {
          text-align: center;
        }

        .achievement-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #00D4FF, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .achievement-label {
          font-size: 1rem;
          color: #94A3B8;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .discovery-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .discovery-title {
            font-size: 1.5rem;
          }

          .discovery-description {
            font-size: 1rem;
          }

          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .achievement-number {
            font-size: 2rem;
          }

          .discoveries-summary {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LatestDiscoveries;