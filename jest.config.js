const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '@/rc/pages/(.*)$': '<rootDir>/pages/$1',
  },

  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(config);
