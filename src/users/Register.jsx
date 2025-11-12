import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import UsePageTitle from "../Component/UsePageTitle";
import { ThemeContext } from "../Component/ThemeProvider";

const Register = () => {
  UsePageTitle("Register Donor");
  const { bloodgroups, districts,api , upazilas} = useContext(ThemeContext);
  const navigate=useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bloodgroup: "",
    dateofbirth: "",
    lastdoneted:'',
    nid: "",
    phone: "",
    district: "",
    upazila:'',
    password: "",
    is_available: true,
  });
 
  

  const handleChange = (e) => {
    const { name, value, } = e.target;
    setFormData((prev)=>({...prev, [name]:value}));
  };



  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response= await axios.post(`${api}/user/register`, formData, {withCredentials: true} )
      alert(response.data.message)
      if(response.data.success){
        navigate('/login')
      }
    } catch (error) {
      alert(error?.response?.data?.message || 'failed to register')
      
    }
   
    
  };

  return (
    <section className="w-full min-h-screen p-4 flex items-center justify-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="w-full max-w-lg shadow-lg bg-white/5 rounded-2xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold  mb-2">Become a Donor</h1>
        <p className="mb-6 text-gray-700">Donate blood, save a life ❤️</p>

        <form className="w-full text-black/50 flex flex-col gap-4" onSubmit={handleSubmit}>

          
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Date of Birth & Last Donated */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dateofbirth" className="block mb-1 font-medium">Date of Birth</label>
              <input
                type="date"
                name="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            
            <div>
              <label htmlFor="lastdoneted" className="block mb-1 font-medium">Last Doneted (if applicable)</label>
              <input
                type="date"
                name="lastdoneted"
                value={formData.lastdoneted}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            
          </div>

          <div>
            <label htmlFor="bloodgroup" className="block mb-1 font-medium">Blood Group</label>
            <select
              name="bloodgroup"
              value={formData.bloodgroup}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">Select Blood Group</option>
              {bloodgroups.map((bg) => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="+880 1XXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* District */}
          <div>
            <label htmlFor="district" className="block mb-1 font-medium">Home District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">Select District</option>
              {districts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          
          
          <div>
            <label htmlFor="district" className="block mb-1 font-medium">Home District</label>
            <select
              name="upazila"
              value={formData.upazila}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">Select Upazilla</option>
              {upazilas.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Already a donor?{" "}
          <Link to="/login" className="text-red-600 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Register;
