import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../Component/ThemeProvider";

const Login = () => {
  const { api} = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api}/user/login`, formData, { withCredentials: true })
      alert(response.data.message)
      if (response.data.success) {
        window.location.replace('/')
      }
    } catch (error) {
      alert(error?.response?.data?.message || 'failed to log in')

    }
  };


  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-20 bg-gradient-to-b ">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="w-full max-w-3xl bg-white shadow-xl rounded-xl flex flex-col md:flex-row items-center justify-center p-6 gap-6">

        {/* Info Panel */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-red-600 font-semibold">Donate Blood, Save Life</p>
          <p>Welcome to</p>
          <h1 className="text-3xl md:text-4xl font-bold text-red-700">Blood Campus</h1>
          <p className="text-gray-600">A humanitarian organization to save lives</p>
          <p className="text-gray-500 text-sm">Keep donating blood and save people</p>
          <Link
            to="/register"
            className="text-red-600 font-semibold hover:underline mt-2"
          >
            New donor? Register here
          </Link>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col gap-4 text-black"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-medium">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition mt-2"
          >
            Login
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Login;
