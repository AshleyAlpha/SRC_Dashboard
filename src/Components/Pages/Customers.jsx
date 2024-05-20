import React from 'react';
import { useTable } from 'react-table';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Customers = ({ data }) => {
  console.log('Customers data:', data);

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Phone', accessor: 'phone' }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  if (!data) {
    return <div>No data available</div>;
  }

  const chartData = {
    labels: data.map(customer => customer.name),
    datasets: [
      {
        label: 'Customer IDs',
        data: data.map(customer => customer.id),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Customer Data'
      }
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full bg-white border-collapse">
          {/* Added inline style to set width to 100% */}
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-green-700 text-white">
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className="p-3 border-b border-gray-300">
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="p-3 border-b border-gray-300">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Customers.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    })
  ).isRequired
};

Customers.defaultProps = {
  data: []
};

export default Customers;
