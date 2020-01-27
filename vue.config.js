const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new ClosurePlugin({mode: 'AGGRESSIVE_BUNDLE'}, {
          // compiler flags here
          //
          // for debugging help, try these:
          //
          // formatting: 'PRETTY_PRINT'
          // debug: true,
          // renaming: false
        })
      ]
    }
  }
};
