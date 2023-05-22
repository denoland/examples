import {
  Application,
  Context,
  helpers,
  Router,
} from "https://deno.land/x/oak@v12.4.0/mod.ts";
import {
  deleteUserById,
  getAddressByUserId,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUserAndAddress,
  upsertUser,
} from "./db.ts";

const { getQuery } = helpers;
const router = new Router();

router
  .get("/users", async (ctx: Context) => {
    ctx.response.body = await getAllUsers();
  })
  .get("/users/:id", async (ctx: Context) => {
    const { id } = getQuery(ctx, { mergeParams: true });
    ctx.response.body = await getUserById(id);
  })
  .get("/users/email/:email", async (ctx: Context) => {
    const { email } = getQuery(ctx, { mergeParams: true });
    ctx.response.body = await getUserByEmail(email);
  })
  .get("/users/:id/address", async (ctx: Context) => {
    const { id } = getQuery(ctx, { mergeParams: true });
    ctx.response.body = await getAddressByUserId(id);
  })
  .post("/users", async (ctx: Context) => {
    const body = ctx.request.body();
    const user = await body.value;
    await upsertUser(user);
  })
  .post("/users/:id/address", async (ctx: Context) => {
    const { id } = getQuery(ctx, { mergeParams: true });
    const body = ctx.request.body();
    const address = await body.value;
    const user = await getUserById(id);
    await updateUserAndAddress(user, address);
  })
  .delete("/users/:id", async (ctx: Context) => {
    const { id } = getQuery(ctx, { mergeParams: true });
    await deleteUserById(id);
  });

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
