// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleNameMapper: {
    '^@/atoms/(.*)$': '<rootDir>/components/atoms/$1',
    '^@/molecules/(.*)$': '<rootDir>/components/molecules/$1',
    '^@/organisms/(.*)$': '<rootDir>/components/organisms/$1',
    '^@/templates/(.*)$': '<rootDir>/components/templates/$1',
    '^@/helpers/(.*)$': '<rootDir>/../packages/src/helpers/$1',
    '^@/constants/(.*)$': '<rootDir>/..packages/src/constants/$1',
    '^@/ui/(.*)$': '<rootDir>/src/ui/$1',
    '^@/recoil/(.*)$': '<rootDir>/src/recoil/$1',
    '^@/config/(.*)$': '<rootDir>/src/config/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/graphql/(.*)$': '<rootDir>/graphql/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
