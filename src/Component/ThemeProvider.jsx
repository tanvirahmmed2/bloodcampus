import axios from "axios";
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
  const api = 'http://localhost:5000/api'
  const base_url = 'http://localhost:5000'
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const fetchServer = async () => {
      try {
        const response = await axios.get(`${base_url}`, { withCredentials: true })
        if (response.data.success) {
          setLoading(false)

        }
      } catch (error) {
        setLoading(false)
        alert('Failed to load server')

      }
    }
    fetchServer()
  }, [])

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get(`${api}/user`, { withCredentials: true })
        setDonors(response.data.payload)

      } catch (error) {
        console.log(error?.response?.data?.message || 'Failed to fetch user')

      }
    };

    fetchDonors();
  }, []);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${api}/user/protected`, { withCredentials: true })
        console.log(response.data.message)
        if (response.data.success) {
          setIsLogin(true)
          setUser(response.data.payload)
          if (response.data.payload.role === 'admin') {
            setIsAdmin(true)
          } else {
            setIsAdmin(false)
          }
        } else {
          setIsAdmin(false)
          setIsLogin(false)
          setUser([])
        }

      } catch (error) {
        console.log(error?.response?.data?.message || 'Failed to authenticate user')

      }
    }
    fetchUser()
  }, [])

  const contextValue = {
    districts, bloodgroups, donors, setDonors, loading, api,
    user, setUser, isAdmin, setIsAdmin, isLogin, setIsLogin,
    
  }


  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
