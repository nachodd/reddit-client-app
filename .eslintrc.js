module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: [
    'plugin:vue/essential',
    '@vue/prettier'
  ],

  // required to lint *.vue files
  plugins: [
    'vue'
  ],

  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true,
    'Capacitor': true,
    _: true,
  },

  // add your custom rules here
  rules: {
    //"linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
    "linebreak-style": 0,
    "no-async-promise-executor": "off",
    "prefer-promise-reject-errors": "off",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "prettier/prettier": [
      "error",
      {
        semi: false,
        // singleQuote: true,
        trailingComma: "all",
        // not wroking. at all =( conflicts with "vue/html-closing-bracket-newline"
        htmlWhitespaceSensitivity: "ignore",
        "html-whitespace-sensitivity": "ignore",
      },
    ],
    // allow console.log during development only
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": "off",
    // allow debugger during development only
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  }
}
