const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const Pizza = require('./models/pizza');
const pizzasRouter = require('./routes/pizzas');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware
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

//call routtes 
app.use('/pizzas', pizzasRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
