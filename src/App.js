import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import View from "./View";
import Edit from "./Edit";
import Add from "./Add";
import Delete from "./Delete";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/add">Add Activity</Link>
      </nav>

      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/allactivities" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}