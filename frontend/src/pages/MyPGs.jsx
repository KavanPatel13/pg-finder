import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function MyPGs() {
  const [pgs, setPgs] = useState([]);
  const navigate = useNavigate();

  const fetchMyPGs = async () => {
    const res = await API.get("/pg/my");
    setPgs(res.data);
  };

  useEffect(() => {
    fetchMyPGs();
  }, []);

  const deletePG = async (id) => {
    if (!window.confirm("Are you sure you want to delete this PG?")) return;
    await API.delete(`/pg/${id}`);
    fetchMyPGs();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "20px" }}>My PGs</h2>

      {pgs.length === 0 ? (
        <p>No PGs added yet.</p>
      ) : (
        <div style={styles.grid}>
          {pgs.map((pg) => (
            <div key={pg._id} style={styles.card}>
              <h3>{pg.title}</h3>
              <p>📍 {pg.area}</p>
              <p>💰 ₹{pg.rent}</p>

              <div style={styles.actions}>
                <button
                  style={styles.edit}
                  onClick={() => navigate(`/edit-pg/${pg._id}`)}
                >
                  Edit
                </button>

                <button
                  style={styles.delete}
                  onClick={() => deletePG(pg._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    width: "280px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  edit: {
    background: "#22c55e",
    color: "#fff",
    border: "none",
    padding: "6px 14px",
    borderRadius: "6px",
  },
  delete: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 14px",
    borderRadius: "6px",
  },
};

export default MyPGs;
