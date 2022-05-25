import { Application, denoPlugin, Router, esbuild } from "./deps.server.ts";

// await esbuild.default.initialize({
//   wasmURL: "https://esm.sh/esbuild-wasm/esbuild.wasm",
//   worker: false,
// });
// Transpile jsx to js for React.
await esbuild.build({
  plugins: [denoPlugin()],
  entryPoints: ["./src/index.tsx"],
  outfile: "./public/index.js",
  bundle: true,
  format: "esm",
  absWorkingDir: Deno.cwd()
});

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
router.get("/public/index.js", async (ctx) => {
  return await ctx.send({
    root: `${Deno.cwd()}`,
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

// Start server.
console.log("Listening on http://localhost:8000");
await app.listen({ port: 8000 });
