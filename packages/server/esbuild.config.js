#!/usr/bin/env node

import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    target: "node",
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "dist/main.js",
  },
  { root: "dist", port: 5002 }
);