import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceForm = ({ addService }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!title) {
      errors.title = 'Title is required';
    } else if (!/^[A-Za-z\s]+$/.test(title)) {
      errors.title = 'Title can only contain alphabetic characters and spaces!';
    }
    if (!description) {
      errors.description = 'Description is required!';
    } else if (description.length < 10) {
      errors.description = 'Description must be at least 10 characters long!';
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
      const newService = { title, description };
      addService(newService);
      console.log('Navigating to Dashboard'); // Debugging statement
      navigateToDashboard(); // Call the navigate function here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="mx-auto  pt-16 w-[50%]">
      <h2 className="text-lg mb-2">Add a Service</h2>
      <form className="items-center bg-green-200 w-full px-28 py-16" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="title">Service_Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full md:w-96"
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="description">Service_Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full md:w-96"
          />
          {errors.description && <p className="text-red-500">{errors.description}</p>}
        </div>
        <button type="submit" className="bg-green-700 text-green-200 py-1 px-8 rounded-3xl text-lg ml-32">
          Add
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;