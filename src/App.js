import { Routes, Route, Link } from "react-router-dom";


import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Home from './Home'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>

        </Routes>

      <Footer/>
      
    </div>
  );
}


export default App;
