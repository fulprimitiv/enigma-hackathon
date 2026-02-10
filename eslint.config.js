import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import cssModules from "eslint-plugin-css-modules";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
      "css-modules": cssModules,
    },
    settings: {
      react: {
        version: "detect",
      },
      "css-modules": {
        basePath: "src",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",

      ...reactHooks.configs.recommended.rules,
      "react-hooks/exhaustive-deps": "error",
      "react-hooks/rules-of-hooks": "error",

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "simple-import-sort/imports": "error",
      "css-modules/no-undef-class": "error",
    },
  },
  prettier,
];
