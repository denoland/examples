/** @jsx h */
import { h } from "../../deps.ts";

export const UserPage = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>Hi, {username}!</h1>
      <p>
        This page grabs the `username` from the route `/users/:username`.
      </p>
      <p>
        Try updating the route with your own name!
      </p>
    </div>
  );
};
