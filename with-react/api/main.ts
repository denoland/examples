import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import data from "./data.json" assert { type: "json" };

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Welcome to dinosaur API!";
  })
  .get("/api", (context) => {
    context.response.body = data;
  })
  .get("/api/:dinosaur", (context) => {
    if (context?.params?.dinosaur) {
      const filtered = data.filter((item) =>
        item["name"].toLowerCase() === context.params.dinosaur.toLowerCase()
      );
      if (filtered.length === 0) {
        context.response.body = "No dinosaurs found.";
      } else {
        context.response.body = filtered[0];
      }
    }
  });

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
