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
  features: {
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    // StorybookとMUIのemotionのバージョンの違いを吸収
    // https://zenn.dev/enish/articles/ff678649ecb6d9
    delete config.resolve.alias['emotion-theming']
    delete config.resolve.alias['@emotion/styled']
    delete config.resolve.alias['@emotion/core']
    return config
  },
}
