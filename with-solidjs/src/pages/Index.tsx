// src/pages/Index.tsx
import { createSignal, onMount, For } from "solid-js";
import { A } from "@solidjs/router";
import type { Dino } from "../types.ts";

export default function Index() {
  const [dinosaurs, setDinosaurs] = createSignal<Dino[]>([]);

  onMount(async () => {
    try {
      const response = await fetch("/api/dinosaurs");
      const allDinosaurs = (await response.json()) as Dino[];
      setDinosaurs(allDinosaurs);
      console.log("Fetched dinosaurs:", allDinosaurs);
    } catch (error) {
      console.error("Failed to fetch dinosaurs:", error);
    }
  });

  return (
    <main>
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more.</p>
      <For each={dinosaurs()}>
        {(dinosaur) => (
          <A href={`/${dinosaur.name.toLowerCase()}`} class="dinosaur">
            {dinosaur.name}
          </A>
        )}
      </For>
    </main>
  );
}
