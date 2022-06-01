/** @jsx h */
import { h } from "../../deps.ts";

export const HomePage = () => {
  return (
    <div>
      <h1>Deno x Preact</h1>
      <p>
        This is an example of a React app running on{" "}
        <a href="https://deno.land/" target="_blank">Deno</a>.
      </p>
      <h2>Install</h2>
      <p>
        You can scaffold this sample app on your local machine with the
        following command:
        <pre>
          $ deno run --allow-write --allow-net
          https://raw.githubusercontent.com/denoland/examples/main/init.ts
          with-preact ./path/to/directory
        </pre>
      </p>
      <h2>Other Resources</h2>
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
};