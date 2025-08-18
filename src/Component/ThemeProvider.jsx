import React, { createContext, useState } from "react";
import Blood from "../data/Blood";  

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [donors, setDonors] = useState(Blood);

  return (
    <ThemeContext.Provider value={{ donors, setDonors }}>
      {children}
    </ThemeContext.Provider>
  );
};
