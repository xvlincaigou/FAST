import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const Technology = () => {
  const [activeSection, setActiveSection] = useState('structure');
  const [animationStep, setAnimationStep] = useState(0);

  // Technology specifications
  const specifications = [
    {
      category: '基本参数',
      items: [
        { label: '口径直径', value: '500米', icon: '⚪' },
        { label: '反射面面积', value: '25万平方米', icon: '🎯' },
        { label: '索网结构', value: '6670根钢索', icon: '🕸️' },
        { label: '反射面单元', value: '4450块', icon: '🧩' }
      ]
    },
    {
      category: '性能指标',
      items: [
        { label: '观测频段', value: '70MHz - 3GHz', icon: '📡' },
        { label: '灵敏度', value: '比Arecibo高2.5倍', icon: '🔍' },
        { label: '指向精度', value: '4角秒', icon: '🎯' },
        { label: '观测范围', value: '天顶角40°', icon: '🌌' }
      ]
    },
    {
      category: '创新技术',
      items: [
        { label: '主动反射面', value: '实时变形控制', icon: '🔧' },
        { label: '馈源舱系统', value: '6索并联驱动', icon: '🎪' },
        { label: '测量系统', value: '全天候高精度', icon: '📏' },
        { label: '控制精度', value: '毫米级定位', icon: '⚡' }
      ]
    }
  ];

  // Comparison data with other telescopes
  const telescopeComparison = {
    telescopes: ['FAST', 'Arecibo', 'Effelsberg', 'Parkes'],
    diameter: [500, 350, 100, 64],
    sensitivity: [100, 40, 15, 8],
    frequencyRange: [
      '70MHz-3GHz',
      '300MHz-10GHz', 
      '300MHz-95GHz',
      '100MHz-100GHz'
    ]
  };

  // ECharts option for telescope comparison
  const comparisonChartOption = {
    title: {
      text: '世界主要射电望远镜对比',
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
      data: ['口径直径(米)', '相对灵敏度'],
      textStyle: {
        color: '#94A3B8'
      }
    },
    xAxis: {
      type: 'category',
      data: telescopeComparison.telescopes,
      axisLine: {
        lineStyle: {
          color: '#94A3B8'
        }
      },
      axisLabel: {
        color: '#94A3B8'
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '直径(米)',
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
      {
        type: 'value',
        name: '灵敏度',
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
      }
    ],
    series: [
      {
        name: '口径直径(米)',
        type: 'bar',
        data: telescopeComparison.diameter,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#00D4FF' },
              { offset: 1, color: '#20B2AA' }
            ]
          }
        }
      },
      {
        name: '相对灵敏度',
        type: 'line',
        yAxisIndex: 1,
        data: telescopeComparison.sensitivity,
        itemStyle: {
          color: '#FFD700'
        },
        lineStyle: {
          color: '#FFD700'
        }
      }
    ]
  };

  // Working principle animation steps
  const animationSteps = [
    {
      title: '1. 信号接收',
      description: '来自宇宙深处的射电信号到达FAST反射面',
      image: '/fast-technical-diagram.png'
    },
    {
      title: '2. 信号聚焦',
      description: '500米反射面将微弱信号聚焦到馈源舱',
      image: '/fast-technical-diagram.png'
    },
    {
      title: '3. 信号处理',
      description: '馈源舱接收信号并进行初步处理',
      image: '/fast-technical-diagram.png'
    },
    {
      title: '4. 数据分析',
      description: '地面系统对信号进行深入分析和处理',
      image: '/fast-technical-diagram.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % animationSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [animationSteps.length]);

  const sections = [
    { id: 'structure', name: '望远镜结构', icon: '🔭' },
    { id: 'principle', name: '工作原理', icon: '⚙️' },
    { id: 'innovation', name: '技术创新', icon: '💡' },
    { id: 'performance', name: '性能对比', icon: '📊' }
  ];

  return (
    <div className="technology-page">
      <div className="page-header">
        <h1 className="page-title">技术创新</h1>
        <p className="page-subtitle">
          了解中国天眼FAST的先进技术和创新设计
        </p>
      </div>

      {/* Section Navigation */}
      <div className="section-navigation">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`section-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="section-icon">{section.icon}</span>
            <span className="section-name">{section.name}</span>
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div className="section-content">
        {activeSection === 'structure' && (
          <div className="tech-section">
            <h2>望远镜结构</h2>
            <p className="section-description">
              FAST是世界上最大的单口径球面射电望远镜，其独特的结构设计突破了传统望远镜的技术限制。
            </p>

            <div className="structure-showcase">
              <div className="structure-image">
                <img src="/fast-technical-diagram.png" alt="FAST结构示意图" />
              </div>
              
              <div className="structure-details">
                <h3>主要组成部分</h3>
                <div className="components-grid">
                  <div className="component-item">
                    <div className="component-icon">🔘</div>
                    <div className="component-info">
                      <h4>主动反射面</h4>
                      <p>由4450块反射面单元组成，可实时调整形状</p>
                    </div>
                  </div>
                  <div className="component-item">
                    <div className="component-icon">🎪</div>
                    <div className="component-info">
                      <h4>馈源舱系统</h4>
                      <p>重达30吨，通过6根钢索精确定位在140米高空</p>
                    </div>
                  </div>
                  <div className="component-item">
                    <div className="component-icon">🕸️</div>
                    <div className="component-info">
                      <h4>索网结构</h4>
                      <p>6670根钢索编织成复杂的网状支撑结构</p>
                    </div>
                  </div>
                  <div className="component-item">
                    <div className="component-icon">🏗️</div>
                    <div className="component-info">
                      <h4>支撑塔架</h4>
                      <p>6座百米高的钢塔，确保整体结构稳定</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="specifications">
              {specifications.map((category, index) => (
                <div key={index} className="spec-category glass-card">
                  <h3 className="category-title">{category.category}</h3>
                  <div className="spec-items">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="spec-item">
                        <div className="spec-icon">{item.icon}</div>
                        <div className="spec-info">
                          <div className="spec-label">{item.label}</div>
                          <div className="spec-value">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'principle' && (
          <div className="tech-section">
            <h2>工作原理</h2>
            <p className="section-description">
              FAST通过接收来自宇宙深处的微弱射电信号，为天文学家提供前所未有的观测能力。
            </p>

            <div className="principle-showcase">
              <div className="animation-viewer">
                <div className="animation-header">
                  <h3>{animationSteps[animationStep].title}</h3>
                  <div className="animation-controls">
                    {animationSteps.map((_, index) => (
                      <button
                        key={index}
                        className={`step-indicator ${index === animationStep ? 'active' : ''}`}
                        onClick={() => setAnimationStep(index)}
                      />
                    ))}
                  </div>
                </div>
                <div className="animation-content">
                  <img 
                    src={animationSteps[animationStep].image} 
                    alt={animationSteps[animationStep].title}
                    className="principle-diagram"
                  />
                  <p className="animation-description">
                    {animationSteps[animationStep].description}
                  </p>
                </div>
              </div>

              <div className="principle-details">
                <h3>关键技术原理</h3>
                <div className="principle-list">
                  <div className="principle-item">
                    <h4>射电信号接收</h4>
                    <p>接收来自脉冲星、星系、快速射电暴等天体发出的微弱射电信号</p>
                  </div>
                  <div className="principle-item">
                    <h4>信号聚焦放大</h4>
                    <p>500米反射面将信号聚焦到馈源舱，实现信号的集中和放大</p>
                  </div>
                  <div className="principle-item">
                    <h4>数字化处理</h4>
                    <p>将模拟信号转换为数字信号，进行频谱分析和数据处理</p>
                  </div>
                  <div className="principle-item">
                    <h4>科学数据分析</h4>
                    <p>通过专业软件分析信号特征，提取天体物理信息</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'innovation' && (
          <div className="tech-section">
            <h2>技术创新</h2>
            <p className="section-description">
              FAST在设计和建造过程中实现了多项技术突破，创造了多个世界之最。
            </p>

            <div className="innovations-showcase">
              <div className="innovation-card glass-card">
                <div className="innovation-header">
                  <div className="innovation-icon">🎯</div>
                  <h3>主动反射面技术</h3>
                </div>
                <div className="innovation-content">
                  <p>
                    世界首创的主动反射面技术，通过2200多台液压缸实时调整4450块反射面单元的形状，
                    将500米球面在观测方向形成300米口径的瞬时抛物面，实现了大口径和高精度的完美结合。
                  </p>
                  <div className="innovation-stats">
                    <div className="stat">
                      <span className="stat-number">2200+</span>
                      <span className="stat-label">液压执行器</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">4450</span>
                      <span className="stat-label">反射面单元</span>
                    </div>
                    <div className="stat">
                      <span class="stat-number">5mm</span>
                      <span class="stat-label">定位精度</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="innovation-card glass-card">
                <div className="innovation-header">
                  <div className="innovation-icon">🎪</div>
                  <h3>轻型馈源舱系统</h3>
                </div>
                <div className="innovation-content">
                  <p>
                    创新的轻型索驱动并联机器人技术，将重达30吨的馈源舱通过6根钢索悬挂在140米高空，
                    实现了毫米级的精确定位，相比传统结构重量减轻了90%以上。
                  </p>
                  <div className="innovation-stats">
                    <div className="stat">
                      <span className="stat-number">30吨</span>
                      <span className="stat-label">馈源舱重量</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">140m</span>
                      <span className="stat-label">悬挂高度</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">10mm</span>
                      <span className="stat-label">定位精度</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="innovation-card glass-card">
                <div className="innovation-header">
                  <div className="innovation-icon">📏</div>
                  <h3>全天候测量系统</h3>
                </div>
                <div className="innovation-content">
                  <p>
                    针对贵州多雨多雾的气候条件，开发了基于卫星定位、惯导和激光全站仪融合的测量系统，
                    实现了全天候高精度测量和控制，确保望远镜在各种天气条件下都能正常运行。
                  </p>
                  <div className="innovation-stats">
                    <div className="stat">
                      <span className="stat-number">24/7</span>
                      <span className="stat-label">全天候运行</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">4角秒</span>
                      <span className="stat-label">指向精度</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">5300+</span>
                      <span className="stat-label">年观测时长</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="innovation-card glass-card">
                <div className="innovation-header">
                  <div className="innovation-icon">🔬</div>
                  <h3>超高耐疲劳钢索</h3>
                </div>
                <div className="innovation-content">
                  <p>
                    专门研制的超高耐疲劳钢索，在200万次循环加载条件下可达到500MPa应力幅，
                    这一性能指标在国际上尚无先例，确保了望远镜结构的安全性和可靠性。
                  </p>
                  <div className="innovation-stats">
                    <div className="stat">
                      <span className="stat-number">200万</span>
                      <span className="stat-label">循环次数</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">500MPa</span>
                      <span className="stat-label">应力幅</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">6670</span>
                      <span className="stat-label">钢索数量</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'performance' && (
          <div className="tech-section">
            <h2>性能对比</h2>
            <p className="section-description">
              FAST在灵敏度、观测范围等多个关键性能指标上领先世界，为射电天文学研究提供了前所未有的观测能力。
            </p>

            <div className="performance-showcase">
              <div className="chart-container">
                <ReactECharts 
                  option={comparisonChartOption} 
                  style={{ height: '500px', width: '100%' }}
                />
              </div>

              <div className="performance-highlights">
                <h3>性能优势</h3>
                <div className="highlight-list">
                  <div className="highlight-item">
                    <div className="highlight-icon">🏆</div>
                    <div className="highlight-content">
                      <h4>世界最大口径</h4>
                      <p>500米口径，比第二大的Arecibo望远镜大43%</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">⚡</div>
                    <div className="highlight-content">
                      <h4>最高灵敏度</h4>
                      <p>比世界第二大射电望远镜灵敏度高2.5倍以上</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🎯</div>
                    <div className="highlight-content">
                      <h4>精确指向</h4>
                      <p>4角秒的指向精度，确保精确观测目标天体</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🌌</div>
                    <div className="highlight-content">
                      <h4>广阔观测范围</h4>
                      <p>可观测137亿光年外的宇宙深处，接近宇宙边缘</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="performance-stats">
              <div className="stat-grid">
                <div className="stat-card glass-card">
                  <div className="stat-number">10-20年</div>
                  <div className="stat-label">技术领先期</div>
                  <div className="stat-desc">预计在未来10-20年内保持世界领先地位</div>
                </div>
                <div className="stat-card glass-card">
                  <div className="stat-number">5300+</div>
                  <div class="stat-label">年观测时长</div>
                  <div class="stat-desc">每年超过5300小时的稳定观测时间</div>
                </div>
                <div className="stat-card glass-card">
                  <div className="stat-number">70MHz</div>
                  <div className="stat-label">最低观测频率</div>
                  <div className="stat-desc">可观测低频射电信号，探测更遥远的宇宙</div>
                </div>
                <div className="stat-card glass-card">
                  <div className="stat-number">3000:1</div>
                  <div className="stat-label">信噪比提升</div>
                  <div className="stat-desc">相比传统望远镜的显著性能提升</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .technology-page {
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

        .section-navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .section-button {
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

        .section-button:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .section-button.active {
          background: linear-gradient(45deg, #00D4FF, #20B2AA);
          color: #0B1426;
          font-weight: 600;
        }

        .section-content {
          min-height: 500px;
        }

        .tech-section h2 {
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

        .structure-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .structure-image {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 16/10;
        }

        .structure-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .structure-details h3 {
          color: #FFD700;
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }

        .components-grid {
          display: grid;
          gap: 1.5rem;
        }

        .component-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .component-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
        }

        .component-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .component-info h4 {
          color: #00D4FF;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .component-info p {
          color: #94A3B8;
          line-height: 1.5;
          margin: 0;
        }

        .specifications {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .spec-category {
          padding: 2rem;
          border-radius: 16px;
        }

        .category-title {
          color: #FFD700;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .spec-items {
          display: grid;
          gap: 1rem;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }

        .spec-icon {
          font-size: 1.5rem;
        }

        .spec-label {
          font-size: 0.9rem;
          color: #94A3B8;
          margin-bottom: 0.3rem;
        }

        .spec-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: #00D4FF;
        }

        .principle-showcase {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .animation-viewer {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .animation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .animation-header h3 {
          color: #FFD700;
          font-size: 1.5rem;
          margin: 0;
        }

        .animation-controls {
          display: flex;
          gap: 0.5rem;
        }

        .step-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .step-indicator.active {
          background: linear-gradient(45deg, #00D4FF, #FFD700);
          transform: scale(1.3);
        }

        .animation-content {
          text-align: center;
        }

        .principle-diagram {
          width: 100%;
          max-width: 500px;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }

        .animation-description {
          color: #E2E8F0;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .principle-details h3 {
          color: #FFD700;
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }

        .principle-list {
          display: grid;
          gap: 1.5rem;
        }

        .principle-item {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border-left: 4px solid #00D4FF;
        }

        .principle-item h4 {
          color: #00D4FF;
          margin-bottom: 0.8rem;
          font-size: 1.2rem;
        }

        .principle-item p {
          color: #94A3B8;
          line-height: 1.5;
          margin: 0;
        }

        .innovations-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .innovation-card {
          padding: 2rem;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .innovation-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .innovation-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .innovation-icon {
          font-size: 2.5rem;
        }

        .innovation-header h3 {
          color: #00D4FF;
          margin: 0;
          font-size: 1.5rem;
        }

        .innovation-content p {
          color: #E2E8F0;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .innovation-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .stat {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #94A3B8;
          margin-top: 0.5rem;
        }

        .performance-showcase {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .chart-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .performance-highlights h3 {
          color: #FFD700;
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }

        .highlight-list {
          display: grid;
          gap: 1.5rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }

        .highlight-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .highlight-content h4 {
          color: #00D4FF;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .highlight-content p {
          color: #94A3B8;
          line-height: 1.5;
          margin: 0;
        }

        .performance-stats {
          margin-bottom: 3rem;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          padding: 2rem;
          text-align: center;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.2rem;
          color: #E2E8F0;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .stat-desc {
          font-size: 0.95rem;
          color: #94A3B8;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .technology-page {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .section-navigation {
            flex-direction: column;
            align-items: center;
          }

          .section-button {
            width: 200px;
          }

          .tech-section h2 {
            font-size: 2rem;
          }

          .structure-showcase,
          .principle-showcase,
          .performance-showcase {
            grid-template-columns: 1fr;
          }

          .innovations-showcase {
            grid-template-columns: 1fr;
          }

          .innovation-stats {
            grid-template-columns: 1fr;
          }

          .stat-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Technology;