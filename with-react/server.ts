import { Application, denoPlugin, esbuild, Router } from "./deps.server.ts";

// Transpile jsx to js for React.
await esbuild.build({
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
