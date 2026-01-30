import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://c219-ca2-webservice-5o2l.onrender.com";

export default function View() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/allactivities`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setActivities(myJson);
      })
      .catch((err) => {
        console.log(err);          
      });
  }, []);


  return (
    <div>
      <h1>Activities</h1>

      {activities.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        <ul>
          {activities.map((a) => (
            <li key={a.id}>
              <b>{a.activity_name}</b> – {a.activity_type}
              <br />
              <Link to={`/edit/${a.id}`} state={{ activity: a }}>
                Edit
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
