import { Schema, model } from "mongoose";

let productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      maxLength: [100, "Name cannot exceed 100 characters"],
    },
    price: {
      type: Number,
      default: 0.0,
      maxLength: [5, "Price cannot exceed 5 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        image: {
          type: String,
          required: true,
        },
      },
    ],
    categories: {
      type: String,
      required: [true, "Please provide a category"],
      enum: {
        values: [
          "Electronics",
          "Cameras",
          "Mobile Phones",
          "Laptops",
          "Accessories",
          "Headphones",
          "Food",
          "Books",
          "Clothes/Shoes",
          "Beauty/Health",
          "Sports",
          "Outdoor",
          "Home",
        ],
        message: "Please select correct category for product",
      },
    },
    seller: {
      type: String,
      required: [true, "Please provide a seller"],
    },
    stock: {
      type: Number,
      required: [true, "Please provide a stock"],
      maxLength: [20, "Stock cannot exceed 20 characters"],
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

export default Product;
