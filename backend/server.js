const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pizza', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const pizzaSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });
  
const Pizza = mongoose.model('Pizza', pizzaSchema);
module.exports = Pizza;
//API routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
