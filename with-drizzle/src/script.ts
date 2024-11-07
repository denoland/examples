import {
  deleteDinosaurById,
  findDinosaurByName,
  insertDinosaur,
  insertTask,
  updateDinosaur,
} from "./db/db.ts";

// Create a new dinosaur.
await insertDinosaur({
  name: "Denosaur",
  description: "Dinosaurs should be simple.",
});

// Find that dinosaur by name.
const res = await findDinosaurByName("Denosaur");

// Create a task with that dinosaur by its id.
await insertTask({
  dinosaurId: res.id,
  description: "Remove unnecessary config.",
  isComplete: false,
});

// Update a dinosaur with a new description.
const newDeno = {
  id: res.id,
  name: res.name,
  description: "The simplest dinosaur.",
};
await updateDinosaur(newDeno);

// Delete the dinosaur (and any tasks it has).
await deleteDinosaurById(res.id);
