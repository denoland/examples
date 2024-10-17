# How to use Fastify with Deno

[Fastify](https://fastify.dev/) is a popular web framework known for being a
fast and low overhead web framework.

This How To guide will show you how to create a simple API using Fastify and
Deno.

## Create `main.ts`

Let's create `main.ts`:

```
touch main.ts
```

In `main.ts`, let's create a simple server:

```ts
import Fastify, {
  type FastifyReply,
  type FastifyRequest,
} from "npm:fastify@5.0.0";

const fastify = Fastify();

fastify.get("/", (_req: FastifyRequest, reply: FastifyReply) => {
  reply.send("Welcome to the Dinosaur API!");
});

await fastify.listen({ port: 8000 });
```

Let's run this server:

```
deno run -A main.ts
```

And point our browser to `localhost:8000`. You should see:

```
Welcome to the Dinosaur API!
```

## Add data and routes

The next step here is to add some data. We'll use this Dinosaur data that we
found from [this article](https://www.thoughtco.com/dinosaurs-a-to-z-1093748).
Feel free to
[copy it from here](https://github.com/denoland/examples/blob/main/with-fastify/data.json).

Let's create `data.json`:

```
touch data.json
```

And paste in the dinosaur data.

Next, let's import that data into `main.ts`. Let's add this line at the top of
the file:

```ts
import data from "./data.json" with { type: "json" };
```

Then, we can create the routes to access that data. To keep it simple, let's
just define `GET` handlers for `/api/` and `/api/:dinosaur`. Add the below after
the `const fastify = Fastify();` line:

```ts
fastify.get("/", (_req: FastifyRequest, reply: FastifyReply) => {
  reply.send("Welcome to the Dinosaur API!");
});

fastify.get("/api", (_req: FastifyRequest, reply: FastifyReply) => {
  reply.send(data);
});

fastify.get(
  "/api/:dinosaur",
  (
    req: FastifyRequest<{ Params: { dinosaur: string } }>,
    reply: FastifyReply,
  ) => {
    if (req.params.dinosaur) {
      const found = data.find((dino: {
        name: string;
        description: string;
      }) => dino.name.toLowerCase() === req.params.dinosaur?.toLowerCase());

      if (found) {
        return reply.send(found);
      }
    }
    return reply.status(404).send({ message: "Dinosaur not found" });
  },
);

await fastify.listen({ port: 8000 });
```

Let's run the server with `deno run -A main.ts` and check out
`localhost:8000/api`. You should see a list of dinosaurs:

```json
[
  {
    "name": "Aardonyx",
    "description": "An early stage in the evolution of sauropods."
  },
  {
    "name": "Abelisaurus",
    "description": "\"Abel's lizard\" has been reconstructed from a single skull."
  },
  {
    "name": "Abrictosaurus",
    "description": "An early relative of Heterodontosaurus."
  },
...
```

And when we go to `localhost:8000/api/aardonyx`:

```json
{
  "name": "Aardonyx",
  "description": "An early stage in the evolution of sauropods."
}
```

Great!

