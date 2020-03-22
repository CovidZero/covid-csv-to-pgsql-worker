module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: [
        'entry-point/**/*.ts',
        'lib/**/*.ts',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/tests/mocks/',
        '<rootDir>/node_modules/'
    ]
};