import React, { useState, useEffect } from 'react';

const VirtualTour = () => {
  const [currentView, setCurrentView] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [hotspotInfo, setHotspotInfo] = useState(null);

  const tourViews = [
    {
      id: 'overview',
      name: '全景概览',
      description: '从高处俯瞰FAST全貌',
      image: '/hero-fast-cosmic.png',
      hotspots: [
        {
          id: 'dish',
          x: 50,
          y: 60,
          title: '反射面',
          description: '500米口径的主动反射面，由4450块反射面单元组成'
        },
        {
          id: 'cabin',
          x: 50,
          y: 40,
          title: '馈源舱',
          description: '30吨重的馈源舱，通过6根钢索精确定位'
        },
        {
          id: 'towers',
          x: 20,
          y: 30,
          title: '支撑塔',
          description: '6座百米高的钢塔，确保整体结构稳定'
        }
      ]
    },
    {
      id: 'control-room',
      name: '控制室',
      description: 'FAST的神经中枢',
      image: '/fast-technical-diagram.png',
      hotspots: [
        {
          id: 'monitors',
          x: 60,
          y: 50,
          title: '监控屏幕',
          description: '实时显示望远镜运行状态和观测数据'
        },
        {
          id: 'operators',
          x: 40,
          y: 70,
          title: '操作台',
          description: '科研人员24小时监控望远镜运行'
        }
      ]
    },
    {
      id: 'feed-cabin',
      name: '馈源舱内部',
      description: '信号接收的核心区域',
      image: '/pulsars-cosmic.png',
      hotspots: [
        {
          id: 'receivers',
          x: 50,
          y: 50,
          title: '接收机',
          description: '高灵敏度接收机，可接收70MHz-3GHz信号'
        },
        {
          id: 'instruments',
          x: 30,
          y: 70,
          title: '科学仪器',
          description: '各种科学仪器和数据处理设备'
        }
      ]
    }
  ];

  const currentTourView = tourViews.find(view => view.id === currentView);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentView]);

  const handleHotspotClick = (hotspot) => {
    setHotspotInfo(hotspot);
  };

  const closeHotspotInfo = () => {
    setHotspotInfo(null);
  };

  return (
    <div className="virtual-tour">
      {/* Tour Navigation */}
      <div className="tour-navigation">
        <h2>虚拟FAST导览</h2>
        <div className="view-selector">
          {tourViews.map((view) => (
            <button
              key={view.id}
              className={`view-button ${currentView === view.id ? 'active' : ''}`}
              onClick={() => {
                setCurrentView(view.id);
                setIsLoading(true);
                setHotspotInfo(null);
              }}
            >
              <div className="view-name">{view.name}</div>
              <div className="view-description">{view.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Tour Display */}
      <div className="tour-display">
        {isLoading ? (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>正在加载虚拟场景...</p>
          </div>
        ) : (
          <div className="tour-scene">
            <img 
              src={currentTourView.image} 
              alt={currentTourView.name}
              className="tour-image"
            />
            
            {/* Hotspots */}
            {currentTourView.hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="hotspot"
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`
                }}
                onClick={() => handleHotspotClick(hotspot)}
              >
                <div className="hotspot-marker"></div>
                <div className="hotspot-label">{hotspot.title}</div>
              </div>
            ))}
          </div>
        )}

        {/* Hotspot Information Panel */}
        {hotspotInfo && (
          <div className="hotspot-info-panel glass-card">
            <div className="panel-header">
              <h3>{hotspotInfo.title}</h3>
              <button 
                className="close-button"
                onClick={closeHotspotInfo}
              >
                ×
              </button>
            </div>
            <p>{hotspotInfo.description}</p>
          </div>
        )}
      </div>

      {/* Tour Controls */}
      <div className="tour-controls">
        <div className="control-group">
          <label>观测模式:</label>
          <select>
            <option value="pulsar">脉冲星观测</option>
            <option value="frb">快速射电暴</option>
            <option value="h1">中性氢巡天</option>
            <option value="continuum">连续谱观测</option>
          </select>
        </div>
        
        <div className="control-group">
          <label>频率范围:</label>
          <input type="range" min="70" max="3000" value="1400" />
          <span>1400 MHz</span>
        </div>

        <div className="control-group">
          <label>观测状态:</label>
          <span className="status-indicator active">正在观测</span>
        </div>
      </div>

      {/* Information Panel */}
      <div className="info-panel">
        <h3>实时数据</h3>
        <div className="data-grid">
          <div className="data-item">
            <span className="data-label">当前指向</span>
            <span className="data-value">RA: 19h30m, Dec: +20°15'</span>
          </div>
          <div className="data-item">
            <span className="data-label">系统温度</span>
            <span className="data-value">25K</span>
          </div>
          <div className="data-item">
            <span className="data-label">天气状况</span>
            <span className="data-value">晴朗</span>
          </div>
          <div className="data-item">
            <span className="data-label">风速</span>
            <span className="data-value">2.5 m/s</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .virtual-tour {
          padding: 2rem 0;
          max-width: 1200px;
          margin: 0 auto;
        }

        .tour-navigation {
          text-align: center;
          margin-bottom: 3rem;
        }

        .tour-navigation h2 {
          font-size: 2.5rem;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 2rem;
        }

        .view-selector {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .view-button {
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #94A3B8;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          min-width: 150px;
        }

        .view-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .view-button.active {
          background: linear-gradient(45deg, #00D4FF, #20B2AA);
          color: #0B1426;
          border-color: #00D4FF;
        }

        .view-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .view-description {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .tour-display {
          position: relative;
          margin-bottom: 3rem;
        }

        .tour-scene {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 16/9;
          background: #000;
        }

        .tour-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(11, 20, 38, 0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #E2E8F0;
          font-size: 1.2rem;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(0, 212, 255, 0.3);
          border-top: 3px solid #00D4FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .hotspot {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
          z-index: 10;
        }

        .hotspot-marker {
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #00D4FF, #FFD700);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
          position: relative;
        }

        .hotspot-marker::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border: 2px solid rgba(0, 212, 255, 0.5);
          border-radius: 50%;
          animation: ripple 2s ease-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .hotspot-label {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(11, 20, 38, 0.9);
          color: #E2E8F0;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          border: 1px solid #00D4FF;
        }

        .hotspot:hover .hotspot-label {
          opacity: 1;
          visibility: visible;
        }

        .hotspot-info-panel {
          position: absolute;
          top: 2rem;
          right: 2rem;
          width: 300px;
          padding: 2rem;
          border-radius: 12px;
          z-index: 20;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .panel-header h3 {
          color: #00D4FF;
          font-size: 1.3rem;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          color: #94A3B8;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #F8FAFC;
        }

        .hotspot-info-panel p {
          color: #E2E8F0;
          line-height: 1.6;
          margin: 0;
        }

        .tour-controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .control-group label {
          font-weight: 600;
          color: #E2E8F0;
          font-size: 0.95rem;
        }

        .control-group select,
        .control-group input[type="range"] {
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #F8FAFC;
          font-size: 0.9rem;
        }

        .control-group input[type="range"] {
          -webkit-appearance: none;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          outline: none;
        }

        .control-group input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          background: #00D4FF;
          border-radius: 50%;
          cursor: pointer;
        }

        .status-indicator {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .status-indicator.active {
          background: linear-gradient(45deg, #00D4FF, #20B2AA);
          color: #0B1426;
        }

        .info-panel {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .info-panel h3 {
          color: #FFD700;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .data-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .data-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }

        .data-label {
          font-size: 0.9rem;
          color: #94A3B8;
        }

        .data-value {
          font-size: 1rem;
          font-weight: 600;
          color: #00D4FF;
        }

        @media (max-width: 768px) {
          .view-selector {
            flex-direction: column;
            align-items: center;
          }

          .view-button {
            width: 250px;
          }

          .timeline-main {
            grid-template-columns: 1fr;
          }

          .hotspot-info-panel {
            position: relative;
            top: auto;
            right: auto;
            width: 100%;
            margin-top: 1rem;
          }

          .tour-controls {
            grid-template-columns: 1fr;
          }

          .data-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default VirtualTour;