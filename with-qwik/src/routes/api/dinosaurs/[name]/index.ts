import { RequestHandler } from "@builder.io/qwik-city";
import data from "~/data/dinosaurs.json" with { type: "json" };

export const onGet: RequestHandler = async ({ params, json }) => {
  const { name } = params;
  const dinosaurs = data;

  if (!name) {
    json(400, { error: "No dinosaur name provided." });
    return;
  }

  const dinosaur = dinosaurs.find(
    (dino) => dino.name.toLowerCase() === name.toLowerCase(),
  );

  if (!dinosaur) {
    json(404, { error: "No dinosaur found." });
    return;
  }

  json(200, dinosaur);
};
