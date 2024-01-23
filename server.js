
require('dotenv').config();
const express = require('express'); // Importing Express
const app = express(); // Creating an Express application

// A GET route that sends back a simple message
app.get('/', (_req, res) => {
  res.send('Hello World!');
});

// Define a port and start listening for requests
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// Routes
app.get('/recipes', (req, res) => {
  // Logic to get all recipes
  res.send('All Recipes');
});

app.post('/recipes', (req, res) => {
  // Logic to create a new recipe
  res.send('Recipe created');
});

app.get('/recipes/:id', (req, res) => {
  // Logic to get a single recipe by ID
  res.send(`Recipe with ID ${req.params.id}`);
});

app.put('/recipes/:id', (req, res) => {
  // Logic to update a recipe
  res.send(`Recipe with ID ${req.params.id} updated`);
});

app.delete('/recipes/:id', (req, res) => {
  // Logic to delete a recipe
  res.send(`Recipe with ID ${req.params.id} deleted`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
