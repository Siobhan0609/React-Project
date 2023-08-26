const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.scss',   // 入口SCSS文件
  output: {
    filename: 'main.css',     // 输出CSS文件名
    path: path.resolve(__dirname, 'dist')  // 输出路径
  },
  module: {
    rules: [
      {
        test: /\.scss$/,         // 匹配SCSS文件
        use: [
          'style-loader',        // 将CSS注入到DOM中
          'css-loader',          // 解析CSS
          'sass-loader'          // 编译SCSS为CSS
        ]
      }
    ]
  }
};
