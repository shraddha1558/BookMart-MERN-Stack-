import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Home/Home.jsx";
import Courses from "./Courses/Courses.jsx";
import Navbar from "./Components/Navbar.jsx";
import SignUp from "./Components/Signup.jsx";
import ContactUs from "./Contact/ContactUs.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/Authprovider.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
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
          <Route
            path="/Course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
