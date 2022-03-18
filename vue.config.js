"use strict";
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");
// const defaultSettings = require("./src/settings.js");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// const name = defaultSettings.title || "vue Admin Template"; // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9528; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: "/",
  outputDir: "chiline",
  assetsDir: "static",
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8082,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    //before: require("./mock/mock-server.js")
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    // plugins: [
    //   new PrerenderSPAPlugin({
    //       // 生成文件的路径，也可以与webpakc打包的一致。
    //       // 下面这句话非常重要！！！
    //       // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
    //       staticDir: path.join(__dirname,'chiline'),
    //       // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
    //       routes: ['/', '/home','/brand','/honor','/patents'],
    //       // 这个很重要，如果没有配置这段，也不会进行预编译
    //       renderer: new Renderer({
    //           inject: {
    //               foo: 'bar'
    //           },
    //           headless: false,
    //           // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
    //           renderAfterDocumentEvent: 'render-event'
    //       })
    //   }),
    // ],
  },
  chainWebpack(config) {
    config.plugin("html").tap((args) => {
      args[0].title = "Chiline";
      return args;
    });
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial",
      },
    ]);

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete("prefetch");

    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    // config.when(process.env.NODE_ENV !== "development", (config) => {
    //   config
    //     .plugin("ScriptExtHtmlWebpackPlugin")
    //     .after("html")
    //     .use("script-ext-html-webpack-plugin", [
    //       {
    //         // `runtime` must same as runtimeChunk name. default is `runtime`
    //         inline: /runtime\..*\.js$/,
    //       },
    //     ])
    //     .end();
    //   config.optimization.splitChunks({
    //     chunks: "all",
    //     cacheGroups: {
    //       libs: {
    //         name: "chunk-libs",
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: 10,
    //         chunks: "initial", // only package third parties that are initially dependent
    //       },
    //       elementUI: {
    //         name: "chunk-elementUI", // split elementUI into a single package
    //         priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //         test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
    //       },
    //       commons: {
    //         name: "chunk-commons",
    //         test: resolve("src/components"), // can customize your rules
    //         minChunks: 3, //  minimum common number
    //         priority: 5,
    //         reuseExistingChunk: true,
    //       },
    //     },
    //   });
    //   // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
    //   config.optimization.runtimeChunk("single");
    // });
  },
};
