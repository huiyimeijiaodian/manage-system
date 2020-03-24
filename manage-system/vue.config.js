const path = require("path");

module.exports = {
  // 基本路径
  // publicPath:process.env.NODE_ENV === "production" ? "/" : "./",
  // 输出文件目录
  outputDir: "dist",
  // webpack-dev-server 相关配置
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "vueStatic",
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    open: process.platform === "darwin",
    proxy: "http://ben.kefu.youban.com:80",
    // {
    //   // 设置代理
    //   // proxy all requests starting with /api to jsonplaceholder
    //   "/pay": {
    //     target: "https://testxblpay.youban.com", //真实请求的目标地址
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/pay": ""
    //     }
    //   }
    // },
    before: () => {}
  },
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
    }

    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          "@": path.resolve(__dirname, "./src"),
          "@c": path.resolve(__dirname, "./src/components")
        }
      }
    });
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/mixin.scss";
        `
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
