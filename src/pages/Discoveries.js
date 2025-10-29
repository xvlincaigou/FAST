import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const Discoveries = () => {
  const [activeTab, setActiveTab] = useState('pulsars');
  const [selectedDiscovery, setSelectedDiscovery] = useState(null);

  // Discovery data based on real FAST achievements
  const discoveryData = {
    pulsars: [
      {
        id: 1,
        name: 'PSR J1859-01',
        period: 1.83,
        distance: 16000,
        discoveryDate: '2017-08-22',
        significance: '中国天眼发现的首批脉冲星之一',
        ra: '18h59m',
        dec: '-01°23\'',
        flux: 0.15,
        width: 3.2
      },
      {
        id: 2,
        name: 'PSR J1931-01',
        period: 0.59,
        distance: 4100,
        discoveryDate: '2017-08-25',
        significance: '距离地球4100光年的遥远脉冲星',
        ra: '',
        dec: '',
        flux: '',
        width: ''
      },
      {
        id: 3,
        name: 'PSR J1950+2414',
        period: 0.94,
        distance: 8500,
        discoveryDate: '2019-03-15',
        significance: '毫秒脉冲星，可用于引力波探测',
        ra: '19h50m',
        dec: '+24°14\'',
        flux: 0.12,
        width: 2.8
      }
    ],
    frbs: [
      {
        id: 1,
        name: 'FRB 20190520B',
        date: '2019-05-20',
        significance: '世界首例持续活跃的快速射电暴',
        repeat: true,
        dm: 1205,
        duration: 3.1,
        fluence: 2.3
      },
      {
        id: 2,
        name: 'FRB 20201124A',
        date: '2020-11-24',
        significance: '具有丰富偏振特征的重复快速射电暴',
        repeat: true,
        dm: 297,
        duration: 1.8,
        fluence: 1.9
      }
    ],
    achievements: [
      {
        year: 2017,
        pulsarCount: 2,
        frbCount: 0,
        papers: 0
      },
      {
        year: 2018,
        pulsarCount: 44,
        frbCount: 0,
        papers: 2
      },
      {
        year: 2019,
        pulsarCount: 120,
        frbCount: 5,
        papers: 8
      },
      {
        year: 2020,
        pulsarCount: 280,
        frbCount: 12,
        papers: 15
      },
      {
        year: 2021,
        pulsarCount: 500,
        frbCount: 25,
        papers: 25
      },
      {
        year: 2022,
        pulsarCount: 740,
        frbCount: 40,
        papers: 35
      },
      {
        year: 2023,
        pulsarCount: 1000,
        frbCount: 60,
        papers: 45
      }
    ]
  };

  // ECharts options for pulsar distribution
  const pulsarChartOption = {
    title: {
      text: 'FAST 脉冲星发现统计',
      textStyle: {
        color: '#E2E8F0',
        fontSize: 18
      }
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(11, 20, 38, 0.9)',
      borderColor: '#00D4FF',
      textStyle: {
        color: '#F8FAFC'
      }
    },
    legend: {
      data: ['累计发现', '年度发现'],
      textStyle: {
        color: '#94A3B8'
      }
    },
    xAxis: {
      type: 'category',
      data: discoveryData.achievements.map(d => d.year),
      axisLine: {
        lineStyle: {
          color: '#94A3B8'
        }
      },
      axisLabel: {
        color: '#94A3B8'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#94A3B8'
        }
      },
      axisLabel: {
        color: '#94A3B8'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(148, 163, 184, 0.2)'
        }
      }
    },
    series: [
      {
        name: '累计发现',
        type: 'line',
        data: discoveryData.achievements.map(d => d.pulsarCount),
        itemStyle: {
          color: '#00D4FF'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(0, 212, 255, 0.3)' },
              { offset: 1, color: 'rgba(0, 212, 255, 0.05)' }
            ]
          }
        }
      },
      {
        name: '年度发现',
        type: 'bar',
        data: discoveryData.achievements.map((d, i) => 
          i === 0 ? d.pulsarCount : d.pulsarCount - discoveryData.achievements[i-1].pulsarCount
        ),
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#FFD700' },
              { offset: 1, color: '#FF6B35' }
            ]
          }
        }
      }
    ]
  };

  // ECharts options for FRB properties
  const frbChartOption = {
    title: {
      text: '快速射电暴色散量分布',
      textStyle: {
        color: '#E2E8F0',
        fontSize: 18
      }
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(11, 20, 38, 0.9)',
      borderColor: '#FF6B35',
      textStyle: {
        color: '#F8FAFC'
      }
    },
    xAxis: {
      type: 'value',
      name: '色散量 (pc/cm³)',
      nameTextStyle: {
        color: '#94A3B8'
      },
      axisLine: {
        lineStyle: {
          color: '#94A3B8'
        }
      },
      axisLabel: {
        color: '#94A3B8'
      }
    },
    yAxis: {
      type: 'value',
      name: '持续时间 (ms)',
      nameTextStyle: {
        color: '#94A3B8'
      },
      axisLine: {
        lineStyle: {
          color: '#94A3B8'
        }
      },
      axisLabel: {
        color: '#94A3B8'
      }
    },
    series: [{
      type: 'scatter',
      data: discoveryData.frbs.map(frb => [frb.dm, frb.duration]),
      symbolSize: 20,
      itemStyle: {
        color: '#FF6B35',
        opacity: 0.8
      },
      emphasis: {
        itemStyle: {
          color: '#FF1493'
        }
      }
    }]
  };

  const tabs = [
    { id: 'pulsars', name: '脉冲星发现', icon: '🌟' },
    { id: 'frbs', name: '快速射电暴', icon: '⚡' },
    { id: 'visualizations', name: '数据可视化', icon: '📊' }
  ];

  return (
    <div className="discoveries-page">
      <div className="page-header">
        <h1 className="page-title">科学发现</h1>
        <p className="page-subtitle">
          探索中国天眼FAST在宇宙深处的重大科学发现
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-name">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'pulsars' && (
          <div className="discovery-section">
            <h2>脉冲星发现</h2>
            <p className="section-description">
              截至2023年，FAST已发现超过1000颗脉冲星，是同一时期国际其他望远镜发现总数的3倍以上。
              这些发现为研究极端物理条件下的物质行为、检验广义相对论、探测引力波等前沿科学问题提供了宝贵的观测数据。
            </p>
            
            <div className="discoveries-grid">
              {discoveryData.pulsars.map((pulsar) => (
                <div 
                  key={pulsar.id} 
                  className="discovery-card glass-card"
                  onClick={() => setSelectedDiscovery(pulsar)}
                >
                  <div className="discovery-header">
                    <h3>{pulsar.name}</h3>
                    <span className="discovery-date">{pulsar.discoveryDate}</span>
                  </div>
                  <div className="discovery-properties">
                    <div className="property">
                      <span className="property-label">自转周期</span>
                      <span className="property-value">{pulsar.period} 秒</span>
                    </div>
                    <div className="property">
                      <span className="property-label">距离</span>
                      <span className="property-value">{pulsar.distance.toLocaleString()} 光年</span>
                    </div>
                    <div className="property">
                      <span className="property-label">赤经</span>
                      <span className="property-value">{pulsar.ra}</span>
                    </div>
                    <div className="property">
                      <span className="property-label">赤纬</span>
                      <span className="property-value">{pulsar.dec}</span>
                    </div>
                  </div>
                  <p className="discovery-significance">{pulsar.significance}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'frbs' && (
          <div className="discovery-section">
            <h2>快速射电暴研究</h2>
            <p className="section-description">
              快速射电暴是宇宙中最神秘的瞬态现象之一，持续时间仅为毫秒量级，但释放的能量可达太阳数天的总能量。
              FAST在快速射电暴研究领域取得了系列重大突破，为揭示这一宇宙之谜提供了关键线索。
            </p>
            
            <div className="frb-showcase">
              {discoveryData.frbs.map((frb) => (
                <div key={frb.id} className="frb-card glass-card">
                  <div className="frb-header">
                    <h3>{frb.name}</h3>
                    <div className="frb-type">
                      {frb.repeat ? '重复暴' : '一次性暴'}
                    </div>
                  </div>
                  <div className="frb-properties">
                    <div className="property-row">
                      <span>发现日期:</span>
                      <span>{frb.date}</span>
                    </div>
                    <div className="property-row">
                      <span>色散量:</span>
                      <span>{frb.dm} pc/cm³</span>
                    </div>
                    <div className="property-row">
                      <span>持续时间:</span>
                      <span>{frb.duration} ms</span>
                    </div>
                    <div className="property-row">
                      <span>流量密度:</span>
                      <span>{frb.fluence} Jy ms</span>
                    </div>
                  </div>
                  <p className="frb-significance">{frb.significance}</p>
                </div>
              ))}
            </div>

            <div className="frb-insights">
              <h3>重要科学发现</h3>
              <ul className="insights-list">
                <li>发现了世界首例持续活跃的快速射电暴 FRB 20190520B</li>
                <li>首次观测到重复快速射电暴的偏振特征演化</li>
                <li>揭示了快速射电暴源周围磁化环境的剧烈演化</li>
                <li>为快速射电暴的起源和环境研究提供了重要观测证据</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'visualizations' && (
          <div className="discovery-section">
            <h2>数据可视化</h2>
            <p className="section-description">
              通过交互式图表展示FAST的科学发现数据，直观了解中国天眼在天文观测领域的卓越成就。
            </p>
            
            <div className="charts-container">
              <div className="chart-wrapper">
                <ReactECharts 
                  option={pulsarChartOption} 
                  style={{ height: '400px', width: '100%' }}
                />
              </div>
              
              <div className="chart-wrapper">
                <ReactECharts 
                  option={frbChartOption} 
                  style={{ height: '400px', width: '100%' }}
                />
              </div>
            </div>

            <div className="stats-summary">
              <h3>关键统计</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">脉冲星发现</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">60+</div>
                  <div className="stat-label">快速射电暴</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">70+</div>
                  <div className="stat-label">高水平论文</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15</div>
                  <div className="stat-label">合作国家</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Discovery Detail Modal */}
      {selectedDiscovery && (
        <div className="modal-overlay" onClick={() => setSelectedDiscovery(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedDiscovery.name}</h2>
              <button 
                className="modal-close"
                onClick={() => setSelectedDiscovery(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="discovery-details">
                <div className="detail-grid">
                  <div className="detail-item">
                    <strong>自转周期:</strong> {selectedDiscovery.period} 秒
                  </div>
                  <div className="detail-item">
                    <strong>距离:</strong> {selectedDiscovery.distance.toLocaleString()} 光年
                  </div>
                  <div className="detail-item">
                    <strong>赤经:</strong> {selectedDiscovery.ra}
                  </div>
                  <div className="detail-item">
                    <strong>赤纬:</strong> {selectedDiscovery.dec}
                  </div>
                  <div className="detail-item">
                    <strong>流量密度:</strong> {selectedDiscovery.flux} mJy
                  </div>
                  <div className="detail-item">
                    <strong>脉冲宽度:</strong> {selectedDiscovery.width} ms
                  </div>
                </div>
                <div className="detail-description">
                  <h4>科学意义</h4>
                  <p>{selectedDiscovery.significance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .discoveries-page {
          padding: 2rem 0;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 2rem;
          padding-right: 2rem;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: #94A3B8;
          max-width: 600px;
          margin: 0 auto;
        }

        .tab-navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          color: #94A3B8;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          font-weight: 500;
        }

        .tab-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .tab-button.active {
          background: linear-gradient(45deg, #00D4FF, #20B2AA);
          color: #0B1426;
          font-weight: 600;
        }

        .tab-content {
          min-height: 500px;
        }

        .discovery-section h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          text-align: center;
          font-size: 1.1rem;
          color: #94A3B8;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .discoveries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .discovery-card {
          padding: 2rem;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .discovery-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .discovery-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .discovery-header h3 {
          font-size: 1.3rem;
          color: #00D4FF;
          margin: 0;
        }

        .discovery-date {
          font-size: 0.9rem;
          color: #94A3B8;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
        }

        .discovery-properties {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .property {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .property-label {
          font-size: 0.9rem;
          color: #94A3B8;
        }

        .property-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: #FFD700;
        }

        .discovery-significance {
          font-size: 0.95rem;
          color: #E2E8F0;
          line-height: 1.5;
          font-style: italic;
        }

        .frb-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .frb-card {
          padding: 2rem;
          border-radius: 16px;
        }

        .frb-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .frb-header h3 {
          font-size: 1.4rem;
          color: #FF6B35;
          margin: 0;
        }

        .frb-type {
          background: linear-gradient(45deg, #FF6B35, #FF1493);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .frb-properties {
          margin-bottom: 1.5rem;
        }

        .property-row {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .property-row:last-child {
          border-bottom: none;
        }

        .property-row span:first-child {
          color: #94A3B8;
        }

        .property-row span:last-child {
          color: #E2E8F0;
          font-weight: 600;
        }

        .frb-significance {
          font-size: 0.95rem;
          color: #E2E8F0;
          line-height: 1.5;
          font-style: italic;
        }

        .frb-insights {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 3rem;
        }

        .frb-insights h3 {
          color: #FFD700;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .insights-list {
          list-style: none;
          padding: 0;
        }

        .insights-list li {
          padding: 0.8rem 0;
          padding-left: 2rem;
          position: relative;
          color: #E2E8F0;
          line-height: 1.5;
        }

        .insights-list li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #00D4FF;
        }

        .charts-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .chart-wrapper {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
        }

        .stats-summary {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }

        .stats-summary h3 {
          color: #FFD700;
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
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
          font-size: 1rem;
          color: #94A3B8;
          font-weight: 500;
        }

        .modal-overlay {
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

        .modal-content {
          max-width: 600px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          border-radius: 16px;
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 2rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-header h2 {
          color: #00D4FF;
          margin: 0;
          font-size: 1.5rem;
        }

        .modal-close {
          background: none;
          border: none;
          color: #94A3B8;
          font-size: 2rem;
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

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #F8FAFC;
        }

        .modal-body {
          padding: 1rem 2rem 2rem;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .detail-item {
          padding: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          font-size: 0.95rem;
        }

        .detail-item strong {
          color: #FFD700;
          display: block;
          margin-bottom: 0.3rem;
        }

        .detail-description h4 {
          color: #FFD700;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .detail-description p {
          color: #E2E8F0;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .discoveries-page {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .tab-navigation {
            flex-direction: column;
            align-items: center;
          }

          .tab-button {
            width: 200px;
          }

          .discovery-section h2 {
            font-size: 2rem;
          }

          .discoveries-grid {
            grid-template-columns: 1fr;
          }

          .frb-showcase {
            grid-template-columns: 1fr;
          }

          .charts-container {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .modal-content {
            margin: 1rem;
            max-height: 90vh;
          }

          .detail-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Discoveries;