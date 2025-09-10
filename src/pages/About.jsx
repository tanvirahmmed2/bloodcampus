import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import UsePageTitle from '../Component/UsePageTitle'


const About = () => {
  UsePageTitle("About")
  return (
    <div className=" min-h-screen py-12 px-6 md:px-20 flex flex-col items-center justify-center gap-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold  mb-6">About Us</h1>
        <p className="text-lg  leading-relaxed mb-8">
          Welcome to <span className="font-semibold ">LifeSaver</span>,
          a community-driven initiative dedicated to connecting voluntary blood donors
          with those in urgent need. Our mission is simple — <strong>save lives by
            making blood donation easier, faster, and more accessible</strong>.
        </p>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full flex flex-col md:flex-row items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8 mt-10 w-full">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Every drop of blood can save a life. We aim to build a strong and
              reliable network of donors across Bangladesh, so that no patient
              suffers due to lack of available blood.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Thousands of people need blood transfusions every day due to accidents,
              surgeries, childbirth, and illnesses. By donating blood, you give
              someone a second chance at life.
            </p>
          </div>
        </div>
      </motion.div>


      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-red-100 shadow-inner rounded-2xl p-8 mt-12 text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Be a Hero — Donate Blood
        </h2>
        <p className="text-gray-700 mb-6">
          Whether you are a first-time donor or a regular one, your contribution
          matters. Together, we can ensure that blood is always available for
          those in need.
        </p>
        <Link to="/register" className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition">
          Join as a Donor
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
