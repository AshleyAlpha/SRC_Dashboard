import React from 'react';

const Services = () => {
  const services = [
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
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {services.map((service, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <div className="font-bold text-xl mb-2">{service.title}</div>
          <p className="text-gray-700 text-base">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
