import React, { useState } from 'react';
import Customers from './Customers';

const Dashboard = () => {
  const [customerData, setCustomerData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' }
    // Add more customer data as needed
  ]);

  // State variables for new customer input
  const [newCustomerName, setNewCustomerName] = useState('');
  const [newCustomerEmail, setNewCustomerEmail] = useState('');
  const [newCustomerPhone, setNewCustomerPhone] = useState('');

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check if any required field is empty
    if (!newCustomerName || !newCustomerEmail || !newCustomerPhone) {
      alert('Please fill in all fields');
      return;
    }
    const newCustomer = {
      id: customerData.length + 1, // Generate a unique ID for the new customer
      name: newCustomerName,
      email: newCustomerEmail,
      phone: newCustomerPhone
    };
    setCustomerData([...customerData, newCustomer]);
    // Reset form fields
    setNewCustomerName('');
    setNewCustomerEmail('');
    setNewCustomerPhone('');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newCustomerName}
          onChange={(e) => setNewCustomerName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={newCustomerEmail}
          onChange={(e) => setNewCustomerEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={newCustomerPhone}
          onChange={(e) => setNewCustomerPhone(e.target.value)}
        />
        <button type="submit">Add Customer</button>
      </form>
      <Customers data={customerData} />
    </div>
  );
};

export default Dashboard;
