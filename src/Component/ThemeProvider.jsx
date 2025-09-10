import React, { createContext  } from "react";

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
  
  return (
    <ThemeContext.Provider value={{ districts, bloodgroups }}>
      {children}
    </ThemeContext.Provider>
  );
};
