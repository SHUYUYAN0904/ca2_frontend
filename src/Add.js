import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://c219-ca2-webservice-5o2l.onrender.com";

export default function Add() {
  const navigate = useNavigate();

  const [activity_name, setName] = useState("");
  const [activity_type, setType] = useState("");
  const [activity_description, setDescription] = useState("");
  const [activity_date, setDate] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      activity_name,
      activity_type,
      activity_description,
      activity_date
    };

    try {
      const res = await fetch(API_URL + "/addactivities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error("Failed to add");

      alert("Added!");
      navigate("/allactivities");
    } catch (err) {
      console.error(err);
      alert("Error adding activity");
    }
  }

  return (
    <div>
      <h2>Add activity</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Activity Name" value={activity_name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Activity Type" value={activity_type} onChange={(e) => setType(e.target.value)} />
        <input type="text" placeholder="Description" value={activity_description} onChange={(e) => setDescription(e.target.value)} />
        <input type="date" value={activity_date} onChange={(e) => setDate(e.target.value)} />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}