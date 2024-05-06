import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";

import packageJson from "./package.json" assert { type: "json" };
import { sourceMapsEnabled } from "process";


export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap:true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap:true
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json",sourceMap: true}),
            terser(),
        ],
        external: ["react", "react-dom","@apollo/client","react-toastify"],
    },
    {
        input: "src/index.ts", // Update input to your main TypeScript file
        output: [{ file: "dist/index.d.ts", format: "esm" }],
       plugins:[dts()]
    },

];