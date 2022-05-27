import { Navigate, React, Route, Routes } from "../deps.client.ts";
import { NavBar } from "./components/NavBar.tsx";
import { HomePage } from "./components/HomePage.tsx";
import { AboutPage } from "./components/AboutPage.tsx";
import { UserPage } from "./components/UserPage.tsx";

export default function App(props) {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route path="/users/:username" element={<UserPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
