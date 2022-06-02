import { h, Helmet, renderSSR } from "../../deps.ts";
import { NavBar } from "../components/NavBar.tsx";
import { Footer } from "../components/Footer.tsx";

export const MainLayout = (props: any) => {
  return (
    <div id="root">
      <NavBar />
      <div id="content">{props.children}</div>
      <Helmet footer>
        <Footer />
      </Helmet>
    </div>
  );
};
