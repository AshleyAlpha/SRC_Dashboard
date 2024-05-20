import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerForm = ({ addCustomer }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = { name, email };
    addCustomer(newCustomer);
    navigate('/'); // Redirect to dashboard
  };

  return (
    <div className="p-4">
      <h2 className="text-lg mb-4">Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-green-700 text-green-200 py-1 px-4 rounded-3xl text-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
