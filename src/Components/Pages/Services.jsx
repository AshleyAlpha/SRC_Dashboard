import React from 'react';

const Services = ({ services = [] }) => {
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
        <thead className="bg-green-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-green-200 uppercase tracking-wider">Service</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-green-200 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-green-200 uppercase tracking-wider">Actions</th>
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-[#a3d6a3] mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-green-700"
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
