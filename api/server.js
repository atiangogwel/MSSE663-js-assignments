const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const Pizza = require('./models/pizza');
const pizzaRouter = require('./routes/pizzas');
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
app.get('/pizzas/:id', async (req, res) => {
  const pizzaId = req.params.id;

  try {
    const pizza = await Pizza.findById(pizzaId);
    if (!pizza) {
      res.status(404).json({ error: 'Pizza not found' });
      return;
    }

    res.status(200).json(pizza);
  } catch (error) {
    console.error('Error fetching pizza details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// retrieve pizzas
app.get('/pizzas', async (req, res) => {
  try {
    // Query the database to retrieve all pizzas
    const pizzas = await Pizza.find();
    // Send the pizzas as a JSON response
    res.json(pizzas);
  } catch (error) {
    // Handle any errors that occur during the query
    console.error('Error retrieving pizzas:', error);
    res.status(500).json({ error: 'An error occurred while retrieving pizzas.' });
  }
});

app.post('/pizzas', async (req, res) => {
  try {
    const newPizza = new Pizza({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    });
    
    // Save the new pizza to the database
    const savedPizza = await newPizza.save();
    
    // Send the saved pizza as a JSON response
    res.json(savedPizza);
  } catch (error) {
    // Handle any errors that occur during the save operation
    console.error('Error adding pizza:', error);
    res.status(500).json({ error: 'An error occurred while adding the pizza.' });
  }
});

// route to delete a pizza by ID
app.delete('/pizzas/:id', async (req, res) => {
  const pizzaId = req.params.id;

  try {
    const result = await Pizza.deleteOne({ _id: pizzaId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Pizza not found' });
    }

    res.json({ message: 'Pizza deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pizza' });
  }
});

//edit/update pizza
app.put('/pizzas/:id', async (req, res) => {
  const pizzaId = req.params.id;
  const updatedPizza = req.body; 

  try {
    const pizza = await Pizza.findByIdAndUpdate(pizzaId, updatedPizza, { new: true });
    res.status(200).json(pizza);
  } catch (error) {
    console.error('Error updating pizza:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
