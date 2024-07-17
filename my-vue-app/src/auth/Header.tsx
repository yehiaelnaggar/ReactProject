import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/authContext";

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>
      <nav>
        <Link to="/home" className="mr-4">
          Home
        </Link>
        <Link to="/characters" className="mr-4">
          Characters
        </Link>
        <Link to="/favourites" className="mr-4">
          Favourites
        </Link>
        {user ? (
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="mr-4">
              Login
            </Link>
            <Link to="/register" className="mr-4">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
