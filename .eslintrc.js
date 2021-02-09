module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
  },
  env: {
    es2021: true,
    browser: true, //domentGetElementByIdとかを使えるようになる
    jest: true, //Jsのテストコードを書くときなどに使う
    node: true, //nodeのlintを設定
  },
  plugins: [
    'react-hooks',
    'react',
    '@typescript-eslint',
    'eslint-plugin-prettier',
  ],
  // EsLintの拡張機能
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', //EsLintにPretierのルールを反映
    'prettier/@typescript-eslint',
  ],
  rules: {
    // console.logが残っていたら注意喚起を出す
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    // アロー関数の記述をprettierのルールで判定
    'prefer-arrow-callback': 'error',
    // functionを使うことを禁止している
    'func-style': ['error', 'expression'],
    // アロー関数のみ許可
    'arrow-body-style': ['error', 'always'],
    'react/react-in-jsx-scope': 0,
    'react/display-name': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
