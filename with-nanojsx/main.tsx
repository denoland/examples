import { Application, h, Helmet, renderSSR, Router } from "./deps.ts";
import { HomePage } from "./src/pages/HomePage.tsx";
import { GettingStartedPage } from "./src/pages/GettingStartedPage.tsx";

// Make HTML string.
export const makeHtml = (
  body: any,
  head: string[] = [],
  footer: string[] = [],
) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${head.join("\n")}
      </head>
      <body>
        ${body}
        ${footer.join("\n")}
      </body>
    </html>
  `;
};

// Create routes.
const router = new Router();
router.get("/", (ctx) => {
  // Render page.
  const ssr = renderSSR(<HomePage />);

  // Extract body, head, footer.
  const { body, head, footer } = Helmet.SSR(ssr);

  // Make and send HTML.
  ctx.response.body = makeHtml(body, head, footer);
});

router.get("/getting-started", (ctx) => {
  // Render page.
  const ssr = renderSSR(<GettingStartedPage />);

  // extract body, head, and footer
  const { body, head, footer } = Helmet.SSR(ssr);

  // make and send the html
  ctx.response.body = makeHtml(body, head, footer);
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ port }) => {
  console.log(`Listening on: http://localhost:${port}`);
});

await app.listen({ port: 8000 });
