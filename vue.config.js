module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#66a1ab',
            'link-color': '#66a1ab',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
      // scss: {
      //   additionalData: `
      //     @import "@/styles/_variables.scss";
      //   `,
      // },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('routes-yaml')
      .test(/routes\.yaml$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-router-loader-yaml')
      .loader('vue-router-loader-yaml')
      .end();
  },

  runtimeCompiler: true,

  devServer: {
    proxy: {
      '': {
        target: 'http://localhost:3000',
        ws: true
        // changeOrigin: true
      }
    }
  }
};
