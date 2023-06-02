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


// Edit a product
productRouter.put("/edit/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const payload = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, payload, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }

    res.send(updatedProduct);
  } catch (error) {
    res.status(500).send("Error editing the product");
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

// delete by Id
productRouter.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      res.status(404).send("Product not found");
      return;
    }
    res.send(deletedProduct);
  } catch (error) {
    res.status(500).send("Error deleting product");
  }
});

module.exports = productRouter;
