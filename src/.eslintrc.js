module.exports = {
  'globals': {
    '$': false,
  },
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    // 'prettier/vue',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'camelcase': 'off',
  },
}
