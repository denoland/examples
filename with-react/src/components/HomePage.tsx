import { React } from "../../deps.client.ts";

export function HomePage() {
  return (
    <div>
      <h1>Deno x React</h1>
      <p>
        This is an example of a React app running on{" "}
        <a href="https://deno.land/" target="_blank">Deno</a>.
      </p>
      <p>
        <h2>Install</h2>
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/denoland/examples/tree/main/with-react"
            target="_blank"
          >
            Quickstart Guide
          </a>
        </li>
        <li>
          <a
            href="https://github.com/denoland/examples/tree/main/with-react"
            target="_blank"
          >
            Source on GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
