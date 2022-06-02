import { h, Helmet } from "../../deps.ts";
import { MainLayout } from "../layouts/MainLayout.tsx";

export const GettingStartedPage = (props: any) => {
  const title = "Getting Started";
  return (
    <MainLayout {...props}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <h1>{title}</h1>
      </div>
      <p>
        Getting started with NanoJSX and Deno.
      </p>
    </MainLayout>
  );
};
