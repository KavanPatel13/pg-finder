// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../services/api";

// function Register() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "user",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/auth/register", form);

//       alert("Registered successfully");

//       // 🔴 THIS WAS MISSING
//       navigate("/login"); // go to login after register
//     } catch (err) {
//       alert(err.response?.data?.message || "Register failed");
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <h2>Register</h2>

//       <input
//         name="name"
//         placeholder="Name"
//         value={form.name}
//         onChange={handleChange}
//       />
//       <br />

//       <input
//         name="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <br />

//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={handleChange}
//       />
//       <br />

//       <select
//         name="role"
//         value={form.role}
//         onChange={handleChange}
//       >
//         <option value="user">User</option>
//         <option value="owner">PG Owner</option>
//       </select>
//       <br />

//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Register;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleRegister}>
        <h2 style={styles.title}>Create Account 🚀</h2>
        <p style={styles.subtitle}>Join PG Finder today</p>

        <input
          style={styles.input}
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          style={styles.input}
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <select
          style={styles.input}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="owner">PG Owner</option>
        </select>

        <button style={styles.button}>Register</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "380px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  title: {
    color: "#4f46e5",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#666",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
  width: "100%",
  padding: "10px",
  background: "#4f46e5",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  transition: "0.3s",
},
};

export default Register;
