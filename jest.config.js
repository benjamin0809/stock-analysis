module.exports = {
  roots: [
      "<rootDir>/__tests__"
  ],
  testRegex: '__tests__/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  },
  coverageDirectory: "./__tests__/coverage", 
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};