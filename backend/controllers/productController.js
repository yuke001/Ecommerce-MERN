import Product from "../model/productModel.js";

// create product - /api/v1/products
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

// get all products - api/v1/products
export const getPrducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};

// get single product - api/v1/products/:id

export const getSingleProduct = async (req, res, next) => {
  let { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    // return next(new Error("Product Not Found"));
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
    });
  }
  res.status(200).json({
    success: true,
    product,
  });
};
