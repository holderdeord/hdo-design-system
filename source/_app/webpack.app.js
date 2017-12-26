const webpack = require('webpack');

const {getIfUtils} = require('webpack-config-utils');

module.exports = env => {
  const {ifProd, ifDev} = getIfUtils(env);

  const app = {
    //Custom webpack configuration goes here
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: 'popper.js'
        // bootstrap: 'bootstrap-sass'
      })
    ]
  };
  return app;
};