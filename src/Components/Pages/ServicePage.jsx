// ServicePage.js
import React, { useState } from 'react';
import ServiceForm from './Addservice';
import Services from './Services';
import ServiceChart from './ServiceChart';

const ServicePage = () => {
  const [services, setServices] = useState([
    {
      title: "Airport Transfers",
      description: "Hassle-free transportation to and from all major airports. We monitor flight schedules to ensure timely pickups and drop-offs."
    },
    {
      title: "Corporate Travel",
      description: "Professional and reliable transport for business meetings, conferences, and events. Our executive cars provide a comfortable and efficient way to travel."
    },
    {
      title: "City Tours",
      description: "Explore the city with our customized tour packages. Our knowledgeable drivers can guide you to the best attractions and hidden gems."
    },
    {
      title: "Special Occasions",
      description: "Make your special events unforgettable with our luxury taxi services. Perfect for weddings, proms, or any celebration."
    },
    {
      title: "Parcel Delivery",
      description: "Need to send a package urgently? We offer fast and secure parcel delivery services within the city."
    }
  ]);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  return (
    <div className="ServicePage">
      {/* <ServiceForm addService={addService} /> */}
      <Services services={services} />
      <ServiceChart services={services} />
    </div>
  );
};

export default ServicePage;
