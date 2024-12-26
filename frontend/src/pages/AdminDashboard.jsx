import React from 'react';
import HotelTable from '../components/HotelTable';
import Header from '../components/Header';

const AdminDashboard = () => (
  <div>
    <Header />
    <div className="container mt-5">
      <h1>Manage Hotels</h1>
      <HotelTable />
    </div>
  </div>
);

export default AdminDashboard;
