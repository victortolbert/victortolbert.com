module.exports = {
  verbose: false,
  preset: 'ts-jest',
  // preset: '@vue/cli-plugin-unit-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  //testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$',
  setupFilesAfterEnv: ['./jest.setup.js'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue-tjw'],
}
