import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!axios/)'
  ],
  setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
  ]
}
export default config