import { Link, React } from "../../deps.client.ts";

export function NavBar() {
  return (
    <ul>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/users/lambtron">User</Link>
    </ul>
  );
}
