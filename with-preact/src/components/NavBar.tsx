/** @jsx h */
import { h, Link } from "../../deps.ts";

export const NavBar = () => {
  return (
    <ul>
      <Link href="/">Home</Link> | <Link href="/getting-started">Getting Started</Link> |{" "}
      <Link href="/users/lambtron">User</Link>
    </ul>
  );
};
