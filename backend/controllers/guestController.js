const Guest = require('../models/guestModel');

exports.addGuest = async (req, res) => {
  try {
    const guest = new Guest(req.body);
    await guest.save();
    res.status(201).json({ message: 'Guest details saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding guest', error });
  }
};

exports.getGuestsByHotel = async (req, res) => {
  try {
    const guests = await Guest.find({ hotelId: req.params.hotelId });
    res.status(200).json(guests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching guests', error });
  }
};
