module.exports = {

  chainWebpack: (config) => {

    /* 添加分析工具 */

    if (process.env.NODE_ENV === 'production') {

      config

        .plugin('webpack-bundle-analyzer')

        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)

    } else {

    }

  }

}
