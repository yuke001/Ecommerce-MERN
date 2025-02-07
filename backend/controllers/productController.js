import Product from "../model/productModel.js";

// create product
export const createProduct = async (req, res, next) => {
  const { name, price, description, categories, seller, stock } = req.body;

  // Validate required fields 
  if (!name || !price || !description || !categories || !seller || !stock) {
    return next(new Error("Please Provide All Required Fields"));
  }

  const newProduct = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product Created Successfully",
    product: newProduct,
  });
};

// get all products
export const getPrducts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World",
  });
};
