module.exports = {
  extends: ['prettier', 'eslint:recommended', 'plugin:import/warnings'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['eslint-plugin-import'],
  rules: {
    'no-async-promise-executor': ['error'],
    'no-await-in-loop': ['error'],
    'no-template-curly-in-string': ['error'],
    'array-callback-return': ['off'],
    'block-scoped-var': ['error'],
    curly: ['error', 'all'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    eqeqeq: ['error', 'always'],
    'guard-for-in': ['error'],
    'max-classes-per-file': ['error', 1],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-console': ['error'],
    'no-div-regex': ['error'],
    'no-else-return': ['error', { allowElseIf: true }],
    'no-eval': ['error'],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-fallthrough': ['error'],
    'no-floating-decimal': ['error'],
    'no-implicit-coercion': ['error'],
    'no-implied-eval': ['error'],
    'no-invalid-this': ['error'],
    'no-iterator': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal-escape': ['error'],
    'no-proto': ['error'],
    'no-redeclare': ['error'],
    'no-return-assign': ['error', 'always'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unused-expressions': ['error'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'no-useless-call': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-constructor': ['error'],
    'no-void': ['error'],
    'no-with': ['error'],
    radix: ['error', 'always'],
    'require-await': ['error'],
    'wrap-iife': ['error', 'inside'],
    yoda: ['error'],
    'no-label-var': ['error'],
    'no-shadow': ['off'],
    'no-shadow-restricted-names': ['error'],
    'no-use-before-define': [
      'error',
      {
        variables: true,
        functions: false,
        classes: true
      }
    ],
    'no-path-concat': ['error'],

    /* Stylistic */
    'no-extra-parens': ['off'],
    'no-extra-semi': ['error'],

    /* ECMAScript 6 */
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'generator-star-spacing': ['error', { before: false, after: true }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-useless-computed-key': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always'],
    'prefer-const': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error'],
    'yield-star-spacing': ['error', { before: true, after: false }],

    /* Imports */
    'import/no-webpack-loader-syntax': ['error'],
    'import/no-self-import': ['error'],
    'import/no-cycle': ['error'],
    'import/no-useless-path-segments': ['error'],
    'import/no-unused-modules': ['error'],
    'import/no-named-as-default': ['error'],
    'import/no-named-as-default-member': ['error'],
    'import/no-mutable-exports': ['error'],
    'import/no-commonjs': ['off'],
    'import/first': ['error'],
    'import/no-duplicates': ['error'],
    'import/no-namespace': ['off'],
    'import/extensions': [
      'error',
      'never',
      { css: 'always', scss: 'always', jpg: 'always', png: 'always', json: 'always' }
    ],
    'import/newline-after-import': ['error']
  }
}
