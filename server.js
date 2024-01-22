
require('dotenv').config();
const express = require('express'); // Importing Express
const app = express(); // Creating an Express application

// A GET route that sends back a simple message
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a port and start listening for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
