import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GuestForm = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    async function fetchGuests() {
      const { data } = await axios.get('/api/guests');
      setGuests(data);
    }
    fetchGuests();
  }, []);

  const handleEdit = (id) => {
    console.log('Edit Guest:', id);
  };

  const handlePrint = (id) => {
    window.print();
  };

  return (
    <div className="mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Mobile</th>
            <th>Purpose</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest._id}>
              <td>{guest.fullName}</td>
              <td>{guest.mobileNumber}</td>
              <td>{guest.purpose}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(guest._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => handlePrint(guest._id)}
                >
                  Print
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestForm;
