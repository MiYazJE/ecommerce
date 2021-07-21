module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'prettier-standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'warn',
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
    ],
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['src', 'node_modules']
      }
    },
    react: {
      version: 'detect'
    }
  }
}
