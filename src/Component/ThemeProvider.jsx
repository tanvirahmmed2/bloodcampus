import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const districts = [
  "Dhaka", "Gazipur", "Kishoreganj", "Manikganj", "Munshiganj", "Narayanganj",
  "Narsingdi", "Rajbari", "Shariatpur", "Tangail", "Faridpur", "Gopalganj",
  "Madaripur", "Bandarban", "Brahmanbaria", "Chandpur", "Chattogram",
  "Cox's Bazar", "Cumilla", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali",
  "Rangamati", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna",
  "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira", "Barguna", "Barishal",
  "Bhola", "Jhalokati", "Patuakhali", "Pirojpur", "Bogura", "Joypurhat",
  "Naogaon", "Natore", "Chapainawabganj", "Pabna", "Rajshahi", "Sirajganj",
  "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh",
  "Rangpur", "Thakurgaon", "Jamalpur", "Mymensingh", "Netrokona", "Sherpur",
  "Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"
];

const bloodgroups = [
  "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
];

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const api= 'http://localhost:5000/api'
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await fetch(`${api}/user`);
        const data = await res.json();
        setDonors(Array.isArray(data) ? data : []); // ensure array
      } catch (error) {
        console.error("Failed to fetch donors:", error);
        setDonors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const contextValue={
    districts, bloodgroups, donors, setDonors, loading , api
  }


  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
