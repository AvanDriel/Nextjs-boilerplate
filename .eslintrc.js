const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: [
    'node_modules/*',
    '.next/*',
    '.out/*',
    '!.prettierrc.js',
    '*.d.ts',
  ], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        'react/react-in-jsx-scope': 'off', // No need to import React when using Next.js
        'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with Next.js's <Link /> components
        '@typescript-eslint/no-unused-vars': ['error'], // Why would you want unused vars?
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
        'func-names': [OFF, 'always', { generators: 'as-needed' }],
        'import/order': [WARN],
        'import/no-unresolved': [OFF],
        'import/prefer-default-export': [OFF],
        'import/no-named-default': [OFF],
        'jsx-a11y/click-events-have-key-events': [OFF],
        'jsx-a11y/no-static-element-interactions': [OFF],
        'jsx-a11y/no-noninteractive-element-interactions': [OFF],
        'jsx-a11y/label-has-associated-control': [OFF],
        'jsx-a11y/label-has-for': [OFF],
        'jsx-a11y/anchor-has-content': [OFF],
        'jsx-quotes': [ERROR, 'prefer-double'],
        'react/jsx-no-target-blank': [ERROR, { enforceDynamicLinks: 'always' }],
        'react/jsx-one-expression-per-line': [OFF],
        'react/prop-types': [OFF],
        'react/jsx-uses-react': [ERROR],
        'react/jsx-uses-vars': [ERROR],
        'react/jsx-wrap-multilines': [OFF],
        'react/jsx-filename-extension': [
          ERROR,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
        'react/no-array-index-key': [WARN],
        'quote-props': [WARN],
        radix: [ERROR, 'as-needed'],
        'linebreak-style': [WARN, 'windows'],
        'no-prototype-builtins': [OFF],
        'no-restricted-globals': [OFF],
        'consistent-return': [OFF],
        'no-return-assign': [ERROR],
        'no-param-reassign': [
          ERROR,
          {
            props: false,
          },
        ],
        'no-console': [WARN, { allow: ['warn', 'error'] }],
        'no-unused-vars': [ERROR, { args: 'none' }],
        'no-multiple-empty-lines': [ERROR, { max: 1, maxEOF: 0, maxBOF: 0 }],
        'operator-linebreak': [WARN, 'after'],
        indent: [WARN, 2, { SwitchCase: 1 }],
        quotes: [
          WARN,
          'single',
          { avoidEscape: true, allowTemplateLiterals: true },
        ],
        curly: [WARN],
        'no-extra-semi': [WARN],
        'no-undef-init': [WARN],
        'no-var': [WARN],
        'import/extensions': [OFF],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [ERROR],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'react/jsx-curly-newline': OFF,
        'react/jsx-props-no-spreading': OFF,
      },
    },
  ],
};
