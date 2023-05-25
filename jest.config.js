/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: true,
  testEnvironment: "node",
  transformIgnorePatterns: [
    'node_modules/(?!(@adraffy/ens-normalize)/)',
  ],
  transform: {
    '^.+\\.(js|ts)$': '<rootDir>/jest-transformer.js',
  } 
  // testTimeout: 30000
  // clearMocks: true
};