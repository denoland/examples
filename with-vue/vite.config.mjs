import { defineConfig } from "npm:vite@^3.1.3";
import vue from "npm:@vitejs/plugin-vue@^3.2.39";

// NOTE(bartlomieju): this is a papercut that shouldn't be required, see README.md
import "npm:vue@^3.2.39";
import "npm:vue-router@4";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
