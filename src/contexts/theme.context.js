import { createContext, useState } from "react";

export const AppThemeContext = createContext({});

// const 

const AppThemeProvider = ({ children }) => {
  const [userSelectedTheme, setUserSelecetdTheme] = useState();


  return <AppThemeContext.Provider>{children}</AppThemeContext.Provider>;
};

export default AppThemeProvider;
