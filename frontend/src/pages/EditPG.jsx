import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

function EditPG() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pg, setPg] = useState({
    title: "",
    area: "",
    rent: "",
    food: false,
    gender: "any",
  });

  useEffect(() => {
    API.get("/pg/my").then((res) => {
      const found = res.data.find((p) => p._id === id);
      if (found) setPg(found);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPg({ ...pg, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/pg/${id}`, pg);
    navigate("/my-pgs");
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Edit PG ✏️</h2>

        <input style={styles.input} name="title" value={pg.title} onChange={handleChange} />
        <input style={styles.input} name="area" value={pg.area} onChange={handleChange} />
        <input style={styles.input} name="rent" value={pg.rent} onChange={handleChange} />

        <select style={styles.input} name="gender" value={pg.gender} onChange={handleChange}>
          <option value="any">Any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label style={styles.checkbox}>
          <input type="checkbox" name="food" checked={pg.food} onChange={handleChange} /> Food Available
        </label>

        <button style={styles.button}>Update PG</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    width: "380px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
  title: {
    marginBottom: "20px",
    color: "#4f46e5",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  checkbox: {
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
  },
};

export default EditPG;
