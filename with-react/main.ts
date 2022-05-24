import { Application, denoPlugin, Router } from "./deps.server.ts";
import * as esbuild from 'https://esm.sh/esbuild-wasm/esm/browser.js';

await esbuild.default.initialize({
  wasmURL: "https://esm.sh/esbuild-wasm/esbuild.wasm",
  worker: false,
});
// Transpile jsx to js for React.
await esbuild.default.build({
  plugins: [denoPlugin()],
  entryPoints: ["./src/index.tsx"],
  outfile: "./src/index.js",
  bundle: true,
  format: "esm",
});
esbuild.stop();

// Setup server.
const app = new Application();
const router = new Router();

// Index.html
router.get("/", async (ctx) => {
  return await ctx.send({
    root: `${Deno.cwd()}/public`,
    index: "index.html",
  });
});

// Bundled js file.
router.get("/src/index.js", async (ctx) => {
  return await ctx.send({
    root: `${Deno.cwd()}`,
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

// Start server.
console.log("Listening on http://localhost:8000");
await app.listen({ port: 8000 });
