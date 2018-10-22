import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import typescript from "rollup-plugin-typescript2";

const base = {
  external: ["react", "react-dom", "prop-types", "@reduxless/core"]
};

const plugins = [
  json(),
  resolve(),
  typescript({
    useTsconfigDeclarationDir: true,
    tsconfig: "tsconfig.json"
  }),
  babel({
    exclude: ["node_modules/**"],
    plugins: ["external-helpers"]
  })
];

export default [
  {
    ...base,
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "cjs"
    },
    sourcemap: true,
    plugins
  },

  {
    ...base,
    input: "src/index.ts",
    output: {
      file: "dist/index.esm.js",
      format: "es"
    },
    sourcemap: true,
    plugins
  }
];
