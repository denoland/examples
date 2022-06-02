import { h, Helmet } from "../../deps.ts";
import { MainLayout } from "../layouts/MainLayout.tsx";

export const HomePage = (props: any) => {
  const title = "Deno x NanoJSX";
  return (
    <MainLayout {...props}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <h1>{title}</h1>
      </div>
      <p>
        This is a starter NanoJSX app running on{" "}
        <a href="https://deno.land/" target="_blank">Deno</a>.
      </p>
      <h2>Install</h2>
      <p>
        You can scaffold this sample app on your local machine with the
        following command:
        <pre>
          $ deno run --allow-write --allow-net
          https://raw.githubusercontent.com/denoland/examples/main/init.ts
          with-nanojsx ./path/to/directory
        </pre>
      </p>
      <h2>Other Resources</h2>
      <ul>
        <li>
          <a
            href="/getting-started"
            target="_blank"
          >
            Getting Started Guide
          </a>
        </li>
        <li>
          <a
            href="https://github.com/denoland/examples/tree/main/with-nanojsx"
            target="_blank"
          >
            Source on GitHub
          </a>
        </li>
      </ul>
    </MainLayout>
  );
};
