function PGCard({ pg, user }) {
  return (
    <div
     className="pg-card"
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "18px",
        width: "300px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        transition: "0.3s",
      }}
    >
      <h3 style={{ color: "#4f46e5" }}>{pg.title}</h3>

<p style={{ margin: "6px 0" }}>📍 <b>{pg.area}</b></p>
<p style={{ margin: "6px 0" }}>💰 Rent: ₹{pg.rent}</p>
<p style={{ margin: "6px 0" }}>🍽 Food: {pg.food ? "Available" : "Not Available"}</p>
<p style={{ margin: "6px 0" }}>👤 For: {pg.gender}</p>

      <hr style={{ margin: "10px 0" }} />

      {user ? (
        <>
          <p>👨 Owner: {pg.owner?.name}</p>
          <p>📧 {pg.owner?.email}</p>
        </>
      ) : (
        <button
          onClick={() => (window.location.href = "/login")}
          style={{
            width: "100%",
            padding: "10px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          Login to Contact Owner
        </button>
      )}
    </div>
  );
}

export default PGCard;
