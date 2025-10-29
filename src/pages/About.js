import React, { useState, useEffect } from 'react';

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  // Timeline data based on real FAST history
  const timelineData = [
    {
      year: '1994',
      title: '项目构想',
      description: '南仁东提出建设中国大型射电望远镜的构想',
      details: '在日本担任客座教授的南仁东毅然回国，决心建造一个属于中国的大型射电望远镜。',
      image: `${process.env.PUBLIC_URL}/hero-fast-cosmic.png`,
      significance: '这一构想为中国天文学的发展指明了方向'
    },
    {
      year: '2001',
      title: '立项启动',
      description: 'FAST项目正式立项，开始可行性研究',
      details: '经过7年的前期研究，FAST项目获得国家批准，正式开始立项建设。',
      image: `${process.env.PUBLIC_URL}/fast-technical-diagram.png`,
      significance: '标志着中国大科学工程建设进入新阶段'
    },
    {
      year: '2011',
      title: '开工建设',
      description: 'FAST在贵州平塘正式开工建设',
      details: '2011年3月，FAST工程在贵州省平塘县大窝凼洼地正式开工建设。',
      image: `${process.env.PUBLIC_URL}/milky-way-panorama.png`,
      significance: '从概念设计转向工程实施的重要里程碑'
    },
    {
      year: '2016',
      title: '落成启用',
      description: 'FAST正式落成启用，习近平总书记发来贺信',
      details: '2016年9月25日，FAST正式落成启用，成为世界上最大的单口径射电望远镜。',
      image: `${process.env.PUBLIC_URL}/pulsars-cosmic.png`,
      significance: '中国在天文大科学装置领域实现重大突破'
    },
    {
      year: '2017',
      title: '首次发现',
      description: 'FAST发现首批脉冲星，实现零的突破',
      details: '2017年10月，FAST宣布发现2颗新脉冲星，距离地球分别约4100光年和1.6万光年。',
      image: `${process.env.PUBLIC_URL}/frb-burst-cosmic.png`,
      significance: '中国射电望远镜首次发现脉冲星，具有重要的里程碑意义'
    },
    {
      year: '2020',
      title: '通过国家验收',
      description: 'FAST顺利通过国家验收，正式开放运行',
      details: '2020年1月11日，FAST通过国家验收，各项指标达到或超过设计要求。',
      image: `${process.env.PUBLIC_URL}/fast-discoveries-timeline.png`,
      significance: '标志着FAST进入正式运行阶段'
    },
    {
      year: '2021',
      title: '全球开放',
      description: 'FAST向全球科学界开放，促进国际合作',
      details: '2021年3月31日，FAST正式向全球科学家开放观测申请。',
      image: `${process.env.PUBLIC_URL}/hero-fast-cosmic.png`,
      significance: '体现了中国科学家的开放合作精神'
    },
    {
      year: '2023',
      title: '成果丰硕',
      description: 'FAST取得系列重大科学发现',
      details: '截至2023年，FAST已发现超过1000颗脉冲星，在快速射电暴等领域取得重大突破。',
      image: `${process.env.PUBLIC_URL}/pulsars-cosmic.png`,
      significance: 'FAST进入成果爆发期，为人类认识宇宙作出重要贡献'
    }
  ];

  const teamMembers = [
    {
      name: '南仁东',
      title: 'FAST工程总工程师兼首席科学家',
      contribution: '项目发起人和总设计师，被誉为"中国天眼之父"',
      period: '1945-2017',
      achievements: [
        '提出FAST项目构想',
        '主持完成项目立项和可行性研究',
        '带领团队克服重重技术困难',
        '为中国天文学发展作出卓越贡献'
      ],
      image: `${process.env.PUBLIC_URL}/hero-fast-cosmic.png`
    },
    {
      name: '姜鹏',
      title: 'FAST运行和发展中心主任、总工程师',
      contribution: '负责FAST的运行维护和技术改进',
      period: '现任',
      achievements: [
        '确保FAST稳定高效运行',
        '推进技术创新和性能提升',
        '组织重大科学观测项目',
        '促进国际合作与交流'
      ],
      image: `${process.env.PUBLIC_URL}/fast-technical-diagram.png`
    }
  ];

  const internationalCooperation = {
    countries: 15,
    projects: 27,
    observationHours: 900,
    papers: 25
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timelineData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [timelineData.length]);

  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="page-title">关于项目</h1>
        <p className="page-subtitle">
          了解中国天眼FAST的建设历程、团队贡献和国际合作
        </p>
      </div>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="overview-content">
          <div className="overview-text">
            <h2>项目概述</h2>
            <p>
              五百米口径球面射电望远镜（FAST）是世界上最大的单口径射电望远镜，
              被誉为"中国天眼"。这个项目从1994年提出构想到2016年建成启用，
              历时22年，凝聚了几代中国天文学家和工程师的智慧和心血。
            </p>
            <p>
              FAST的建设不仅是中国科技实力的体现，更是人类探索宇宙奥秘的重要工具。
              它的建成使中国在天文观测领域走在了世界前列，为国际科学界提供了一个
              前所未有的观测平台。
            </p>
            <div className="key-stats">
              <div className="stat-item">
                <div className="stat-number">22年</div>
                <div className="stat-label">建设历程</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">11.5亿</div>
                <div className="stat-label">投资规模(元)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">参建单位</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">参建人员</div>
              </div>
            </div>
          </div>
          <div className="overview-image">
            <img src={`${process.env.PUBLIC_URL}/hero-fast-cosmic.png`} alt="FAST全景" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <h2>建设历程</h2>
        <p className="section-description">
          从构想到现实，FAST走过了一段艰辛而辉煌的历程
        </p>

        <div className="timeline-showcase">
          <div className="timeline-main">
            <div className="timeline-image">
              <img 
                src={timelineData[activeTimeline].image} 
                alt={timelineData[activeTimeline].title}
              />
              <div className="timeline-year">{timelineData[activeTimeline].year}</div>
            </div>
            
            <div className="timeline-content">
              <h3>{timelineData[activeTimeline].title}</h3>
              <p className="timeline-description">
                {timelineData[activeTimeline].description}
              </p>
              <p className="timeline-details">
                {timelineData[activeTimeline].details}
              </p>
              <div className="timeline-significance">
                <strong>重要意义：</strong>
                {timelineData[activeTimeline].significance}
              </div>
            </div>
          </div>

          <div className="timeline-navigation">
            {timelineData.map((_, index) => (
              <button
                key={index}
                className={`timeline-dot ${index === activeTimeline ? 'active' : ''}`}
                onClick={() => setActiveTimeline(index)}
              >
                <span className="dot-year">{timelineData[index].year}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <h2>功勋团队</h2>
        <p className="section-description">
          致敬为中国天眼付出辛勤努力的科学家们
        </p>

        <div className="team-showcase">
          {teamMembers.map((member, index) => (
            <div key={index} className="member-card glass-card">
              <div className="member-header">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <div className="member-title">{member.title}</div>
                  <div className="member-period">{member.period}</div>
                </div>
              </div>
              
              <div className="member-content">
                <p className="member-contribution">{member.contribution}</p>
                
                <div className="achievements">
                  <h4>主要贡献</h4>
                  <ul>
                    {member.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-tribute">
          <div className="tribute-content glass-card">
            <h3>南仁东精神</h3>
            <p>
              "美丽的宇宙太空，以它的神秘和绚丽，召唤我们踏过平庸，进入到无垠的广袤。"
              这是南仁东先生生前留下的诗句，也是FAST团队精神的最好诠释。
            </p>
            <p>
              从1994年到2017年，南仁东先生为FAST项目付出了23年的心血，
              从壮年走到暮年，最终将生命献给了这个伟大的科学工程。
              他的精神激励着每一位FAST团队成员，继续为人类探索宇宙的伟大事业而奋斗。
            </p>
          </div>
        </div>
      </section>

      {/* International Cooperation */}
      <section className="cooperation-section">
        <h2>国际合作</h2>
        <p className="section-description">
          FAST向世界开放，促进全球科学合作与交流
        </p>

        <div className="cooperation-stats">
          <div className="stats-grid">
            <div className="stat-card glass-card">
              <div className="stat-icon">🌍</div>
              <div className="stat-number">{internationalCooperation.countries}</div>
              <div className="stat-label">合作国家</div>
              <div className="stat-desc">
                包括美国、澳大利亚、荷兰、德国等15个国家的科研团队
              </div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">🔬</div>
              <div className="stat-number">{internationalCooperation.projects}</div>
              <div className="stat-label">合作项目</div>
              <div className="stat-desc">
                涵盖脉冲星、快速射电暴、中性氢等多个研究领域
              </div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-number">{internationalCooperation.observationHours}+</div>
              <div className="stat-label">观测小时</div>
              <div className="stat-desc">
                为国际团队提供充足的观测时间
              </div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">📄</div>
              <div className="stat-number">{internationalCooperation.papers}+</div>
              <div className="stat-label">合作论文</div>
              <div className="stat-desc">
                基于FAST数据发表的国际合作论文
              </div>
            </div>
          </div>
        </div>

        <div className="cooperation-principles">
          <h3>开放合作原则</h3>
          <div className="principles-grid">
            <div className="principle-item">
              <div className="principle-icon">🤝</div>
              <h4>平等互利</h4>
              <p>所有国家的科学家都可以申请使用FAST进行观测研究</p>
            </div>
            <div className="principle-item">
              <div className="principle-icon">📊</div>
              <h4>数据共享</h4>
              <p>观测数据按照国际惯例向科学界开放共享</p>
            </div>
            <div className="principle-item">
              <div className="principle-icon">🌟</div>
              <h4>科学优先</h4>
              <p>以科学目标为导向，促进重大科学发现</p>
            </div>
            <div className="principle-item">
              <div className="principle-icon">🚀</div>
              <h4>技术创新</h4>
              <p>与国际伙伴共同推进射电天文技术发展</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="future-section">
        <h2>未来展望</h2>
        <p className="section-description">
          FAST的发展前景和科学目标
        </p>

        <div className="future-showcase">
          <div className="future-goals">
            <h3>科学目标</h3>
            <div className="goals-list">
              <div className="goal-item">
                <div className="goal-icon">🌟</div>
                <div className="goal-content">
                  <h4>脉冲星研究</h4>
                  <p>发现更多脉冲星，构建更完整的脉冲星样本，为引力波探测提供支持</p>
                </div>
              </div>
              <div className="goal-item">
                <div className="goal-icon">⚡</div>
                <div className="goal-content">
                  <h4>快速射电暴</h4>
                  <p>深入研究快速射电暴的起源和物理机制，解开宇宙 mysteries</p>
                </div>
              </div>
              <div className="goal-item">
                <div className="goal-icon">🌌</div>
                <div className="goal-content">
                  <h4>中性氢巡天</h4>
                  <p>绘制更详细的银河系和近邻星系中性氢分布图</p>
                </div>
              </div>
              <div className="goal-item">
                <div className="goal-icon">🔭</div>
                <div className="goal-content">
                  <h4>星际分子</h4>
                  <p>搜索新的星际分子，研究宇宙化学演化</p>
                </div>
              </div>
            </div>
          </div>

          <div className="future-technologies">
            <h3>技术发展</h3>
            <div className="tech-list">
              <div className="tech-item">
                <h4>接收机升级</h4>
                <p>开发更先进的接收机系统，扩大观测频段范围</p>
              </div>
              <div className="tech-item">
                <h4>数据处理</h4>
                <p>提升数据处理能力和效率，应对海量观测数据</p>
              </div>
              <div className="tech-item">
                <h4>智能化运行</h4>
                <p>推进望远镜运行的智能化和自动化水平</p>
              </div>
              <div className="tech-item">
                <h4>系统集成</h4>
                <p>与其他天文设备协同观测，形成综合观测网络</p>
              </div>
            </div>
          </div>
        </div>

        <div className="future-vision">
          <div className="vision-content glass-card">
            <h3>愿景与使命</h3>
            <p>
              FAST不仅是中国科技的骄傲，更是全人类探索宇宙的重要工具。
              我们将继续秉承开放合作的理念，与全球科学家一道，
              用这只"中国天眼"探索宇宙的奥秘，为人类认识自然、
              理解宇宙作出更大的贡献。
            </p>
            <p>
              未来，FAST将继续在脉冲星计时、引力波探测、
              快速射电暴研究等前沿领域发挥关键作用，
              推动天文学和相关学科的跨越式发展。
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
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

        .project-overview {
          margin-bottom: 5rem;
        }

        .overview-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .overview-text h2 {
          font-size: 2.5rem;
          color: #FFD700;
          margin-bottom: 2rem;
        }

        .overview-text p {
          font-size: 1.1rem;
          color: #E2E8F0;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .key-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(45deg, #00D4FF, #FFD700);
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

        .overview-image {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 16/10;
        }

        .overview-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .timeline-section {
          margin-bottom: 5rem;
        }

        .timeline-section h2 {
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
        }

        .timeline-showcase {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 3rem;
          margin-bottom: 3rem;
        }

        .timeline-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 2rem;
        }

        .timeline-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 16/10;
        }

        .timeline-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .timeline-year {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(45deg, #00D4FF, #FFD700);
          color: #0B1426;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .timeline-content h3 {
          color: #00D4FF;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .timeline-description {
          font-size: 1.2rem;
          color: #E2E8F0;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .timeline-details {
          font-size: 1rem;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .timeline-significance {
          font-size: 0.95rem;
          color: #FFD700;
          font-style: italic;
          line-height: 1.5;
        }

        .timeline-navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .timeline-dot {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-dot:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .timeline-dot.active {
          background: linear-gradient(45deg, #00D4FF, #FFD700);
          border-color: #FFD700;
          transform: scale(1.2);
        }

        .dot-year {
          font-size: 0.8rem;
          font-weight: 700;
          color: inherit;
        }

        .timeline-dot.active .dot-year {
          color: #0B1426;
        }

        .team-section {
          margin-bottom: 5rem;
        }

        .team-section h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .team-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .member-card {
          padding: 2rem;
          border-radius: 16px;
        }

        .member-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .member-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .member-info h3 {
          color: #00D4FF;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .member-title {
          font-size: 1rem;
          color: #FFD700;
          margin-bottom: 0.3rem;
        }

        .member-period {
          font-size: 0.9rem;
          color: #94A3B8;
        }

        .member-content {
          margin-top: 1.5rem;
        }

        .member-contribution {
          font-size: 1.1rem;
          color: #E2E8F0;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .achievements h4 {
          color: #FFD700;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .achievements ul {
          list-style: none;
          padding: 0;
        }

        .achievements li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: #E2E8F0;
          line-height: 1.5;
        }

        .achievements li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: #00D4FF;
        }

        .team-tribute {
          margin-top: 3rem;
        }

        .tribute-content {
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
        }

        .tribute-content h3 {
          color: #FFD700;
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .tribute-content p {
          font-size: 1.1rem;
          color: #E2E8F0;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .cooperation-section {
          margin-bottom: 5rem;
        }

        .cooperation-section h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cooperation-stats {
          margin-bottom: 3rem;
        }

        .stats-grid {
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

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #00D4FF, #FFD700);
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
          margin-bottom: 1rem;
        }

        .stat-desc {
          font-size: 0.95rem;
          color: #94A3B8;
          line-height: 1.5;
        }

        .cooperation-principles {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 3rem;
        }

        .cooperation-principles h3 {
          color: #FFD700;
          font-size: 2rem;
          text-align: center;
          margin-bottom: 3rem;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .principle-item {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .principle-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.1);
        }

        .principle-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .principle-item h4 {
          color: #00D4FF;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .principle-item p {
          color: #E2E8F0;
          line-height: 1.6;
          margin: 0;
        }

        .future-section {
          margin-bottom: 5rem;
        }

        .future-section h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .future-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .future-goals h3,
        .future-technologies h3 {
          color: #FFD700;
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }

        .goals-list {
          display: grid;
          gap: 1.5rem;
        }

        .goal-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }

        .goal-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .goal-content h4 {
          color: #00D4FF;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .goal-content p {
          color: #E2E8F0;
          line-height: 1.5;
          margin: 0;
        }

        .tech-list {
          display: grid;
          gap: 1.5rem;
        }

        .tech-item {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border-left: 4px solid #FF6B35;
        }

        .tech-item h4 {
          color: #FF6B35;
          margin-bottom: 0.8rem;
          font-size: 1.2rem;
        }

        .tech-item p {
          color: #E2E8F0;
          line-height: 1.5;
          margin: 0;
        }

        .future-vision {
          margin-top: 3rem;
        }

        .vision-content {
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
        }

        .vision-content h3 {
          color: #FFD700;
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .vision-content p {
          font-size: 1.1rem;
          color: #E2E8F0;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .about-page {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .overview-content {
            grid-template-columns: 1fr;
          }

          .key-stats {
            grid-template-columns: 1fr;
          }

          .timeline-main {
            grid-template-columns: 1fr;
          }

          .team-showcase {
            grid-template-columns: 1fr;
          }

          .member-header {
            flex-direction: column;
            text-align: center;
          }

          .future-showcase {
            grid-template-columns: 1fr;
          }

          .principles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;