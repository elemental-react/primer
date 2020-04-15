/* eslint-disable no-param-reassign */
const path = require('path');

// eslint-disable-next-line spaced-comment
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - wether the config is for a plugin command or a resource
 **/
module.exports = (config) => {
  /* you can change config here */
  config.module.rules[1].test = /^(?!.*\.(jsx?|tsx?|json|nib|md|mdx|xib|framework|xcodeproj|xcworkspace|xcworkspacedata|pbxproj)$).*/;

  config.module.rules.push({
    test: /\.(md|mdx)$/,
    exclude: /(node_modules|bower_components)/,
    use: ['babel-loader', 'mdx-loader-primitives'],
  });

  config.resolve = {
    ...config.resolve,
    extensions: [...config.resolve.extensions, '.jsx', '.md'],
    alias: {
      ...config.resolve.alias,
      'react': path.resolve(__dirname, './node_modules/react/'),
      'react-sketchapp': path.resolve(__dirname, './node_modules/react-sketchapp/'),
      'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
      'react-primitives-svg': path.resolve(__dirname, './node_modules/react-primitives-svg'),
    },
  };
};
