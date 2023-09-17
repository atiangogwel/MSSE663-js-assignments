const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3001;

//cors middleware to enable CORS
app.use(cors({ origin: 'http://localhost:4200' }));

// Define a route for pizzas
app.get('/api/pizzas', (req, res) => {
  // Sample pizza data
  const pizzas = [
    {
      id: 1,
      name: 'Margherita',
      description: 'Classic tomato and mozzarella cheese pizza',
      price: 9.99,
    },
    {
      id: 2,
      name: 'Pepperoni',
      description: 'Pepperoni and cheese pizza',
      price: 10.99,
    },
    {
      id: 3,
      name: 'Vegetarian',
      description: 'Assorted vegetables and cheese pizza',
      price: 11.99,
    },
  ];

  // Send pizza data as JSON response
  res.json(pizzas);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
