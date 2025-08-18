import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./layout/Home";
import Login from "./users/Login"
import Register from "./users/Register";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-red-200 w-full overflow-x-hidden text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
