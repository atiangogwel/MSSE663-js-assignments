const mongoose = require('mongoose');
const Pizza = require('./pizza.model'); // Import the pizza model

mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', async () => {
  // Insert dummy data
  const dummyPizzas = [
    { name: 'Margherita', size: 'Medium', price: 9.99 },
    { name: 'Pepperoni', size: 'Large', price: 11.99 },
    { name: 'Vegetarian', size: 'Large', price: 12.99 },
  ];

  try {
    await Pizza.insertMany(dummyPizzas);
    console.log('Dummy data inserted successfully');
  } catch (err) {
    console.error('Error inserting dummy data:', err);
  } finally {
    db.close(); // Close the database connection
  }
});
