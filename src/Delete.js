import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://c219-ca2-webservice-5o2l.onrender.com";

export default function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function deleteActivity() {
      try {
        const res = await fetch(API_URL + "/deleteactivities/" + id, {
          method: "DELETE"
        });

        if (!res.ok) throw new Error("Failed to delete");

        alert("Deleted!");
        navigate("/allactivities");
      } catch (err) {
        console.error(err);
        alert("Error deleting activity");
      }
    }

    deleteActivity();
  }, [id, navigate]);

  return <div>Deleting...</div>;
}