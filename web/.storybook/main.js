const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  // //  resolve tsconfig alias
  // webpackFinal: async config => {
  //   ;[].push.apply(config.resolve.plugins, [
  //     new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
  //   ])
  //   // StorybookとMUIのemotionのバージョンの違いを吸収
  //   // https://zenn.dev/enish/articles/ff678649ecb6d9
  //   delete config.resolve.alias['emotion-theming']
  //   delete config.resolve.alias['@emotion/styled']
  //   delete config.resolve.alias['@emotion/core']
  //   return config
  // },
}
