import React from "react";
import './App.css';
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
import ServiceForm from "./Components/Pages/Addservice";
import ServicePage from "./Components/Pages/ServicePage";
function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="Addservice" element={<ServiceForm />} />
            <Route path="ServicePage" element={<ServicePage />} />
            <Route path="services" element={<Services />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="users" element={<Users />} />
            <Route path="users/drivers" element={<Drivers />} />
            <Route path="users/customers" element={<Customers />} />
            <Route path="settings" element={<Settings />} />
            <Route path="bookings" element={<Bookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
