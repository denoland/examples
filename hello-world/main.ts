import { serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
    return serveFile(req, "./index.html");
});