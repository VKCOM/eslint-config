module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "google"
  ],
  "plugins": [
    "react",
    "react-hooks",
    "@vkontakte/no-invalid-this-except"
  ],
  "rules": {
    "require-jsdoc": "off",
    "comma-dangle": ["warn", "always-multiline"],
    "no-undef": "error",
    "space-infix-ops": ["error", { "int32Hint": false }],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", 180, 2, { "ignoreTemplateLiterals": true }],
    "curly": [2, "all"],
    "no-octal": "error",
    "no-eval": "error",
    "no-invalid-this": "off",
    "@vkontakte/no-invalid-this-except/no-invalid-this-except": ["error", ["each", "addEvent"]],
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "react-hooks/rules-of-hooks": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-global-assign": "error",

    "react/prop-types": 0,
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["error", { "properties": "never", "ignoreDestructuring": true }],
    "func-call-spacing": ["error", "never"],
    "no-array-constructor": "error",
    "no-unused-vars": ["error", { "ignoreRestSiblings": true, "args": "none" }],
    "semi": ["error", "always"]
  },
  "settings": {
    "react": {
      "version": "detect"  // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
}
