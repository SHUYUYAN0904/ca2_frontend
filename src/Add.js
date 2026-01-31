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
    <div className="container">
      <h1>Add Activity</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Activity Name:</label>
          <input 
            type="text" 
            placeholder="Enter activity name" 
            value={activity_name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Activity Type:</label>
          <input 
            type="text" 
            placeholder="Enter activity type" 
            value={activity_type} 
            onChange={(e) => setType(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <input 
            type="text" 
            placeholder="Enter description" 
            value={activity_description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input 
            type="date" 
            value={activity_date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn-primary">Add Activity</button>
          <button type="button" className="btn-secondary" onClick={() => navigate("/allactivities")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}