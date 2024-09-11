import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import '../App.css'; // Make sure to import the CSS file

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="header-container">
      <h1 className="header-title">Visiting Card Generator</h1>
     
    </header>
  );
}

export default Header;
