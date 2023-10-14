//models
const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  reserved: Boolean, 
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
