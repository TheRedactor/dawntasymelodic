module.exports = {
  publicPath: '/app.html/', // ✅ Ensures all routes are under app.html
  outputDir: 'dist',
  assetsDir: 'assets',

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },

  pages: {
    index: {
      entry: 'src/main.ts',
      filename: 'app.html', // ✅ Generates app.html instead of index.html
      title: 'Dawntasy AI'
    }
  },

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('copy').tap(args => {
        args[0].push({
          from: 'public/404.html',
          to: '404.html'
        });
        return args;
      });
    }
  }
};