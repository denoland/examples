// src/pages/Dinosaur.tsx
import { createSignal, onMount } from "solid-js";
import { A, useParams } from "@solidjs/router";
import type { Dino } from "../types.ts";

export default function Dinosaur() {
  const params = useParams();
  const [dinosaur, setDinosaur] = createSignal<Dino>({
    name: "",
    description: "",
  });

  onMount(async () => {
    const resp = await fetch(`/api/dinosaurs/${params.selectedDinosaur}`);
    const dino = (await resp.json()) as Dino;
    setDinosaur(dino);
    console.log("Dinosaur", dino);
  });

  return (
    <div>
      <h1>{dinosaur().name}</h1>
      <p>{dinosaur().description}</p>
      <A href="/"> Back to all dinosaurs</A>
    </div>
  );
}
