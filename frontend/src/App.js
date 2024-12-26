import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import AdminDashboard from './pages/AdminDashboard';
import GuestAdminDashboard from './pages/GuestAdminDashboard';
import GuestPage from './pages/GuestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/guest-admin" element={<GuestAdminDashboard />} />
        <Route path="/guest/:hotelId" element={<GuestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
