import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./layout/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
