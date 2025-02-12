// src/components/Layout.tsx

import { Link, Outlet } from "@tanstack/react-router";

export function Layout() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dinosaur Encyclopedia</h1>
      <nav className="mb-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
