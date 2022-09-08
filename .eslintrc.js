module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    './eslint/eslint-config-common.js',
    './eslint/eslint-config-typescript.js',
    './eslint/eslint-config-react.js'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/promise-function-async': ['off'],
    '@typescript-eslint/typedef': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'react/button-has-type': ['off'],
    'no-console': ['off']
  }
}
