import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://c219-ca2-webservice-5o2l.onrender.com";

export default function View() {
  const [activities, setActivities] = useState([]);

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
    <div className="container">
      <h1>Activities</h1>

      {activities.length === 0 ? (
        <p className="empty-state">No activities found.</p>
      ) : (
        <ul className="activity-list">
          {activities.map((a) => (
            <li key={a.id} className="activity-item">
              <div className="activity-name">{a.activity_name}</div>
              <div className="activity-type">{a.activity_type}</div>
              <div className="activity-date">
                Date: {a.activity_date.split('T')[0]}
              </div>
              <Link to={`/edit/${a.id}`} state={{ activity: a }} className="edit-link">
                Edit
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}