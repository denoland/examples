import { Hono } from "@hono/hono";
import data from "./data.json" with { type: "json" };

const app = new Hono();

app.get("/", (c) => {
  return c.text("Welcome to the dinosaur API!");
});

app.get("/api/dinosaurs", (c) => {
  return c.json(data);
});

app.get("/api/dinosaurs/:dinosaur", (c) => {
  if (!c.req.param("dinosaur")) {
    return c.text("No dinosaur name provided.");
  }

  const dinosaur = data.find((item) =>
    item.name.toLowerCase() === c.req.param("dinosaur").toLowerCase()
  );

  console.log(dinosaur);

  if (dinosaur) {
    return c.json(dinosaur);
  } else {
    return c.notFound();
  }
});

Deno.serve(app.fetch);
