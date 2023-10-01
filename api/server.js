const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const Pizza = require('./models/pizza');
const pizzaRouter = require('./routes/pizzas'); 

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

// Define a route to retrieve pizzas
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

// Define a route to add a new pizza
app.post('/pizzas', async (req, res) => {
  try {
    // Create a new pizza instance based on the request body
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

// Define a route to delete a pizza by ID
app.delete('/pizzas/:id', async (req, res) => {
  try {
    const pizzaId = req.params.id;
    
    // Check if the pizza with the given ID exists in the database
    const pizzaToDelete = await Pizza.findById(pizzaId);
    
    if (!pizzaToDelete) {
      return res.status(404).json({ error: 'Pizza not found' });
    }
    
    // Delete the pizza from the database
    await pizzaToDelete.remove();

    res.json({ message: 'Pizza deleted successfully' });
  } catch (error) {
    console.error('Error deleting pizza:', error);
    res.status(500).json({ error: 'An error occurred while deleting the pizza.' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
