import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import View from "./View";
import Edit from "./Edit";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12 }}>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}
