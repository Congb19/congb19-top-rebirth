const fs = require('fs');
const path = require('path');

const srcDir = path.resolve('.output/public');
const destDir = path.resolve('github_pages');

// 清空或创建目标目录
fs.rmSync(destDir, { recursive: true, force: true });
fs.mkdirSync(destDir, { recursive: true });

// 复制 srcDir 下所有内容（非隐藏文件）
if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
} else {
  console.warn(`Source directory not found: ${srcDir}`);
}