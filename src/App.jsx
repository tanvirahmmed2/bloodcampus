import {  Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./layout/Home";
import Login from "./users/Login"
import Register from "./users/Register";
import About from "./pages/About";
import Donors from "./pages/Donors";
import Error from "./pages/Error";
import Profile from "./users/Profile";
import Contact from "./pages/Contact";
import Admin from "./users/Admin";
import ProtectedAdmin from "./Component/ProtectedAdmin";
import ProtectedRoute from "./Component/ProtectedRoute";
import ProtectedProfile from "./Component/ProtectedProfile";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-300 w-full overflow-x-hidden text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<ProtectedRoute><Login/></ProtectedRoute>}/>
        <Route path="/register" element={<ProtectedRoute><Register/></ProtectedRoute>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<ProtectedProfile><Profile/></ProtectedProfile>}/>
        <Route path="/admin" element={<ProtectedAdmin><Admin/></ProtectedAdmin>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
