const express = require('express');
const { addHotel } = require('../controllers/hotelController');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/add', upload.single('logo'), addHotel);

module.exports = router;
