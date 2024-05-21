
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ServiceChart = ({ services }) => {
  const data = {
    labels: services.map((service) => service.title),
    datasets: [
      {
        label: 'Number of Services',
        data: services.map(() => 1), // Each service counts as 1
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Services Overview',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ServiceChart;
