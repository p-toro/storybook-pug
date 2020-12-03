const path = require('path')

module.exports = {
  'stories': [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  'addons': [
    '@storybook/addon-viewport'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          'pug-plain-loader',
        ],
        include: path.resolve(__dirname, '../'),
      },
    );
    return config;
  }
};
