import { createDefaultPreset } from "ts-jest";
const tsJestTransformCfg = createDefaultPreset().transform;

// /** @type {import("jest").Config} **/
/** @type {import('ts-jest').JestConfigWithTsJest} */
export const preset = "ts-jest";
export const testEnvironment = "node";
export const testMatch = ['**/*.test.ts'];
// export const testMatch = ['dist/tests/*.test.js'];
export const transform = {
  ...tsJestTransformCfg,
};