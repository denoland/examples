import { Link, React } from "../../deps.client.ts";

export function NavBar() {
  return (
    <ul>
      <Link to="/">Home</Link> | <Link to="/getting-started">Getting Started</Link> |{" "}
      <Link to="/users/lambtron">Dynamic Routes</Link>
    </ul>
  );
}
