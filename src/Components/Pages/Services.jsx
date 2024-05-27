import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ServicesChart from './ServiceChart'; // Import the chart component

const Services = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(10); // Number of services per page, you can adjust this as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://safety-drive-connect-backend-project-2.onrender.com/api/v1/allservices');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup code here if needed
    };
  }, []);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);

  const handleEdit = (index) => {
    console.log(`Edit service at index ${index}`);
  };

  const handleDelete = async (serviceId) => {
    try {
      await axios.delete("https://safety-drive-connect-backend-project-2.onrender.com/api/v1/service/:id=" + serviceId);
      setServices(services.filter(service => service._id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="py-2">Service</th>
              <th className="py-2">Description</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentServices.map((service, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{service.name}</td>
                <td className="py-2">{service.description}</td>
                <td className="py-2">
                  <button onClick={() => handleEdit(index)} className="text-[#a3d6a3] mr-2 mb-2 block">Edit</button>
                  <button onClick={() => handleDelete(service._id)} className="text-green-700 block">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Pagination
          itemsPerPage={servicesPerPage}
          totalItems={services.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl mb-4">Services Chart</h2>
        <ServicesChart services={services} />
      </div>
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex justify-between">
        {currentPage > 1 && (
          <li className="page-item">
            <button 
              onClick={() => paginate(currentPage - 1)} 
              className="page-link bg-green-700 text-green-100 p-2"
            >
              Previous
            </button>
          </li>
        )}
        {currentPage < pageNumbers.length && (
          <li className="page-item">
            <button 
              onClick={() => paginate(currentPage + 1)} 
              className="page-link bg-green-700 text-green-100 p-2"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Services;
