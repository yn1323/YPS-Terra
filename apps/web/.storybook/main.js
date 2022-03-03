const path = require('path')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  //  resolve tsconfig alias
  webpackFinal: async config => {
    ;[].push.apply(config.resolve.plugins, [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ])
    // StorybookとMUIのemotionのバージョンの違いを吸収
    // https://zenn.dev/enish/articles/ff678649ecb6d9
    delete config.resolve.alias['emotion-theming']
    delete config.resolve.alias['@emotion/styled']
    delete config.resolve.alias['@emotion/core']
    return config
  },
}
