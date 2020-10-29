module.exports = {
  extends: 'erb/typescript',
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 2,
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-sequences': 'error',
    eqeqeq: ['error', 'always'],
    yoda: [
      'error',
      'never',
      {
        exceptRange: true,
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        mode: 'strict',
      },
    ],
    'comma-style': ['error', 'last'],
    'padded-blocks': ['error', 'never'],
    'no-multiple-empty-lines': 'error',
    'no-multi-assign': 'error',
    'no-lonely-if': 'error',
    'eol-last': ['error', 'always'],
    'brace-style': 'error',
    'semi-style': ['error', 'last'],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-tabs': 2,
    'no-with': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'no-duplicate-imports': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'react/prop-types': 0,
    'import/export': 0,
    'import/named': 0,
    'react/jsx-no-bind': 'error',
    'prettier/prettier': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/require-default-props': 'off',
    'no-case-declarations': 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./configs/webpack.config.eslint.js'),
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
