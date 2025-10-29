import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '科学探索',
      links: [
        { name: '脉冲星发现', href: '/discoveries' },
        { name: '快速射电暴', href: '/discoveries' },
        { name: '中性氢巡天', href: '/discoveries' },
        { name: '引力波探测', href: '/discoveries' }
      ]
    },
    {
      title: '技术创新',
      links: [
        { name: 'FAST结构', href: '/technology' },
        { name: '工作原理', href: '/technology' },
        { name: '性能参数', href: '/technology' },
        { name: '国际对比', href: '/technology' }
      ]
    },
    {
      title: '项目背景',
      links: [
        { name: '建设历程', href: '/about' },
        { name: '南仁东团队', href: '/about' },
        { name: '国际合作', href: '/about' },
        { name: '未来展望', href: '/about' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', href: 'https://github.com/xvlincaigou/FAST' },
    { name: '微博', icon: '📱', href: 'https://www.weibo.com/u/6443805249?tabtype=album' },
    { name: '邮箱', icon: '📧', href: 'mailto:l-xu22@mails.tsinghua.edu.cn' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <div className="footer-logo">
            <div className="logo-icon">🔭</div>
            <div className="logo-text">
              <span className="logo-main">中国天眼</span>
              <span className="logo-sub">FAST</span>
            </div>
          </div>
          <p className="footer-description">
            探索宇宙深处的奥秘，聆听来自百亿光年之外的宇宙回响。
            中国天眼FAST，人类探索宇宙的重要窗口。
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-link"
                aria-label={social.name}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {footerSections.map((section, index) => (
          <div key={index} className="footer-section">
            <h4 className="section-title">{section.title}</h4>
            <ul className="section-links">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © {currentYear} 宇宙中的中国天眼. 探索无限，科学无界.
          </div>
          <div className="footer-links">
            <a href="#" className="footer-bottom-link">隐私政策</a>
            <a href="#" className="footer-bottom-link">使用条款</a>
            <a href="#" className="footer-bottom-link">联系我们</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0B1426 0%, #1A0B2E 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 4rem 0 0;
          margin-top: 4rem;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00D4FF, transparent);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
        }

        .footer-section {
          position: relative;
          z-index: 2;
        }

        .footer-section.about {
          padding-right: 2rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
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
          font-size: 1.3rem;
          font-weight: 700;
          background: linear-gradient(45deg, #FFD700, #00D4FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-sub {
          font-size: 0.8rem;
          color: #94A3B8;
          letter-spacing: 2px;
        }

        .footer-description {
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          text-decoration: none;
          color: #E2E8F0;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .social-icon {
          font-size: 1.2rem;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #FFD700;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, #00D4FF, #FFD700);
          border-radius: 1px;
        }

        .section-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .section-links li {
          margin-bottom: 0.8rem;
        }

        .footer-link {
          color: #94A3B8;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          position: relative;
        }

        .footer-link:hover {
          color: #00D4FF;
          transform: translateX(5px);
        }

        .footer-link::before {
          content: '▶';
          position: absolute;
          left: -15px;
          opacity: 0;
          transition: all 0.3s ease;
          color: #00D4FF;
        }

        .footer-link:hover::before {
          opacity: 1;
          left: -10px;
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 3rem;
          padding: 1.5rem 0;
        }

        .footer-bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          color: #94A3B8;
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-bottom-link {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #00D4FF;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1rem;
          }

          .footer-section.about {
            padding-right: 0;
          }

          .social-links {
            justify-content: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            padding: 0 1rem;
          }

          .footer-links {
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;