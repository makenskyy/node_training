const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ["Every product must have a name"]
  },
  price: {
    type: Number,
    required: ["Every product must have its own price"]
  }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
