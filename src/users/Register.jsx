import React, { useState } from "react";
import { Link } from "react-router-dom";
import UsePageTitle from "../Component/UsePageTitle";
import { useContext } from "react";
import { ThemeContext } from "../Component/ThemeProvider";

const Register = () => {
  UsePageTitle("Register Donor");
  const { bloodgroups, districts } = useContext(ThemeContext)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bloodgroup: "",
    dateofbirth: "",
    phone: "",
    district: "",
    password: "",
    is_available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered Donor:", formData);
  };



  return (
    <section className="w-full min-h-screen p-4 flex items-center justify-center  ">
      <div className="w-full max-w-lg  shadow-sm bg-white/10 shadow-white rounded-xl p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-600 mb-2">Become a Donor</h1>
        <p className=" mb-4">Donate blood, save a life</p>

        <form className="w-full text-black flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label htmlFor="dateofbirth">date of birth</label>
            <input
              type="date"
              name="dateofbirth"
              value={formData.dateofbirth}
              onChange={handleChange}
              required
              className="w-1/2 px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>


          <div className="flex gap-2">
            <div>
              <label htmlFor="bloodgroup">blood group</label>
              <select
                name="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
                required
                className="w-1/2 px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">Select Blood Group</option>
                {bloodgroups.map((bg) => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="lastdoneted">last doneted</label>
              <input
                type="date"
                name="lastdoneted"
                value={formData.dateofbirth}
                onChange={handleChange}
                required
                className="w-1/2 px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

          </div>

          <div>
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone (+880)"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label htmlFor="district">home district</label>
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
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>




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
      </div>
    </section>
  );
};

export default Register;
