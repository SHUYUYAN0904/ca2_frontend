import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const BASE_URL = "https://c219-ca2-webservice-5o2l.onrender.com";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const passedActivity = location.state?.activity;

  const [activity_name, setActivityName] = useState(
    passedActivity ? passedActivity.activity_name : ""
  );
  const [activity_type, setActivityType] = useState(
    passedActivity ? passedActivity.activity_type : ""
  );
  const [activity_description, setActivityDescription] = useState(
    passedActivity ? passedActivity.activity_description : ""
  );
  const [activity_date, setActivityDate] = useState(
    passedActivity ? passedActivity.activity_date : ""
  );

  useEffect(() => {
    if (passedActivity) return;

    fetch(`${BASE_URL}/allactivities`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        let found = myJson.find((x) => String(x.id) === String(id));
        if (found) {
          setActivityName(found.activity_name);
          setActivityType(found.activity_type);
          setActivityDescription(found.activity_description);
          setActivityDate(found.activity_date);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, passedActivity]);

  const updateActivity = () => {
    let item = {
      activity_name: activity_name,
      activity_type: activity_type,
      activity_description: activity_description,
      activity_date: activity_date,
    };

    fetch(`${BASE_URL}/editactivities/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Edit Activity</h1>

      <div>
        <p>Activity Name:</p>
        <input value={activity_name} onChange={(e) => setActivityName(e.target.value)} />

        <p>Activity Type:</p>
        <input value={activity_type} onChange={(e) => setActivityType(e.target.value)} />

        <p>Description:</p>
        <input
          value={activity_description}
          onChange={(e) => setActivityDescription(e.target.value)}
        />

        <p>Date:</p>
        <input value={activity_date} onChange={(e) => setActivityDate(e.target.value)} />

        <br />
        <button onClick={updateActivity}>Save</button>
        <button onClick={() => navigate("/")}>Cancel</button>
      </div>
    </div>
  );
}
