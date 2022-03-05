// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  // jest.setup.jsを作成する場合のみ定義。
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    '^@/atoms/(.*)$': '<rootDir>/components/atoms/$1',
    '^@/molecules/(.*)$': '<rootDir>/components/molecules/$1',
    '^@/organisms/(.*)$': '<rootDir>/components/organisms/$1',
    '^@/templates/(.*)$': '<rootDir>/components/templates/$1',
    '^@/ui/(.*)$': '<rootDir>/src/ui/$1',
    '^@/helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@/recoil/(.*)$': '<rootDir>/src/recoil/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
