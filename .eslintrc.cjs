/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // lines for vue eslint config
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/html-indent': ['error', 2],
    'no-multi-spaces': ['error'],

    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always', // area , base , br , col , command , embed , hr , img , input , keygen , link , meta , param , source , track , wbr.
          normal: 'never', // p, h, div ...
          component: 'always', // custom components
        },
      },
    ],

    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],

    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],

    // lines for simple eslint config
    'no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    semi: ['error', 'never'], // no ;
    quotes: ['error', 'single'], // no "
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-multiple-empty-lines': [
      'error',
      {
        // limit empty lines
        max: 2,
        maxEOF: 0,
      },
    ],
    'space-before-function-paren': ['error', 'always'], // space before "()"" in function
    'space-before-blocks': ['error', 'always'], // space before {}
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    // 'comma-dangle': ['error', 'never'],
    'max-params': ['error', 3],
    'no-async-promise-executor': 0, // allows using an async function as a Promise executor.
    'no-undef': 'warn',
    'no-useless-catch': 'off', // TODO: research how to fix no-useless-catch
  },
}