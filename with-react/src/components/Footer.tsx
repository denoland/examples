import { Link, React } from "../../deps.client.ts";

export function Footer() {
  return (
    <div>
      <hr />
      <p>
        This app is part of a larger set of{" "}
        <Link to="https://github.com/denoland/examples">
          sample starter apps
        </Link>{" "}
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
          href="https://github.com/denoland/examples/tree/main/with-react"
          target="_blank"
        >
          View Source
        </a>
      </ul>
    </div>
  );
}
