const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// post a product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);

    const savedProduct = await product.save();

    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      res.status(404).json({ message: "Ürünler bulunamadı." });
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: "Ürün bulunamadı." });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a product
router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: "Ürün bulunamadı." });
    }

    const updatedProduct = await Product.findByIdUpdate(productId, updates, {
      new: true,
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(err);
  }
});

// delete a product
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: "Ürün bulunamadı." });
    }

    await product.delete();

    res.status(200).json({ message: "Ürün silindi." });
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
