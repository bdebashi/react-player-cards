module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb'
  ],
  plugins: [
    'vue'
  ],
  settings: {
    'import/core-modules': ['investoo']
  },
  rules: {
    'comma-dangle': [
      'error',
      'never'
    ],
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    "vue/max-attributes-per-line": [2, {
      "singleline": 2,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  }
};
