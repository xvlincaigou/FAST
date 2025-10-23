#!/bin/bash

# 中国天眼项目部署脚本

echo "🚀 开始部署中国天眼项目..."

# 检查Node.js和npm是否安装
if ! command -v node &> /dev/null; then
    echo "❌ Node.js未安装，请先安装Node.js"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm未安装，请先安装npm"
    exit 1
fi

# 检查Git是否安装
if ! command -v git &> /dev/null; then
    echo "❌ Git未安装，请先安装Git"
    exit 1
fi

echo "✅ 环境检查通过"

# 安装依赖
echo "📦 安装项目依赖..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

echo "✅ 依赖安装完成"

# 构建项目
echo "🔨 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 项目构建失败"
    exit 1
fi

echo "✅ 项目构建完成"

# 检查是否配置了GitHub仓库
if git remote get-url origin &> /dev/null; then
    echo "📡 检测到GitHub远程仓库"
    
    # 部署到GitHub Pages
    echo "🌐 部署到GitHub Pages..."
    npm run deploy
    
    if [ $? -ne 0 ]; then
        echo "❌ GitHub Pages部署失败"
        echo "请确保:"
        echo "1. 已在GitHub上创建仓库"
        echo "2. 已正确配置package.json中的homepage字段"
        echo "3. 已启用GitHub Pages功能"
        exit 1
    fi
    
    echo "✅ GitHub Pages部署完成"
    
    # 获取仓库信息
    REPO_URL=$(git remote get-url origin)
    echo "🌟 项目已成功部署！"
    echo "📍 仓库地址: $REPO_URL"
    echo "🌐 网站地址: https://$(git config user.name).github.io/$(basename $REPO_URL .git)"
    
else
    echo "⚠️  未检测到GitHub远程仓库"
    echo "请按以下步骤操作:"
    echo "1. 在GitHub上创建新仓库"
    echo "2. 运行: git remote add origin <your-repo-url>"
    echo "3. 运行: git push -u origin main"
    echo "4. 修改package.json中的homepage字段"
    echo "5. 重新运行此脚本"
fi

echo ""
echo "🎉 部署完成！"
echo "感谢使用中国天眼项目部署脚本"
echo "如有问题，请查看README.md或提交Issue"