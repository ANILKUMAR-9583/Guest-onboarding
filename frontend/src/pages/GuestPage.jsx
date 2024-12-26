import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GuestPage = () => {
  const { hotelId } = useParams();
  const [hotelDetails, setHotelDetails] = useState(null);

  useEffect(() => {
    async function fetchHotelDetails() {
      const { data } = await axios.get(`/api/hotels/${hotelId}`);
      setHotelDetails(data);
    }
    fetchHotelDetails();
  }, [hotelId]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const guestData = Object.fromEntries(formData);
    guestData.hotelId = hotelId;

    try {
      await axios.post('/api/guests/add', guestData);
      alert('Form Submitted Successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mt-5">
      {hotelDetails && (
        <>
          <h1>{hotelDetails.name}</h1>
          <p>{hotelDetails.address}</p>
        </>
      )}
      <form onSubmit={handleFormSubmit}>
        <input name="fullName" placeholder="Full Name" required />
        <input name="mobileNumber" placeholder="Mobile Number" required />
        <input name="address" placeholder="Address" required />
        <select name="purpose" required>
          <option value="Business">Business</option>
          <option value="Personal">Personal</option>
          <option value="Tourist">Tourist</option>
        </select>
        <input type="date" name="stayFrom" required />
        <input type="date" name="stayTo" required />
        <input name="email" placeholder="Email" required />
        <input name="idProof" placeholder="ID Proof" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GuestPage;
