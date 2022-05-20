# Deno + React Example

This is an example app with [Deno](https://github.com/denoland/deno) and
[React 18](https://github.com/facebook/react).

Clone this repo and run it with:

```
$ deno task run
```

Then, in your browser, go to localhost:8000.

# Quickstart Tutorial

This tutorial will walk you through setting up a bare bones Todo app using Deno
and React 18.

The first step is to create the following directory structure:

```
deno-react-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   └── index.jsx
├── deps.client.js
├── deps.server.js
└── server.js
```

## Managing Dependencies

While you can import modules inline in the file you need them, we'll centralize
all of them into two files: `deps.client.js` and `deps.server.js`. We separate
them into client and server dependencies, because we only need to transpile the
client side dependencies.

Deno supports
[importing modules via URL](https://deno.land/manual/linking_to_external_code).
We'll use [esm.sh](https://esm.sh/), which provides Deno-friendly npm packages
via CDN.
([Learn more about using npm packages via CDN](https://deno.land/manual/node/cdns).)

### `deps.client.js`

This file includes all client-side dependencies. We'll include all React and
React related modules, as well as
[a Deno port of `nanoid`](https://deno.land/x/nanoid@v3.0.0), which we use to
generate unique ids for each todo item.

```js
// react
export * as React from "https://esm.sh/react@alpha";
export { useEffect, useRef, useState } from "https://esm.sh/react@alpha";
export * as ReactDOM from "https://esm.sh/react-dom@alpha";
export * as ReactDOMServer from "https://esm.sh/react-dom@alpha/server?dev";

// nanoid
export { nanoid } from "https://deno.land/x/nanoid/mod.ts";
```

### `deps.server.js`

This file includes all server-side dependencies. We'll use
[Oak](https://github.com/oakserver/oak) for a simple http server,
[esbuild](https://github.com/evanw/esbuild) for bundling and transpiling, and
[esbuild_deno_loader](https://github.com/lucacasonato/esbuild_deno_loader) for
esbuild module resolution.

```js
// oak
export { Application, Router } from "https://deno.land/x/oak/mod.ts";

// esbuild
export * as esbuild from "https://deno.land/x/esbuild@v0.14.39/mod.js";
export { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.4.3/mod.ts";
```

## `server.js`

This file will handle bundling and transpiling of the React components with
[esbuild](https://github.com/evanw/esbuild), as well as creating the web server
with [Oak](https://github.com/oakserver/oak).

### Transpiling JSX with esbuild

[JSX](https://reactjs.org/docs/introducing-jsx.html) makes writing React
components easy, but browsers are unable to execute it directly. Most React apps
use Babel, Parcel, Webpack, or some other tool to transpile JSX into vanilla
JavaScript for the browser.

We'll use [esbuild](https://github.com/evanw/esbuild), an extremely fast
JavaScript bundler.

In `server.js`, we'll import `esbuild` and `denoPlugin`, then run
`esbuild.build()` with the following options:

```js
import { esbuild } from "./deps.server.js";
import { denoPlugin } from "./deps.server.js";

// Transpile jsx to js for React.
await esbuild.build({
  plugins: [denoPlugin()],
  entryPoints: ["./src/index.jsx"],
  outfile: "./src/index.js",
  bundle: true,
  format: "esm",
});
esbuild.stop();
```

The key options to note:

- `entryPoints`: This is the top level jsx file.
- `outfile`: This is the bundled output js file, which will be loaded onto
  `index.html`.

Note that the first time you go to localhost:8000, the React components will be
bundled and transpiled into the outfile.

### Configuring the server

Oak is a middleware http framework and router inspired by
[Koa](https://github.com/koajs/koa).

Two main things that this server will do:

- serve `public/index.html` as `/`, and
- serve the bundled JS `/src/index.js`

```js
import { Application, Router } from "./deps.server.js";

// Setup server.
const app = new Application();
const router = new Router();

// Index.html
router.get("/", async (ctx) => {
  return await ctx.send({
    root: `${Deno.cwd()}/public`,
    index: "index.html",
  });
});

// Bundled js file.
router.get("/src/index.js", async (ctx) => {
  return await ctx.send({
    root: `${Deno.cwd()}`,
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

// Start server.
await app.listen({ port: 8000 });
```

## React

[React](https://reactjs.org/) is a declaritive UI framework that doesn't really
need any server specific setup. All you need to get started is a way to write
React components and a way to load them into an HTML file.

### `public/index.html`

This is the main HTML page that will load the React components.

Two key lines in this file include:

- Loading React components transpiled into vanilla JavaScript

```html
<script defer src="/src/index.js"></script>
```

- A DOM element to which your root React component will bind.

```html
<div id="app" />
```

### `src/index.jsx`

This is the top level jsx file that will take the React `App` component and bind
it to `<div id="app" />` in the `index.html` file.

```js
// Bind react app to <div id="app" />
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App tasks={DATA} />);
```

Note that `App` referenced above will be imported from `App.jsx`, which will
contain the logic for the Todo app.

Since this quickstart is to setup React with Deno, we won't go over the ins and
outs of how React works and how to write React components. For more in depth
tutorial about React,
[please refer to their website](https://reactjs.org/tutorial/tutorial.html).

## Deploying to the Edge

TODO
