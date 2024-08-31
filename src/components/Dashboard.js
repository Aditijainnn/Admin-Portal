import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const complaintData = [
  { name: 'Pending', value: 12 },
  { name: 'Approved', value: 8 },
  { name: 'Resolved', value: 20 },
];

const barData = [
  { name: 'Jan', count: 5 },
  { name: 'Feb', count: 10 },
  { name: 'Mar', count: 15 },
  // More data...
];

const COLORS = ['#FFBB28', '#FF8042', '#0088FE'];

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats-cards">
        <div className="card">
          <h3>Total Registered Complaints</h3>
          <p>40</p>
        </div>
        <div className="card">
          <h3>Pending Complaints</h3>
          <p>12</p>
        </div>
        <div className="card">
          <h3>Approved Complaints</h3>
          <p>8</p>
        </div>
        <div className="card">
          <h3>Resolved Complaints</h3>
          <p>20</p>
        </div>
      </div>
      <div className="chart-container">
        <h3>Complaint Status</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={complaintData}
            cx={200}
            cy={200}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {complaintData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default Dashboard;
