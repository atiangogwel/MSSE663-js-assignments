const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const Pizza = require('./models/pizza'); 
const pizzaRoutes = require('./routes/pizzas');
//middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

mongoose.connect('mongodb://localhost/pizzas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
