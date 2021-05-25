const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#2f54eb', 
              '@layout-header-background': '#ffffff',
              '@layout-header-padding': '0',
              '@link-color': '@black'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};