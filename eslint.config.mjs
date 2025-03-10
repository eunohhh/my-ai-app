import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "**/components/ui/**",
      "**/types/**",
      "node_modules/**",
      "dist/**",
      ".next/**", // .next 폴더 무시
    ],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ),
  {
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
];

export default eslintConfig;
