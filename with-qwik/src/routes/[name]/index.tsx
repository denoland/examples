import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import type { Dino } from "~/types";
import data from "~/data/dinosaurs.json" with { type: "json" };

export const useDinosaurDetails = routeLoader$(({ params }): Dino => {
  const dinosaurs = data;
  const dinosaur = dinosaurs.find(
    (dino: Dino) => dino.name.toLowerCase() === params.name.toLowerCase(),
  );

  if (!dinosaur) {
    throw new Error("Dinosaur not found");
  }

  return dinosaur;
});

export default component$(() => {
  const dinosaurSignal = useDinosaurDetails();

  return (
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">{dinosaurSignal.value.name}</h1>
      <p class="mb-4">{dinosaurSignal.value.description}</p>
      <Link href="/" class="text-blue-600 hover:underline">
        Back to all dinosaurs
      </Link>
    </div>
  );
});
