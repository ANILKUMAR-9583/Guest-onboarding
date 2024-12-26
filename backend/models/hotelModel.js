const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  logo: { type: String, required: true },
  qrCode: { type: String }, // Stores QR code as a URL
});

module.exports = mongoose.model("Hotel", HotelSchema);
