// src/components/Complaints.js
import React, { useState } from 'react';

const complaints = [
  { id: 1, date: '2024-08-01', category: 'Service', status: 'Pending' },
  { id: 2, date: '2024-08-02', category: 'Maintenance', status: 'Approved' },
  // More complaints...
];

function Complaints() {
  const [sortKey, setSortKey] = useState('id');
  const [filterStatus, setFilterStatus] = useState('');

  const sortedComplaints = [...complaints].sort((a, b) => a[sortKey] - b[sortKey]);
  const filteredComplaints = sortedComplaints.filter(complaint => !filterStatus || complaint.status === filterStatus);

  return (
    <div className="complaints">
      <h2>Complaints Management</h2>
      <div className="filters">
        <label>
          Sort by:
          <select onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
            <option value="id">ID</option>
            <option value="date">Date</option>
            <option value="category">Category</option>
          </select>
        </label>
        <label>
          Filter by status:
          <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Resolved">Resolved</option>
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.id}</td>
              <td>{complaint.date}</td>
              <td>{complaint.category}</td>
              <td>{complaint.status}</td>
              <td>
                <button>Approve</button>
                <button>Resolve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Complaints;
