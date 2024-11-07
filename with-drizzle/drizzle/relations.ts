import { relations } from "drizzle-orm/relations";
import { dinosaurs, tasks } from "./schema";

export const tasksRelations = relations(tasks, ({one}) => ({
	dinosaur: one(dinosaurs, {
		fields: [tasks.dinosaurId],
		references: [dinosaurs.id]
	}),
}));

export const dinosaursRelations = relations(dinosaurs, ({many}) => ({
	tasks: many(tasks),
}));