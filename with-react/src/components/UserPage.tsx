import { React } from "../../deps.client.ts";
import { useParams } from "../../deps.client.ts";

export function UserPage() {
  const { username } = useParams();
  return (
    <div>
      {username ?
        <h1>Hi, {username}!</h1>
      :
        <h1>No user found.</h1>
      }
    </div>
  );
}