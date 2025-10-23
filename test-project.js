// 项目结构测试脚本
const fs = require('fs');
const path = require('path');

console.log('🚀 测试中国天眼项目结构...\n');

// 检查关键文件是否存在
const requiredFiles = [
  'package.json',
  'public/index.html',
  'src/index.js',
  'src/App.js',
  'src/styles/globals.css',
  'src/components/Header.js',
  'src/components/Footer.js',
  'src/components/Hero.js',
  'src/components/StarField.js',
  'src/pages/Home.js',
  'src/pages/Discoveries.js',
  'src/pages/Technology.js',
  'src/pages/About.js'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} 存在`);
  } else {
    console.log(`❌ ${file} 不存在`);
    allFilesExist = false;
  }
});

// 检查图片资源
const imageFiles = [
  'public/hero-fast-cosmic.png',
  'public/pulsars-cosmic.png',
  'public/frb-burst-cosmic.png',
  'public/fast-technical-diagram.png',
  'public/milky-way-panorama.png',
  'public/fast-discoveries-timeline.png'
];

console.log('\n📸 检查图片资源...');

imageFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`✅ ${file} 存在 (${sizeKB}KB)`);
  } else {
    console.log(`❌ ${file} 不存在`);
    allFilesExist = false;
  }
});

// 检查package.json内容
console.log('\n📦 检查package.json配置...');
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
  const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  console.log(`✅ 项目名称: ${packageContent.name}`);
  console.log(`✅ 版本: ${packageContent.version}`);
  console.log(`✅ React版本: ${packageContent.dependencies.react}`);
  console.log(`✅ 主页: ${packageContent.homepage || '未设置'}`);
  
  // 检查关键依赖
  const keyDeps = ['react', 'react-dom', 'react-router-dom', 'animejs', 'echarts', 'three'];
  keyDeps.forEach(dep => {
    if (packageContent.dependencies[dep]) {
      console.log(`✅ ${dep}: ${packageContent.dependencies[dep]}`);
    } else {
      console.log(`❌ ${dep}: 未找到`);
      allFilesExist = false;
    }
  });
}

// 总结
console.log('\n📊 测试结果总结:');
if (allFilesExist) {
 console.log('🎉 所有关键文件都存在！项目结构完整。');
  console.log('\n📋 项目特点:');
  console.log('• 使用React 18构建的现代Web应用');
  console.log('• 集成Three.js实现3D星空效果');
  console.log('• 使用ECharts进行数据可视化');
  console.log('• 响应式设计，支持多设备');
  console.log('• 包含星空观测模拟器');
  console.log('• 完整的页面导航结构');
  console.log('• 自动生成的高质量图片资源');
} else {
  console.log('⚠️  部分文件缺失，请检查项目完整性。');
}

console.log('\n🚀 下一步操作建议:');
console.log('1. 运行 "npm install" 安装依赖');
console.log('2. 运行 "npm start" 启动开发服务器');
console.log('3. 运行 "npm run build" 构建生产版本');
console.log('4. 运行 "npm run deploy" 部署到GitHub Pages');

console.log('\n✨ 项目特色功能:');
console.log('• 动态星空背景效果');
console.log('• 交互式3D星空地图');
console.log('• 脉冲星数据可视化');
console.log('• 虚拟FAST导览体验');
console.log('• 科学发现时间线展示');
console.log('• 技术创新详细介绍');

process.exit(allFilesExist ? 0 : 1);