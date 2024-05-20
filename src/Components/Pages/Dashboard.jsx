import React, { useState } from 'react';
import Customers from './Customers';

const Dashboard = () => {
  const [customerData, setCustomerData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' }
    // Add more customer data as needed
  ]);

  return (
    <div>
      <h1>Dashboard</h1>
      <Customers data={customerData} />
    </div>
  );
};

export default Dashboard;
