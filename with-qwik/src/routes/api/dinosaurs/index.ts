import { RequestHandler } from "@builder.io/qwik-city";
import data from "~/data/dinosaurs.json" with { type: "json" };

export const onGet: RequestHandler = async ({ json }) => {
  const dinosaurs = data;
  json(200, dinosaurs);
};
