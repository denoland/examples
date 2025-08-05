import { serveDir, serveFile } from "jsr:@std/http/file-server";

// make a data set of a list of photos from the photos folder
const pages: string[] = [];
for await (const file of Deno.readDir(`./pages`)) {
  pages.push(file.name);
}

console.log(pages);

Deno.serve((req: Request) => {
  const pathname = new URL(req.url).pathname;



  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: "public",
      urlRoot: "static",
    });
  }

  if(pages.includes(pathname.slice(1))) {
    return serveFile(req, `./pages${pathname}`);
  }

  
  return new Response("404: Not Found", {
    status: 404,
  });
});