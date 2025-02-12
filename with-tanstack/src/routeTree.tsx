// ./src/routeTree.tsx

import { RootRoute, Route } from "@tanstack/react-router";
import { DinosaurList } from "./components/DinosaurList";
import { DinosaurDetail } from "./components/DinosaurDetail";
import { Layout } from "./components/Layout";

const rootRoute = new RootRoute({
  component: Layout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: DinosaurList,
});

const dinosaurRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "dinosaur/$name",
  component: DinosaurDetail,
});

export const routeTree = rootRoute.addChildren([indexRoute, dinosaurRoute]);
