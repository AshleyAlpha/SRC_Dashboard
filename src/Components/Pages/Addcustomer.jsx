import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerForm = ({ addCustomer }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      errors.name = 'Name can only contain alphabetic characters and spaces!';
    }
    if (!email) {
      errors.email = 'Email is required!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid!';
    }
    return errors;
  };

  const navigateToDashboard = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debugging statement
    const formErrors = validate();
    
    if (Object.keys(formErrors).length === 0) {
      const newCustomer = { name, email };
      addCustomer(newCustomer);
      console.log('Navigating to Dashboard'); // Debugging statement
      navigateToDashboard(); // Call the navigate function here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="mx-auto max-w-md pt-16">
      <h2 className="text-lg mb-2">Add Customer</h2>
      <form className="items-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full md:w-96"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full md:w-96"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <button type="submit" className="bg-green-700 text-green-200 py-1 px-8 rounded-3xl text-lg ml-32">
          Add
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
