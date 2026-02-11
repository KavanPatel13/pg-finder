import { useState } from "react";
import API from "../services/api";
import PGCard from "../components/PGCard";

function PGSearch() {
  const [area, setArea] = useState("");
  const [pgs, setPgs] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const searchPG = async () => {
    const res = await API.get(`/pg/search?area=${area}`);
    setPgs(res.data);
  };

//   return (
    
//     <div
//   style={{
//     padding: "40px",
//     animation: "fadeIn 0.6s ease-in",
//   }}
// >

//       <h1 style={{ marginBottom: "10px" }}>Find Your Perfect PG 🏡</h1>
//       <p style={{ marginBottom: "20px", color: "#555" }}>
//         Search trusted PGs without brokers
//       </p>

//       <div style={{ display: "flex", gap: "10px" }}>
//         <input
//           placeholder="Enter area (e.g. Navrangpura)"
//           value={area}
//           onChange={(e) => setArea(e.target.value)}
//           style={{ width: "250px" }}
//         />
//         <button
//           onClick={searchPG}
//           style={{
//             background: "#4f46e5",
//             color: "#fff",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "8px",
//           }}
//         >
//           Search
//         </button>
//       </div>

//       <div
//         style={{
//           marginTop: "30px",
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "25px",
//         }}
//       >
//         {pgs.map((pg) => (
//           <PGCard key={pg._id} pg={pg} user={user} />
//         ))}
//       </div>
//     </div>
    
//   );
return (
  <div
    style={{
      animation: "fadeIn 0.6s ease-in",
    }}
  >
    {/* HERO SECTION */}
    <div
      style={{
        background: "linear-gradient(135deg, #4f46e5, #6366f1)",
        color: "#fff",
        padding: "60px 40px",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Find Your Perfect PG 🏡
      </h1>

      <p style={{ fontSize: "18px", opacity: 0.9 }}>
        Broker-free, trusted PGs in your area
      </p>

      {/* SEARCH BAR */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          placeholder="Enter area (e.g. Navrangpura)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          style={{
            width: "260px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
  onClick={searchPG}
  disabled={!area}
  style={{
    opacity: area ? 1 : 0.6,
    cursor: area ? "pointer" : "not-allowed",
    background: "#fff",
    color: "#4f46e5",
    border: "none",
    padding: "10px 20px",
    borderRadius: "10px",
    fontWeight: "bold",
  }}
>

          Search
        </button>
      </div>
    </div>

    {/* PG LIST SECTION */}
    <div
  style={{
    padding: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  }}
>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {/* {pgs.map((pg) => (
          <PGCard key={pg._id} pg={pg} user={user} />
        ))} */}
        {pgs.length === 0 ? (
            <p style={{ color: "#666", fontSize: "16px" }}>
                No PGs found. Try searching another area.
             </p>
            ) : (
                 pgs.map((pg) => (
                  <PGCard key={pg._id} pg={pg} user={user} />
                 ))
            )}

      </div>
    </div>
  </div>
);

}

export default PGSearch;
