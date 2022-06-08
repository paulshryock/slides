module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
    'src/app.js': {
      statements: 90,
      branches: 100,
      functions: 50,
      lines: 90,
    },
  },
  rootDir: '../',
  testEnvironment: "jsdom",
  transform: {
    "^.+\.jsx?$": "babel-jest",
  },
}
