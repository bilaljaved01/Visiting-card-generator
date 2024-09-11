import React from 'react';
import { ThemeProvider } from './Components/ThemeContext';
import Profile from './Components/Profile';
import Header from './Components/Header';
import "./App.css";

function App() {
  return (
    <ThemeProvider>
       <div className="app-container">
        <Header />
        <Profile />
      </div>
    </ThemeProvider>
  );
}

export default App;
