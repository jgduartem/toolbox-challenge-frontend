
module.exports = {
  roots: ['<rootDir>/__tests__'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
};
