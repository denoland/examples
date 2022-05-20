import { Application, Factory, Router } from "./deps.ts";

// Transpile/bundle Vue3 SFC files to vanilla JS with VNO.
const vno = Factory.create({
  root: "App",
  entry: "./",
  vue: 3,
});
await vno.build();

// Configure routes.
const router = new Router();

// Index.html
router.get("/", async (ctx) => {
  return await ctx.send({
    root: `${Deno.cwd()}/public`,
    index: "index.html",
  });
});

// Build.js
router.get("/build.js", async (ctx) => {
  return await ctx.send({
    root: `${Deno.cwd()}/vno-build`,
    index: "build.js",
  });
});

// Style.css
router.get("/style.css", async (ctx) => {
  return await ctx.send({
    root: `${Deno.cwd()}/vno-build`,
    index: "style.css",
  });
});

// Configure server.
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ port }) => {
  console.log(`Listening on: http://localhost:${port}`);
});

// Start server.
await app.listen({ port: 8000 });
