import React from 'react';
import GuestForm from '../components/GuestForm';
import Header from '../components/Header';

const GuestAdminDashboard = () => (
  <div>
    <Header />
    <div className="container mt-5">
      <h1>Manage Guests</h1>
      <GuestForm />
    </div>
  </div>
);

export default GuestAdminDashboard;
