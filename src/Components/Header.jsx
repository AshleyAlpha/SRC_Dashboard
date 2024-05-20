import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

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
      <h1 className="text-center p-4">Safety Ride Connect</h1>
      <div className="relative p-4 m-4">
        <button
          className="bg-green-700 text-green-200 py-1 px-4 rounded-3xl text-lg"
          onClick={handleDropdownToggle}
        >
          Add User
        </button>
        {dropdownVisible && (
          <div ref={dropdownRef} className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg z-10">
            <div className="p-2 hover:bg-green-200 cursor-pointer text-lg">
              <NavLink to="/Addcustomer">Customer</NavLink>
            </div>
            <div className="p-2 hover:bg-green-200 cursor-pointer text-lg">Driver</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
