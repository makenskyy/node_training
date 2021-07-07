const catchAsync = require('../utils/asyncHandler');
const Product = require('../models/productModel');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    status: 'success',
    products: products
  })
})

exports.createProduct = catchAsync(async (req, res) => {
  const newProduct = await Product.create(req.body);
  console.log(newProduct);
  res.status(200).json({
    status: "success",
    newProduct: newProduct
  })
})

exports.deleteProduct = catchAsync(async (req, res) => {
  const deletedProduct = await Product.deleteOne({ _id: req.params.id })
  console.log(deletedProduct);
  res.status(200).json({
    status: "success",
    deletedProduct
  })
})

exports.updateProduct = catchAsync(async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body);
  console.log(updatedProduct);
  res.status(200).json({
    status: "success",
    updatedProduct
  })
})

exports.getProduct = catchAsync(async (req, res) => {
  const product = await Product.findById(req.params.id);
  console.log(product)
  res.status(200).json({
    status: "success",
    product
  })
})