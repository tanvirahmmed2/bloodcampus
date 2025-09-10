import React, { createContext, useState } from "react";
import Blood from "../data/Blood";  
const district= [
  "select your district",
  "Dhaka",
  "Gazipur",
  "Kishoreganj",
  "Manikganj",
  "Munshiganj",
  "Narayanganj",
  "Narsingdi",
  "Rajbari",
  "Shariatpur",
  "Tangail",
  "Faridpur",
  "Gopalganj",
  "Madaripur",
  "Bandarban",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Cox's Bazar",
  "Cumilla",
  "Feni",
  "Khagrachhari",
  "Lakshmipur",
  "Noakhali",
  "Rangamati",
  "Bagerhat",
  "Chuadanga",
  "Jashore",
  "Jhenaidah",
  "Khulna",
  "Kushtia",
  "Magura",
  "Meherpur",
  "Narail",
  "Satkhira",
  "Barguna",
  "Barishal",
  "Bhola",
  "Jhalokati",
  "Patuakhali",
  "Pirojpur",
  "Bogura",
  "Joypurhat",
  "Naogaon",
  "Natore",
  "Chapainawabganj",
  "Pabna",
  "Rajshahi",
  "Sirajganj",
  "Dinajpur",
  "Gaibandha",
  "Kurigram",
  "Lalmonirhat",
  "Nilphamari",
  "Panchagarh",
  "Rangpur",
  "Thakurgaon",
  "Jamalpur",
  "Mymensingh",
  "Netrokona",
  "Sherpur",
  "Habiganj",
  "Moulvibazar",
  "Sunamganj",
  "Sylhet"
]
const bloodgroup=[
  "select your blood group",
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-"
]


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [donors, setDonors] = useState(Blood);

  return (
    <ThemeContext.Provider value={{ donors, setDonors, district, bloodgroup }}>
      {children}
    </ThemeContext.Provider>
  );
};
