/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // env: {
  //   browser: true,
  //   es2021: true,
  // },
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    // 'plugin:react/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier', // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/default': 2,
    'import/export': 2,
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~api/**',
            group: 'builtin',
          },
          {
            pattern: '~recoil/**',
            group: 'builtin',
          },
          {
            pattern: '~styles/**',
            group: 'type',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'never',
      },
    ],
    // 'import/named': 2,
    'import/namespace': 2,
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
      },
    ],
  },
}
