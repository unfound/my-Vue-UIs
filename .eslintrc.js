module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:vue/essential",
    "standard"
  ],
  // The most rules of eslint-plugin-vue require vue-eslint-parser to check <template> ASTs.
  // parser: "babel-eslint",
  // "globals": {
  //   "Atomics": "readonly",
  //   "SharedArrayBuffer": "readonly"
  // },
  "parserOptions": {
    // https://vuejs.github.io/eslint-plugin-vue/user-guide/#editor-integrations
    parser: 'babel-eslint'
    // "ecmaVersion": 2018,
    // "sourceType": "module"
  },
  plugins: [
    "vue"
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off'
  }
};