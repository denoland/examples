import { h, Helmet, renderSSR } from "../deps.ts";
import { Hello } from "./Hello.tsx";

const App = () => (
  <div>
    <Helmet>
      <title>Deno + NanoJSX</title>
    </Helmet>
    <Hello />
  </div>
);

const ssr = renderSSR(<App />);
const { body, head, footer } = Helmet.SSR(ssr);

// Form HTML.
const html = `
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
</html>`;

export default html;
