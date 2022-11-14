import { reactive } from "vue";

export const store = reactive({
  dinosaur: {},
  setDinosaur(name, description) {
    this.dinosaur.name = name;
    this.dinosaur.description = description;
  },
});
