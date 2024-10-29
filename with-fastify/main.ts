import Fastify, {
  type FastifyReply,
  type FastifyRequest,
} from "npm:fastify@5.0.0";
import data from "./data.json" with { type: "json" };

const fastify = Fastify();

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
