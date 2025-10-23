import React, { useState, useEffect } from 'react';
import anime from 'animejs';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const timelineEvents = [
    {
      id: 1,
      year: '1994',
      date: '1994年',
      title: '项目构想',
      shortDesc: '南仁东提出建设中国大型射电望远镜的构想',
      fullDesc: '在日本担任客座教授的南仁东毅然回国，决心建造一个属于中国的大型射电望远镜。他说："别人都有自己的大设备，我们没有，我挺想试一试。"',
      image: '/hero-fast-cosmic.png',
      category: '构想',
      significance: '这一构想为中国天文学的发展指明了方向',
      achievements: [
        '提出利用喀斯特洼地作为望远镜台址',
        '开始国际合作的探索',
        '组建初步的科研团队'
      ]
    },
    {
      id: 2,
      year: '2001',
      date: '2001年',
      title: '立项启动',
      shortDesc: 'FAST项目正式立项，开始可行性研究',
      fullDesc: '经过7年的前期研究，FAST项目获得国家批准，正式开始立项建设。这一阶段主要完成了选址、技术方案论证等关键工作。',
      image: '/fast-technical-diagram.png',
      category: '立项',
      significance: '标志着中国大科学工程建设进入新阶段',
      achievements: [
        '完成贵州选址工作',
        '确定500米口径设计方案',
        '获得国家发改委批准'
      ]
    },
    {
      id: 3,
      year: '2011',
      date: '2011年3月',
      title: '开工建设',
      shortDesc: 'FAST在贵州平塘正式开工建设',
      fullDesc: '2011年3月，FAST工程在贵州省平塘县大窝凼洼地正式开工建设。这是一个历史性的时刻，标志着FAST从概念设计转向工程实施。',
      image: '/milky-way-panorama.png',
      category: '建设',
      significance: '从概念设计转向工程实施的重要里程碑',
      achievements: [
        '开始场地平整工程',
        '启动索网结构制造',
        '建设配套设施'
      ]
    },
    {
      id: 4,
      year: '2016',
      date: '2016年9月25日',
      title: '落成启用',
      shortDesc: 'FAST正式落成启用，习近平总书记发来贺信',
      fullDesc: '2016年9月25日，FAST正式落成启用，成为世界上最大的单口径射电望远镜。习近平总书记发来贺信，强调FAST对我国在科学前沿实现重大原创突破的重要意义。',
      image: '/pulsars-cosmic.png',
      category: '落成',
      significance: '中国在天文大科学装置领域实现重大突破',
      achievements: [
        '完成主体工程建设',
        '开始系统调试',
        '获得国际认可'
      ]
    },
    {
      id: 5,
      year: '2017',
      date: '2017年10月10日',
      title: '首次发现',
      shortDesc: 'FAST发现首批脉冲星，实现零的突破',
      fullDesc: '2017年10月，FAST宣布发现2颗新脉冲星，距离地球分别约4100光年和1.6万光年。这是中国射电望远镜首次发现脉冲星，具有重要的里程碑意义。',
      image: '/frb-burst-cosmic.png',
      category: '发现',
      significance: '中国射电望远镜首次发现脉冲星，具有重要的里程碑意义',
      achievements: [
        '发现脉冲星J1859-01',
        '发现脉冲星J1931-01',
        '实现中国脉冲星发现零的突破'
      ]
    },
    {
      id: 6,
      year: '2020',
      date: '2020年1月11日',
      title: '通过国家验收',
      shortDesc: 'FAST顺利通过国家验收，正式开放运行',
      fullDesc: '2020年1月11日，FAST通过国家验收，各项指标达到或超过设计要求。这标志着FAST进入正式运行阶段，开始为科学界提供服务。',
      image: '/fast-discoveries-timeline.png',
      category: '验收',
      significance: '标志着FAST进入正式运行阶段',
      achievements: [
        '所有性能指标达标',
        '开始正式科学观测',
        '为重大科学发现奠定基础'
      ]
    },
    {
      id: 7,
      year: '2021',
      date: '2021年3月31日',
      title: '全球开放',
      shortDesc: 'FAST向全球科学界开放，促进国际合作',
      fullDesc: '2021年3月31日，FAST正式向全球科学家开放观测申请。这体现了中国科学家的开放合作精神，为全球天文学研究提供了重要平台。',
      image: '/hero-fast-cosmic.png',
      category: '开放',
      significance: '体现了中国科学家的开放合作精神',
      achievements: [
        '接收国际观测申请',
        '批准15个国家27个项目',
        '开始国际科学观测'
      ]
    },
    {
      id: 8,
      year: '2023',
      date: '2023年',
      title: '成果丰硕',
      shortDesc: 'FAST取得系列重大科学发现',
      fullDesc: '截至2023年，FAST已发现超过1000颗脉冲星，在快速射电暴、中性氢巡天等领域取得重大突破，进入成果爆发期。',
      image: '/pulsars-cosmic.png',
      category: '成果',
      significance: 'FAST进入成果爆发期，为人类认识宇宙作出重要贡献',
      achievements: [
        '发现1000+脉冲星',
        '快速射电暴研究突破',
        '发表70+高水平论文'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: '全部', color: '#E2E8F0' },
    { id: '构想', name: '构想', color: '#FFD700' },
    { id: '立项', name: '立项', color: '#FF6B35' },
    { id: '建设', name: '建设', color: '#00D4FF' },
    { id: '落成', name: '落成', color: '#20B2AA' },
    { id: '发现', name: '发现', color: '#FF1493' },
    { id: '验收', name: '验收', color: '#9370DB' },
    { id: '开放', name: '开放', color: '#00FA9A' },
    { id: '成果', name: '成果', color: '#FFA500' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents = selectedCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === selectedCategory);

  const handleEventClick = (event) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSelectedEvent(event);
    
    // Animate the modal appearance
    anime({
      targets: '.event-modal',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 500,
      easing: 'easeOutElastic(1, .8)',
      complete: () => {
        setIsAnimating(false);
      }
    });
  };

  const closeModal = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    anime({
      targets: '.event-modal',
      opacity: [1, 0],
      scale: [1, 0.8],
      duration: 300,
      easing: 'easeInBack',
      complete: () => {
        setSelectedEvent(null);
        setIsAnimating(false);
      }
    });
  };

  return (
    <div className="timeline">
      <div className="timeline-header">
        <h2>FAST 发展历程</h2>
        <p className="timeline-subtitle">
          从构想到现实，见证中国天眼的辉煌历程
        </p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
            style={{
              '--category-color': category.color
            }}
          >
            <span className="filter-dot" style={{ backgroundColor: category.color }}></span>
            <span className="filter-name">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Timeline Container */}
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {filteredEvents.map((event, index) => (
          <div 
            key={event.id} 
            className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
            onClick={() => handleEventClick(event)}
          >
            <div className="event-marker" style={{ borderColor: categories.find(c => c.id === event.category)?.color }}>
              <div className="event-year">{event.year}</div>
            </div>
            
            <div className="event-content glass-card">
              <div className="event-header">
                <h3 className="event-title">{event.title}</h3>
                <span className="event-category" style={{ color: categories.find(c => c.id === event.category)?.color }}>
                  {event.category}
                </span>
              </div>
              
              <p className="event-description">{event.shortDesc}</p>
              
              <div className="event-footer">
                <span className="event-date">{event.date}</span>
                <button className="learn-more-btn">
                  了解更多 →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="event-modal-overlay" onClick={closeModal}>
          <div 
            className="event-modal glass-card" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-category" style={{ color: categories.find(c => c.id === selectedEvent.category)?.color }}>
                {selectedEvent.category}
              </div>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedEvent.image} alt={selectedEvent.title} />
              </div>
              
              <div className="modal-text">
                <h2>{selectedEvent.title}</h2>
                <div className="modal-date">{selectedEvent.date}</div>
                
                <p className="modal-description">{selectedEvent.fullDesc}</p>
                
                <div className="modal-significance">
                  <h4>重要意义</h4>
                  <p>{selectedEvent.significance}</p>
                </div>
                
                <div className="modal-achievements">
                  <h4>主要成就</h4>
                  <ul>
                    {selectedEvent.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .timeline {
          padding: 2rem 0;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 2rem;
          padding-right: 2rem;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .timeline-header h2 {
          font-size: 2.5rem;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .timeline-subtitle {
          font-size: 1.2rem;
          color: #94A3B8;
          max-width: 600px;
          margin: 0 auto;
        }

        .category-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: #94A3B8;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .filter-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .filter-button.active {
          background: var(--category-color);
          color: #0B1426;
          border-color: var(--category-color);
          font-weight: 600;
        }

        .filter-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .timeline-container {
          position: relative;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #00D4FF, #FFD700, #FF6B35);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .timeline-event {
          position: relative;
          margin-bottom: 4rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .timeline-event:hover {
          transform: scale(1.02);
        }

        .timeline-event.left {
          padding-right: 50%;
          text-align: right;
        }

        .timeline-event.right {
          padding-left: 50%;
          text-align: left;
        }

        .event-marker {
          position: absolute;
          left: 50%;
          top: 20px;
          width: 60px;
          height: 60px;
          background: rgba(11, 20, 38, 0.9);
          border: 4px solid;
          border-radius: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .timeline-event:hover .event-marker {
          transform: translateX(-50%) scale(1.2);
          box-shadow: 0 0 20px currentColor;
        }

        .event-year {
          font-size: 0.8rem;
          font-weight: 700;
          color: #E2E8F0;
        }

        .event-content {
          padding: 2rem;
          border-radius: 16px;
          margin: 0 2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .event-content::before {
          content: '';
          position: absolute;
          top: 30px;
          width: 0;
          height: 0;
          border: 15px solid transparent;
        }

        .timeline-event.left .event-content::before {
          right: -30px;
          border-left-color: rgba(255, 255, 255, 0.05);
        }

        .timeline-event.right .event-content::before {
          left: -30px;
          border-right-color: rgba(255, 255, 255, 0.05);
        }

        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .event-title {
          font-size: 1.4rem;
          color: #00D4FF;
          margin: 0;
          flex: 1;
        }

        .event-category {
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.3rem 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          margin-left: 1rem;
          flex-shrink: 0;
        }

        .event-description {
          font-size: 1rem;
          color: #E2E8F0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .event-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .event-date {
          font-size: 0.9rem;
          color: #94A3B8;
          font-weight: 600;
        }

        .learn-more-btn {
          background: linear-gradient(45deg, #00D4FF, #20B2AA);
          color: #0B1426;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .learn-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .event-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .event-modal {
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 16px;
          position: relative;
          opacity: 0;
          transform: scale(0.8);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 2rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-category {
          font-size: 1rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }

        .modal-close {
          background: none;
          border: none;
          color: #94A3B8;
          font-size: 2rem;
          cursor: pointer;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #F8FAFC;
        }

        .modal-content {
          padding: 0 2rem 2rem;
        }

        .modal-image {
          width: 100%;
          height: 300px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-text h2 {
          color: #00D4FF;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .modal-date {
          color: #FFD700;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .modal-description {
          font-size: 1.1rem;
          color: #E2E8F0;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .modal-significance,
        .modal-achievements {
          margin-bottom: 2rem;
        }

        .modal-significance h4,
        .modal-achievements h4 {
          color: #FFD700;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .modal-significance p {
          color: #E2E8F0;
          line-height: 1.6;
          font-style: italic;
        }

        .modal-achievements ul {
          list-style: none;
          padding: 0;
        }

        .modal-achievements li {
          padding: 0.8rem 0;
          padding-left: 2rem;
          position: relative;
          color: #E2E8F0;
          line-height: 1.5;
        }

        .modal-achievements li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: #00D4FF;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .timeline {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .timeline-event.left,
          .timeline-event.right {
            padding-left: 2rem;
            padding-right: 0;
            text-align: left;
          }

          .timeline-line {
            left: 1rem;
          }

          .event-marker {
            left: 1rem;
          }

          .timeline-event.left .event-content::before,
          .timeline-event.right .event-content::before {
            left: -30px;
            border-right-color: rgba(255, 255, 255, 0.05);
            border-left-color: transparent;
          }

          .category-filter {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
          }

          .event-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .event-category {
            margin-left: 0;
            align-self: flex-start;
          }

          .event-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Timeline;