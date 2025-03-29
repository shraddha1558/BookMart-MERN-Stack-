import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Courses from "./Courses/Courses.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <div
        className={`min-h-screen transition-all ${theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
