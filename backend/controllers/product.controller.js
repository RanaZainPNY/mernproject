const express = require("express");
const productRouter = express.Router();
const Product = require("../models/product.model");

// Get all products
productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send("Error retrieving products");
  }
});

// Create a new product
productRouter.post("/create", async (req, res) => {
  try {
    const payload = req.body;
    const product = new Product(payload);
    const newProduct = await product.save();
    res.send(newProduct);
  } catch (error) {
    res.status(500).send("Error creating a new product");
  }
});

// Get a specific product by ID
productRouter.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).send("Product not found");
      return;
    }
    res.send(product);
  } catch (error) {
    res.status(500).send("Error retrieving product");
  }
});

module.exports = productRouter;
