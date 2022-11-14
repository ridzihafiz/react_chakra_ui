import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
