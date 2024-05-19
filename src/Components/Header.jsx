import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="w-[100%] rounded-md bg-[#a3d6a3] text-2xl text-green-700 border mb-4 flex justify-between items-center">
      <div className="p-4 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md p-2"
        />
        <FontAwesomeIcon icon={faSearch} className="ml-2" />
      </div>
      <h1 className="text-center p-4 ">Safety Ride Connect</h1>
      <h1 className="text-left p-4">Header</h1>
      
    </div>
  );
}

export default Header;

