# 宇宙中的中国天眼

一个展示中国天眼FAST射电望远镜科学发现和成就的交互式网站。

## 🌟 项目特色

- **沉浸式宇宙体验**: 深邃的宇宙背景和动态星空效果
- **交互式星空观测**: 3D星空模拟器，可探索FAST发现的脉冲星
- **数据可视化**: 使用ECharts展示FAST的科学成就数据
- **虚拟导览**: 360度虚拟参观FAST设施
- **响应式设计**: 完美适配桌面、平板和移动设备

## 🚀 技术栈

### 前端框架
- **React 18**: 现代化的用户界面构建
- **React Router**: 单页应用路由管理
- **React Hooks**: 状态管理和生命周期

### 视觉效果
- **Anime.js**: 流畅的动画效果
- **PIXI.js**: 高性能2D渲染
- **ECharts.js**: 数据可视化
- **shader-park**: 着色器效果

### 3D和物理
- **Three.js**: 3D图形渲染
- **Matter.js**: 物理引擎
- **p5.js**: 创意编程

### 样式和UI
- **Tailwind CSS**: 实用优先的CSS框架
- **CSS Modules**: 组件化样式管理

## 📁 项目结构

```
├── public/                     # 静态资源
│   ├── index.html             # 主HTML文件
│   ├── favicon.ico            # 网站图标
│   └── *.png                  # 生成的图片资源
├── src/
│   ├── components/            # React组件
│   │   ├── Header.js          # 导航头部
│   │   ├── Hero.js            # 英雄区域
│   │   ├── StarMap.js         # 星空观测模拟器
│   │   ├── DataVisualization.js # 数据可视化
│   │   ├── Timeline.js        # 时间线组件
│   │   ├── VirtualTour.js     # 虚拟导览
│   │   └── Footer.js          # 页脚
│   ├── pages/                 # 页面组件
│   │   ├── Home.js            # 首页
│   │   ├── Discoveries.js     # 发现页面
│   │   ├── Technology.js      # 技术页面
│   │   └── About.js           # 关于页面
│   ├── styles/                # 样式文件
│   │   ├── globals.css        # 全局样式
│   │   └── components.css     # 组件样式
│   ├── App.js                 # 主应用组件
│   └── index.js               # 应用入口
├── package.json               # 项目配置
└── README.md                  # 项目说明
```

## 🎯 主要功能

### 1. 星空观测模拟器
- 3D星空环境，展示FAST发现的脉冲星
- 交互式控制面板，调整观测参数
- 点击星体查看详细信息
- 实时数据显示和状态监控

### 2. 科学发现展示
- 脉冲星发现的详细信息和统计数据
- 快速射电暴研究的重要成果
- 交互式图表展示发现趋势
- 科学发现的时间线展示

### 3. 技术创新介绍
- FAST的结构和工作原理
- 与世界其他望远镜的性能对比
- 关键技术创新的详细介绍
- 虚拟导览体验

### 4. 项目历史回顾
- FAST建设历程的完整时间线
- 功勋科学家团队的介绍
- 国际合作项目的统计
- 未来发展愿景

## 🎨 设计特色

### 视觉风格
- **深邃宇宙**: 采用深邃的宇宙色调配色方案
- **科技感**: 融合现代科技美学设计
- **中国风**: 巧妙融入中国传统文化元素
- **动态效果**: 丰富的动画和交互效果

### 配色方案
- **主色调**: 深邃宇宙蓝 (#0B1426) 和星空紫 (#1A0B2E)
- **辅助色**: 银河白 (#F8FAFC) 和星光金 (#FFD700)
- **强调色**: 脉冲星蓝 (#00D4FF) 和射电暴橙 (#FF6B35)

### 字体设计
- **标题字体**: Noto Serif SC (衬线体，体现庄重感)
- **正文字体**: Noto Sans SC (无衬线体，确保可读性)
- **特殊字体**: ZCOOL XiaoWei (用于装饰性标题)

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```

### 构建生产版本
```bash
npm run build
```

### 部署到GitHub Pages
```bash
npm run deploy
```

## 📱 响应式设计

网站采用响应式设计，完美适配各种设备：

- **桌面端**: 宽屏沉浸式体验，充分利用横向空间
- **平板端**: 适配中等屏幕，保持核心交互功能
- **移动端**: 垂直布局优化，简化交互复杂度

## 🔧 自定义配置

### 修改主题色彩
在 `src/styles/globals.css` 中修改CSS变量：

```css
:root {
  --cosmic-blue: #0B1426;
  --space-purple: #1A0B2E;
  --galaxy-white: #F8FAFC;
  --star-gold: #FFD700;
  --pulsar-blue: #00D4FF;
  --burst-orange: #FF6B35;
  --nebula-pink: #FF1493;
  --cosmic-teal: #20B2AA;
}
```

### 添加新页面
1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.js` 中添加路由配置
3. 在 `src/components/Header.js` 中添加导航链接

### 自定义星空数据
在 `src/components/StarMap.js` 中修改 `pulsars` 数组：

```javascript
const pulsars = [
  {
    name: 'PSR J1859-01',
    ra: 284.75,
    dec: -1.23,
    distance: 4100,
    period: 0.59,
    color: 0x00D4FF
  },
  // 添加更多脉冲星数据...
];
```

## 📊 数据来源

网站中的科学数据来源于：
- 中国科学院国家天文台官方发布
- FAST运行和发展中心
- 《自然》、《科学》等顶级期刊论文
- 国际天文学联合会(IAU)数据库

## 🌐 浏览器兼容性

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

### 开发规范
- 使用ES6+语法
- 遵循React最佳实践
- 保持代码风格一致
- 添加适当的注释

## 📄 许可证

本项目采用 MIT 许可证。

## 🙏 致谢

- 中国科学院国家天文台FAST团队
- 南仁东先生及其科研团队
- 所有为FAST项目做出贡献的科学家和工程师
- 开源社区提供的优秀工具和库

## 📞 联系我们

如有问题或建议，欢迎通过以下方式联系：
- 提交 GitHub Issue
- 发送邮件至项目维护者

---

**探索无限，科学无界** 🌌

*用中国天眼，探索宇宙奥秘*