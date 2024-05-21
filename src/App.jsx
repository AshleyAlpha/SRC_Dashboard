import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import Services from "./Components/Pages/Services";
import Dashboard from "./Components/Pages/Dashboard";
import Testimonials from "./Components/Pages/Testimonials";
import Customers from "./Components/Pages/Customers";
import Drivers from "./Components/Pages/Drivers";
import ServiceForm from "./Components/Pages/Addservice";
import ServicePage from "./Components/Pages/ServicePage";
import LogoutForm from "./Components/Pages/LogoutForm";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/Addservice" element={<ServiceForm />} />
            <Route path="/ServicePage" element={<ServicePage />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Drivers" element={<Drivers />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/LogoutForm" element={<LogoutForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
