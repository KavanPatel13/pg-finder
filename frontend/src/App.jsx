// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import './App.css'
import Register from "./pages/Register";
import PGSearch from "./pages/PGSearch";
import Navbar from "./components/Navbar";
import OwnerRoute from "./components/OwnerRoute";
import AddPG from "./pages/AddPG";
import MyPGs from "./pages/MyPGs";
import EditPG from "./pages/EditPG";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PGSearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-pg" element={<OwnerRoute><AddPG /></OwnerRoute>} />
        <Route path="/my-pgs"element={<OwnerRoute> <MyPGs /> </OwnerRoute> }/>
        <Route path="/edit-pg/:id" element={<OwnerRoute><EditPG /></OwnerRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
