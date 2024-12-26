const Hotel = require('../models/hotelModel');
const qrcode = require('qrcode');

exports.addHotel = async (req, res) => {
  try {
    const { name, address } = req.body;
    const logo = req.file.path;

    const hotel = new Hotel({ name, address, logo });
    const savedHotel = await hotel.save();

    const qrCodeUrl = await qrcode.toDataURL(
      `http://localhost:3000/guest/${savedHotel._id}`
    );
    savedHotel.qrCode = qrCodeUrl;
    await savedHotel.save();

    res.status(201).json({ message: 'Hotel registered successfully', hotel });
  } catch (error) {
    res.status(500).json({ message: 'Error adding hotel', error });
  }
};
