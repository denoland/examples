import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Dinosaur from "../components/Dinosaur.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/:dinosaur",
    name: "Dinosaur",
    component: Dinosaur,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
