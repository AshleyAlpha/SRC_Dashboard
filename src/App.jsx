import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Services from "./Components/Pages/Services";
import Dashboard from "./Components/Pages/Dashboard";
import Testimonials from "./Components/Pages/Testimonials";
import Customers from "./Components/Pages/Customers";
import Drivers from "./Components/Pages/Drivers";
import AddService from "./Components/Pages/Addservice";
import LogoutButton from "./Components/Pages/LogoutForm";
import ServicesChart from "./Components/Pages/ServiceChart";
import UpdateService from "./Components/Pages/Editservice";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/Addservice" element={<AddService />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Drivers" element={<Drivers />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/ServiceChart" element={<ServicesChart />} />
            <Route path="/Editservice/:id" element={<UpdateService />} />
            <Route path="/LogoutForm" element={<LogoutButton />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
