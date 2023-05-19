import { getTodoItem, getAllTodoItems, createTodoItem, checkOffTodoItem, deleteTodoItem } from "./db.ts";

export default {
  getAllTodoItems: async (ctx) => {
    ctx.response.body = await getAllTodoItems("strong");
  },
  getTodoItem: async (ctx) => {
    ctx.response.body = await getTodoItem(ctx.params.id, "strong");
  },
  createTodoItem: async (ctx) => {
    const body = await ctx.request.body().value;
    if (body.text) {
      ctx.response.body = await createTodoItem(body.text);
    } else {
      ctx.response.body = "Todo list item is empty";
    }
  },
  checkOffTodoItem: async (ctx) => {
    const body = await ctx.request.body().value;
    if (body.completed) {
      ctx.response.body = await checkOffTodoItem(ctx.params.id);
    } else {
      ctx.response.body = "no update";
    }
  },
  deleteTodoItem: async (ctx) => {
    ctx.response.body = await deleteTodoItem(ctx.params.id);
  },
};