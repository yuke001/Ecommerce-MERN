import Product from "../model/productModel.js";
import asyncHandler from "express-async-handler";

// create product - /api/v1/products
export const createProduct = asyncHandler(async (req, res, next) => {
  const { name, price, description, categories, seller, stock } = req.body;

  // Validate required fields
  // if (!name || !price || !description || !categories || !seller || !stock) {
  //   throw new Error("Please Provide All Required Fields");
  // }
  const missingFields = [];

  if (!name) missingFields.push("Please provide name");
  if (!price) missingFields.push("Please provide price");
  if (!description) missingFields.push("Please provide description");
  if (!categories) missingFields.push("Please provide categories");
  if (!seller) missingFields.push("Please provide seller");
  if (!stock) missingFields.push("Please provide stock");

  if (missingFields.length > 0) {
    throw new Error(missingFields.join(", "));
  }

  const newProduct = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product Created Successfully",
    product: newProduct,
  });
});

// get all products - api/v1/products
export const getPrducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
});

// get single product - api/v1/products/:id

export const getSingleProduct = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    // return next(new ErrorHandler("Product Not Found", 404));
    throw new Error("Product Not Found");
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// update product - api/v1/products/:id

export const updateProduct = asyncHandler(async (req, res, next) => {
  let { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product Not Found");
  }
  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "Product Updated Successfully",
    product: updatedProduct,
  });
});

// delete product - api/v1/products/:id

export const deleteProduct = asyncHandler(async (req, res, next) => {
  let { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product Not Found");
  }

  await Product.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});
