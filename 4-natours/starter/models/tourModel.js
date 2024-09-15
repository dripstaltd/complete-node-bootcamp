const mongoose = require('mongoose');

// create a schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'], // validate the name
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'], // validate the price
  },
});

// create a mongoose model from the schema
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
