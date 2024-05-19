import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import Services from "./Components/Pages/Services";
import Dashboard from "./Components/Pages/Dashboard";
import Testimonials from "./Components/Pages/Testimonials";
import Transactions from "./Components/Pages/Transactions";
import Users from "./Components/Pages/Users";
import Customers from "./Components/Pages/Customers";
import Drivers from "./Components/Pages/Drivers";
import Settings from "./Components/Pages/Settings";
import Bookings from "./Components/Pages/Bookings";


function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route exact path="/Layout/Users" element={<Users />} />
          <Route path="/Users/Drivers" element={<Drivers />} />
          <Route path="/Users/Customers" element={<Customers/>} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Bookings" element={<Bookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
