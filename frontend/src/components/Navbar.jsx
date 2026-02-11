import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    setUser(u ? JSON.parse(u) : null);
  }, [location]);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#4f46e5",
        color: "#fff",
        padding: "14px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ cursor: "pointer", fontWeight: "600" }} onClick={() => navigate("/")}>
        🏠 PG Finder
      </h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {user?.role === "owner" && <Link to="/my-pgs">My PGs</Link>}
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}

        {user?.role === "owner" && <Link to="/add-pg">Add PG</Link>}

        {user && (
          <button
            onClick={logout}
            style={{
              background: "#fff",
              color: "#4f46e5",
              border: "none",
              padding: "6px 14px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
