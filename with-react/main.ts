import { Application, denoPlugin, esbuild } from "./deps.server.ts";

const text = await Deno.readTextFile("./src/index.tsx");
console.log(text);

// Transpile jsx to js for React.
// await esbuild.default.initialize({
//   wasmURL: "https://esm.sh/esbuild-wasm/esbuild.wasm",
//   worker: false,
// });
// const output = await esbuild.default.build({
//   plugins: [denoPlugin()],
//   // entryPoints: ["./src/index.tsx"],
//   entryPoints: [new URL(`file://${Deno.cwd()}/src/index.tsx`)],
//   write: false,
//   bundle: true,
//   format: "esm",
//   absWorkingDir: Deno.cwd(),
// });
// The raw transpiled output as a string.
// const indexJs = new TextDecoder().decode(output.outputFiles[0].contents);

// Setup server.
const app = new Application();

app.use((ctx) => {
  ctx.response.body = "hello, world";
});

// Return transpiled script as HTML string.
// app.use((ctx) => {
//   ctx.response.body = `
//     <!doctype html>
//     <html>
//       <head>
//         <title>Deno + React</title>
//       </head>
//       <body>
//         <div id="app" />
//         <script>${indexJs}</script>
//       </body>
//     </html>
//   `;
// });

// Start server.
console.log("Listening on http://localhost:8000");
await app.listen({ port: 8000 });
