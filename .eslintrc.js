module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        semi: false,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
