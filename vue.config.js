// src目录别名设置
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  assetsDir: "./",
  publicPath: "./",
  outputDir: 'dist',
  // outputDir: process.env.outputDir || "dist",
  // filenameHashing:true,
  chainWebpack: config => {
    config.resolve.alias
      .set("css", resolve("src/assets/css"))
      .set("img", resolve("src/assets/img"));
  }
};
