module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "./index.js"
  ],
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "react/prop-types": 2,
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-curly-brace-presence": "error"
  },
  "settings": {
    "react": {
      "version": "detect"  // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
}
