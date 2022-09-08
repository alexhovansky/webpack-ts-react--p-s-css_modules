module.exports = {
  extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parser: 'espree',
      rules: {
        'no-invalid-this': ['error'],
        'no-redeclare': ['error'],
        'no-unused-expressions': ['error'],
        'no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false
          }
        ],
        'no-useless-constructor': ['error'],
        'require-await': ['error'],
        'no-use-before-define': [
          'error',
          {
            variables: true,
            functions: false,
            classes: true
          }
        ],
        'no-extra-semi': ['error'],
        '@typescript-eslint/adjacent-overload-signatures': ['off'],
        '@typescript-eslint/array-type': ['off'],
        '@typescript-eslint/await-thenable': ['off'],
        '@typescript-eslint/naming-convention': ['off'],
        '@typescript-eslint/ban-ts-comment': ['off'],
        '@typescript-eslint/consistent-type-assertions': ['off'],
        '@typescript-eslint/consistent-type-definitions': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-member-accessibility': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/member-delimiter-style': ['off'],
        '@typescript-eslint/no-extra-parens': ['off'],
        '@typescript-eslint/no-extra-semi': ['off'],
        '@typescript-eslint/no-floating-promises': ['off'],
        '@typescript-eslint/no-empty-interface': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-shadow': ['off'],
        '@typescript-eslint/no-inferrable-types': ['off'],
        '@typescript-eslint/no-invalid-this': ['off'],
        '@typescript-eslint/no-redeclare': ['off'],
        '@typescript-eslint/no-non-null-assertion': ['off'],
        '@typescript-eslint/no-misused-new': ['off'],
        '@typescript-eslint/no-misused-promises': ['off'],
        '@typescript-eslint/no-parameter-properties': ['off'],
        '@typescript-eslint/no-unnecessary-type-assertion': ['off'],
        '@typescript-eslint/no-unused-expressions': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/no-useless-constructor': ['off'],
        '@typescript-eslint/promise-function-async': ['off'],
        '@typescript-eslint/require-await': ['off'],
        '@typescript-eslint/restrict-plus-operands': ['off'],
        '@typescript-eslint/unified-signatures': ['off']
      }
    }
  ],
  rules: {
    'no-invalid-this': ['off'], // see @typescript-eslint/no-invalid-this
    'no-redeclare': ['off'], // see @typescript-eslint/no-redeclare
    'no-unused-expressions': ['off'], // see @typescript-eslint/no-unused-expressions
    'no-unused-vars': ['off'], // see @typescript-eslint/no-unused-vars
    'no-useless-constructor': ['off'], // see @typescript-eslint/no-useless-constructor
    'require-await': ['off'], // see @typescript-eslint/require-await
    'no-use-before-define': ['off'], // see @typescript-eslint/no-use-before-define

    /* Stylistic */
    'no-extra-semi': ['off'], // see @typescript-eslint/no-extra-semi

    /* Typescript */
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
    '@typescript-eslint/await-thenable': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase']
      },
      {
        selector: ['function'],
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: ['objectLiteralProperty', 'objectLiteralMethod'],
        format: []
      },
      {
        selector: 'typeProperty',
        format: []
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'enum',
        format: ['PascalCase', 'UPPER_CASE']
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true
        }
      }
    ],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/no-extra-parens': ['off'],
    '@typescript-eslint/no-extra-semi': ['error'],
    '@typescript-eslint/no-floating-promises': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true
      }
    ],
    '@typescript-eslint/no-invalid-this': ['error'],
    '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ],
    '@typescript-eslint/no-parameter-properties': ['off'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
    '@typescript-eslint/no-unnecessary-type-constraint': ['off'],
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: true,
        functions: false,
        classes: true,
        enums: true,
        typedefs: true
      }
    ],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true
      }
    ],
    '@typescript-eslint/require-await': ['error'],
    '@typescript-eslint/restrict-plus-operands': ['error'],
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: true,
        memberVariableDeclaration: true,
        objectDestructuring: false,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: false
      }
    ],
    '@typescript-eslint/unified-signatures': ['error']
  }
}
