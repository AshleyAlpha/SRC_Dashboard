import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  FaUsers,
  FaServicestack,
  FaChevronDown,
  FaChevronUp,
  FaCarSide,
} from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BiMessageDetail } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
// import { AiOutlineTransaction } from "react-icons/ai";
// import { FiSettings } from "react-icons/fi";

const SideBar = () => {
  const [expandUsers, setExpandUsers] = useState(false);

  const toggleUsers = () => {
    setExpandUsers(!expandUsers);
  };

  return (
    <div className="fixed top-0 left-0 h-full pt-24 w-64 bg-green-100  shadow-lg flex flex-col justify-between">
      <div className="flex flex-col gap-3 p-4 text-2xl font-bold">
        <Link to="/Dashboard" className="text-green-700 flex items-center">
          <AiOutlineDashboard className="mr-2" />
          Dashboard
        </Link>

        <Link to="/" className="text-green-700 flex items-center">
          <ImUsers className="mr-2" />
          Customers
        </Link>

        <Link to="/Drivers" className="text-green-700 flex items-center">
          <FaCarSide className="mr-2" />
          Drivers
        </Link>

        <Link to="/ServicePage" className="text-green-700 flex items-center">
          <FaServicestack className="mr-2" />
          Services
        </Link>

        {/* <Link to="/Transactions" className="text-green-700 flex items-center">
          <AiOutlineTransaction className="mr-2" />
          Transactions
        </Link> */}

        <Link to="/Testimonials" className="text-green-700 flex items-center">
          <BiMessageDetail className="mr-2" />
          Testimonials
        </Link>

        {/* <Link to="/Bookings" className="text-green-700 flex items-center">
          <ImUsers className="mr-2" />
          Bookings
        </Link> */}
      </div>

      <div className="p-4">
      <NavLink to="/LogoutForm">
        <div className="flex items-center">
          <MdOutlineAdminPanelSettings className="mr-3 text-3xl text-green-700" /> {/* Adjusted icon size and color */}
          <button className="bg-green-700 text-green-200 py-2 px-6 rounded-full text-lg hover:bg-green-600 transition duration-300">
            Logout
          </button>
        </div>
      </NavLink>
    </div>
    </div>
  );
};

export default SideBar;
