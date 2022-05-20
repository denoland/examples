import { Application, Router } from "./deps.ts";
import html from "./components/App.tsx";

const router = new Router();
router.get("/", (context) => {
  context.response.body = html;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ port }) => {
  console.log(`Listening on: http://localhost:${port}`);
});

await app.listen({ port: 8000 });
