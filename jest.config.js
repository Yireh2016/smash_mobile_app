module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.js'],
  collectCoverageFrom: ['<rootDir>/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 15,
      functions: 9,
      lines: 12,
      statements: 12,
    },
  },
  maxWorkers: 2,
};
