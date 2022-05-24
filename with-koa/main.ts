import Koa from "https://esm.sh/koa@2.13.4";

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

console.log("Now listening on localhost:8000.");
app.listen(8000);