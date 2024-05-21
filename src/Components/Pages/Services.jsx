import React from 'react';
// import airportImage from '../Images/airport.jpg';
// import citytourImage from '../Images/citytour.webp';

const Services = () => {
  const services = [
    {
      title: "Airport Transfers",
      description: "Hassle-free transportation to and from all major airports. We monitor flight schedules to ensure timely pickups and drop-offs.",
      // image: airportImage
    },
    {
      title: "Corporate Travel",
      description: "Professional and reliable transport for business meetings, conferences, and events. Our executive cars provide a comfortable and efficient way to travel.",
      // image: airportImage
    },
    {
      title: "City Tours",
      description: "Explore the city with our customized tour packages. Our knowledgeable drivers can guide you to the best attractions and hidden gems.",
      // image: citytourImage
    },
    {
      title: "Special Occasions",
      description: "Make your special events unforgettable with our luxury taxi services. Perfect for weddings, proms, or any celebration.",
      // image: citytourImage
    },
    {
      title: "Parcel Delivery",
      description: "Need to send a package urgently? We offer fast and secure parcel delivery services within the city.",
      // image: citytourImage
    }
  ];

  const handleEdit = (index) => {
    console.log(`Edit service at index ${index}`);
    // Implement your edit functionality here
  };

  const handleDelete = (index) => {
    console.log(`Delete service at index ${index}`);
    // Implement your delete functionality here
  };

  return (
    <div className="p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {services.map((service, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{service.title}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{service.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {/* <img className="w-20 h-20 object-cover" src={service.image} alt={service.title} /> */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
