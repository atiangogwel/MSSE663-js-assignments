const express = require('express');
const router = express.Router();
const Pizza = require('../models/pizza'); 

// Fetch all pizzas
router.get('/', async (req, res) => {zzzzz
  try {
    const pizzas = await Pizza.find();

    if (pizzas.length === 0) {
      console.log('No pizzas found');
      return res.status(404).json({ message: 'No pizzas found' });
    }

    console.log('Fetched pizzas:', pizzas);
    res.status(200).json(pizzas);
  } catch (error) {
    console.error('Error fetching pizzas:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new pizza
router.post('/', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const pizza = new Pizza({ name, description, price });
    await pizza.save();
    res.status(201).json(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;