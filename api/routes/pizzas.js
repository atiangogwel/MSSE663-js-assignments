const express = require('express');
const router = express.Router();
const Pizza = require('../models/pizza'); 

//add pizza 
router.post('/', async (req, res) => {
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
//Retrieve pizzas by id 
router.get('/:id', async (req, res) => {
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

// Retrieve all pizzas
router.get('/', async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (error) {
    console.error('Error retrieving pizzas:', error);
    res.status(500).json({ error: 'An error occurred while retrieving pizzas.' });
  }
});

router.delete('/:id', async (req, res) => {
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
router.put('/:id', async (req, res) => {
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

//reserve a pizza 
router.post('/:id/reserve', async (req, res) => {
  try {
    const pizzaId = req.params.id;
    const pizza = await Pizza.findById(pizzaId);

    if (!pizza) {
      return res.status(404).json({ message: 'Pizza not found' });
    }

    if (pizza.reserved) {
      return res.status(400).json({ message: 'Pizza is already reserved' });
    }

    // Mark the pizza as reserved
    pizza.reserved = true;
    await pizza.save();

    return res.status(200).json({ message: 'Pizza reserved successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error reserving pizza', error: error.message });
  }
});

router.post('/:id/unreserve', async (req, res) => {
  try {
    const pizzaId = req.params.id;
    const pizza = await Pizza.findById(pizzaId);

    if (!pizza) {
      return res.status(404).json({ message: 'Pizza not found' });
    }

    if (!pizza.reserved) {
      return res.status(400).json({ message: 'Pizza is already unreserved' });
    }

    // Mark the pizza as unreserved
    pizza.reserved = false;
    await pizza.save();

    return res.status(200).json({ message: 'Pizza unreserved' });
  } catch (error) {
    return res.status(500).json({ message: 'Error unreserving pizza', error: error.message });
  }
});

module.exports = router;
