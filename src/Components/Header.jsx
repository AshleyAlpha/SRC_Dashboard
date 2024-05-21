import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigateToDashboard = () => {
    navigate('/');
  };

  return (
    <div className="w-full rounded-md bg-[#a3d6a3] text-2xl text-green-700 border mb-4 flex justify-between items-center">
      <div className="p-4 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md p-2"
        />
        <FontAwesomeIcon icon={faSearch} className="ml-2" />
      </div>

      <NavLink to="/">
      <button
          className="bg-green-700 text-green-200 py-1 px-4 rounded-3xl text-lg mr-4"
        >
          Back to Dashboard
        </button>
        </NavLink>

      <h1 className="text-center p-4">SRC_YOUR RELIABLE RIDE ANYTIME, ANYWHERE</h1>
      <div className="relative p-4 m-4">

        <NavLink to="/Addservice">
        <button
          className="bg-green-700 text-green-200 py-1 px-4 rounded-3xl text-lg"
        >
          Add Service
        </button>
        </NavLink>
        
      </div>
    </div>
  );
}

export default Header;
