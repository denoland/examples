// components/DinosaurList.tsx

import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

async function fetchDinosaurs() {
  const response = await fetch("http://localhost:8000/api/dinosaurs");
  if (!response.ok) {
    throw new Error("Failed to fetch dinosaurs");
  }
  return response.json();
}

export function DinosaurList() {
  const {
    data: dinosaurs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dinosaurs"],
    queryFn: fetchDinosaurs,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dinosaur List</h2>
      <ul className="space-y-2">
        {dinosaurs?.map((dino: { name: string; description: string }) => (
          <li key={dino.name}>
            <Link
              to="/dinosaur/$name"
              params={{ name: dino.name }}
              className="text-blue-500 hover:underline"
            >
              {dino.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
