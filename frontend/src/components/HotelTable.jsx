import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCodeModal from './QrCodeModel';

const HotelTable = () => {
  const [hotels, setHotels] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [qrCodeData, setQrCodeData] = useState('');

  useEffect(() => {
    async function fetchHotels() {
      const { data } = await axios.get('/api/hotels');
      setHotels(data);
    }
    fetchHotels();
  }, []);

  const handleGenerateQR = async (hotelId) => {
    const { data } = await axios.get(`/api/hotels/${hotelId}/qrcode`);
    setQrCodeData(data.qrCodeUrl);
    setShowModal(true);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel._id}>
              <td>{hotel.name}</td>
              <td>{hotel.address}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleGenerateQR(hotel._id)}
                >
                  Generate QR
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <QRCodeModal
          qrCodeData={qrCodeData}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default HotelTable;
