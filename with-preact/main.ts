/** @jsx h */
import { Application, Router } from "./deps.ts";
import html from "./src/App.tsx";

const router = new Router();

// Index.html
router.get("/", async (ctx) => {
  ctx.response.body = html;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ port }) => {
  console.log(`Listening on: http://localhost:${port}`);
});

await app.listen({ port: 8000 });
