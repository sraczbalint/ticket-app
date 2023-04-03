module.exports = {
  // Configuration for JavaScript files
  extends: ["airbnb-base", "plugin:prettier/recommended", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        allow: ["warn", "error"],
      },
    ],
    "import/prefer-default-export": "off", // Named export is easier to refactor automatically
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint", "unused-imports"],
      extends: [
        "airbnb-typescript",
        "plugin:jsx-a11y/strict",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
            printWidth: 80,
            singleQuote: false,
          },
        ],
        "no-console": [
          "error",
          {
            allow: ["warn", "error"],
          },
        ],
        "@typescript-eslint/no-shadow": "off",
        "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "react/require-default-props": "off", // Allow non-defined react props as undefined
        "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
        "import/order": [
          "warn",
          {
            groups: ["builtin", "external", "internal"],
            pathGroups: [
              {
                pattern: "react",
                group: "external",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "class-methods-use-this": "off", // _document.tsx use render method without `this` keyword
        "@typescript-eslint/no-unused-vars": "warn",
        "unused-imports/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "import/no-named-as-default": "off",
        "no-restricted-exports": "off",
        "prefer-destructuring": "off",
        "no-useless-return": "off",
        "no-nested-ternary": "off",
        "no-unused-import": "warn",
      },
    },
  ],
};
