module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'implicit-arrow-linebreak': 'off',
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    indent: 'off',
  },
};
