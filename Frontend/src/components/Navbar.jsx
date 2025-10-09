import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import React from "react";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex sticky top-0 bg-gradient-to-r from-green-200 via-purple-300 to-blue-400 justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-blue-600">ChatGram </h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/stories" className="hover:text-blue-600">story</Link>

        {user ? (
          <>
            <Link to="/profile" className="hover:text-blue-600">Profile</Link>
            <button onClick={logout} className="text-red-500 font-semibold">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-600">Login</Link>
            <Link to="/register" className="hover:text-blue-600">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
