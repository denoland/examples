
import { Application, Router } from "https://deno.land/x/oak@v12.4.0/mod.ts";
import todoController from "./todos.ts";

const router = new Router();
router
  .get("/api/", todoController.getAllTodoItems)
  .get("/api/:id", todoController.getTodoItem)
  .post("/api/", todoController.createTodoItem)
  .post("/api/:id", todoController.checkOffTodoItem)
  .delete("/api/:id", todoController.deleteTodoItem)

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
