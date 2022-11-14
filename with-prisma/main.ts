import { PrismaClient } from "./generated/client/deno/edge.ts";
import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

/**
 * Initialize.
 */

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});
const app = new Application();
const router = new Router();

/**
 * Setup routes.
 */

router
  .get("/", (context) => {
    context.response.body = "Welcome to the Dinosaur API!";
  })
  .get("/dinosaur", async (context) => {
    // Get all dinosaurs.
    const dinosaurs = await prisma.dinosaur.findMany();
    context.response.body = dinosaurs;
  })
  .get("/dinosaur/:id", async (context) => {
    // Get one dinosaur by id.
    const { id } = context.params;
    const dinosaur = await prisma.dinosaur.findUnique({
      where: {
        id: Number(id),
      },
    });
    context.response.body = dinosaur;
  })
  .post("/dinosaur", async (context) => {
    // Create a new dinosaur.
    const { name, description } = await context.request.body("json").value;
    const result = await prisma.dinosaur.create({
      data: {
        name,
        description,
      },
    });
    context.response.body = result;
  })
  .delete("/dinosaur/:id", async (context) => {
    // Delete a dinosaur by id.
    const { id } = context.params;
    const dinosaur = await prisma.dinosaur.delete({
      where: {
        id: Number(id),
      },
    });
    context.response.body = dinosaur;
  });

/**
 * Setup middleware.
 */

app.use(router.routes());
app.use(router.allowedMethods());

/**
 * Start server.
 */

await app.listen({ port: 8000 });
