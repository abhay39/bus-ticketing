"use client";
import React, { useEffect, useState,createContext } from "react";

interface MainProviderType {
  children: React.ReactNode;
}

export const ThemeContext=createContext({})

const MainProvider: React.FC<MainProviderType> = ({ children }) => {
  const [themeClass, setThemeClass] = useState("light-theme");
  const [userInfo,setUserInfo]=useState('');

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThemeClass(storedTheme === "light" ? "light-theme" : "dark-theme");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{setThemeClass,themeClass,setUserInfo,userInfo}}>
      <main className={`min-h-screen ${themeClass}`}>
      {children}
      </main>
    </ThemeContext.Provider>
  );
};

export default MainProvider;
