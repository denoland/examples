import { h } from "../../deps.ts";

export const NavBar = () => {
  return (
    <ul>
      <a href="/">Home</a> | <a href="/getting-started">Getting Started</a> |{" "}
      <a href="/users/lambtron">Dynamic Routes</a>
    </ul>
  );
};
