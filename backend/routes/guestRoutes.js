const express = require('express');
const { addGuest, getGuestsByHotel } = require('../controllers/guestController');

const router = express.Router();

router.post('/add', addGuest);
router.get('/:hotelId', getGuestsByHotel);

module.exports = router;
