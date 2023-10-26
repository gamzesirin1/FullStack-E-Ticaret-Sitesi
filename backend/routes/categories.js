const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// created category
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const category = new Category({
      name,
      img,
    });

    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// get category by id
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      res.status(404).json({ message: "Kategori bulunamadı." });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// update category by id
router.patch("/:id", async (req, res) => {
  try {
    const { name, img } = req.body;

    const category = await Category.findById(req.params.id);

    if (!category) {
      res.status(404).json({ message: "Kategori bulunamadı." });
    }

    category.name = name;
    category.img = img;

    await category.save();

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// delete category
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id);

    if (!category) {
      res.status(404).json({ message: "Kategori bulunamadı." });
    }

    res.status(200).json({ message: "Kategori silindi." });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
