const path = require('path')

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
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/helpers': path.resolve(__dirname, '../../packages/src/helpers'),
      '@/constants': path.resolve(__dirname, '../../packages/src/constants'),
      '@/hooks': path.resolve(__dirname, '../src/hooks'),
      '@/ui': path.resolve(__dirname, '../src/ui'),
      '@/recoil': path.resolve(__dirname, '../src/recoil'),
      '@/config': path.resolve(__dirname, '../src/config'),
      '@/graphql': path.resolve(__dirname, '../graphql'),
      '@/hooks': path.resolve(__dirname, '../src/hooks'),
      '@/hooks': path.resolve(__dirname, '../src/hooks'),
      '@/atoms': path.resolve(__dirname, '../components/atoms'),
      '@/molecules': path.resolve(__dirname, '../components/molecules'),
      '@/organisms': path.resolve(__dirname, '../components/organisms'),
      '@/templates': path.resolve(__dirname, '../components/templates'),
    }
    // StorybookとMUIのemotionのバージョンの違いを吸収
    // https://zenn.dev/enish/articles/ff678649ecb6d9
    delete config.resolve.alias['emotion-theming']
    delete config.resolve.alias['@emotion/styled']
    delete config.resolve.alias['@emotion/core']
    return config
  },
}
