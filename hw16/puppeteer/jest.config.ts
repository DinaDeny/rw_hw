import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    extensionsToTreatAsEsm: ['.ts'],
    verbose: true,
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }]
    },
    testPathIgnorePatterns: ['./dist'],
    clearMocks: true,
    coverageProvider: 'v8',
    testMatch: ['**/tests/**/*.[t]s?(x)', '**/?(*.)+(spec|test).[t]s?(x)']
};

export default config;
