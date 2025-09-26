import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import React from "react";
import { StoryPage } from "./components/Story/StoryPage";

export default function App() {
  console.log("app is loaded");
  return (
    <AuthProvider>
      <Router>
        <div className="bg-gradient-to-r from-green-200 via-purple-300 to-blue-400 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stories" element={<StoryPage/>}/>
        </Routes> 

        </div>
      </Router>
    </AuthProvider>
  );
}
