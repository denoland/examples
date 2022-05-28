/** @jsx h */
import { h, Link } from "../../deps.ts";

export const NavBar = () => {
  return (
    <ul>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/users/lambtron">User</Link>
    </ul>
  );
};
