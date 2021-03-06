module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'block-scoped-var': 0,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'consistent-return': 0,
    'import/extensions': 0,
    'linebreak-style': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-redeclare': 0,
    'no-var': 0,
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'vars-on-top': 0
  }
};
