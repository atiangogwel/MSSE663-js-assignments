const express = require('express');
const router = express.Router();
const Pizza = require('../models/pizza.model');

// Fetch all pizzas
router.get('/pizzas', async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    console.error('Error fetching pizzas:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
