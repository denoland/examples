/** @jsx h */
import { Application, Router, renderToString } from "./deps.ts";
import App from "./src/App.tsx";

// Make HTML string.
export const makeHtml = (Page) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        ${renderToString(Page.render())}
      </body>
    </html>
  `;
};


const router = new Router();

// App.
router.get("/", async (ctx) => {
  // ctx.response.body = App;
  ctx.response.body = makeHtml(App);
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ port }) => {
  console.log(`Listening on: http://localhost:${port}`);
});

await app.listen({ port: 8000 });
