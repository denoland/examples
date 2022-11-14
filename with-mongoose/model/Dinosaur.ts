import { model, Schema } from "npm:mongoose@^6.7";

// Define schema.
const dinosaurSchema = new Schema({
  name: { type: String, unique: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Validations
dinosaurSchema.path("name").required(true, "Dinosaur name cannot be blank.");
dinosaurSchema.path("description").required(
  true,
  "Dinosaur description cannot be blank.",
);

// Methods.
dinosaurSchema.methods = {
  // Update description.
  updateDescription: async function (description: string) {
    this.description = description;
    return await this.save();
  },
};

// Export model.
export default model("Dinosaur", dinosaurSchema);
