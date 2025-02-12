// components/DinosaurDetail.tsx

import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

async function fetchDinosaurDetail(name: string) {
  const response = await fetch(`http://localhost:8000/api/dinosaurs/${name}`);
  if (!response.ok) {
    throw new Error("Failed to fetch dinosaur detail");
  }
  return response.json();
}

export function DinosaurDetail() {
  const { name } = useParams({ from: "/dinosaur/$name" });
  const {
    data: dinosaur,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dinosaur", name],
    queryFn: () => fetchDinosaurDetail(name),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{name}</h2>
      <p>{dinosaur?.description}</p>
    </div>
  );
}
