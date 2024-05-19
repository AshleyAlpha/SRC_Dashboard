import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header';
import SideBar from '../Sidebar';

const Layout = () => {
  return (
    <div className="bg-green-200 p-3 w-full h-full">
        <Header/>
     <div className="flex w-full">
        <SideBar/>
        <div className="flex  bg-green-100 p-3 w-full rounded-lg border border-green-700">
        <Outlet/>
        </div>
     </div>
    </div>
  );
}

export default Layout