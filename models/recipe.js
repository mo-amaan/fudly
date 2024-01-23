const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  // Add any other fields you find necessary
});

module.exports = mongoose.model('Recipe', recipeSchema);
