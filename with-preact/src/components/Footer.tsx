/** @jsx h */
import { h } from "../../deps.ts";

export const Footer = () => {
  return (
    <div>
      <hr />
      <p>
        This app is part of a larger set of{" "}
        <a href="https://github.com/denoland/examples">
          sample starter apps
        </a>{" "}
        that can help you get started with Deno and Deno Deploy.
      </p>
      <ul>
        <a href="https://deno.land" target="_blank">Deno</a> |{" "}
        <a href="https://deno.com/deploy" target="_blank">Deno Deploy</a> |{" "}
        <a href="https://github.com/denoland/examples" target="_blank">
          Example Starter Apps
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/denoland/examples/tree/main/with-preact"
          target="_blank"
        >
          View Source
        </a>
      </ul>
    </div>
  );
};
