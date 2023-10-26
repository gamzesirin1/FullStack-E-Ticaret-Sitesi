const express = require("express");
const router = express.Router();

const Coupon = require("../models/Coupon");

// post a coupon
router.post("/", async (req, res) => {
  try {
    const { code } = req.body;

    const existingCoupon = await Coupon.findOne({ code });

    if (existingCoupon) {
      res.status(404).json({ message: "Bu kupon kodu zaten var." });
    }

    const coupon = new Coupon(req.body);

    const savedCoupon = await coupon.save();

    res.status(200).json(savedCoupon);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all coupons
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();

    if (!coupons) {
      res.status(404).json({ message: "Kuponlar bulunamadı." });
    }

    res.status(200).json(coupons);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single coupon
router.get("/:id", async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      res.status(404).json({ message: "Kupon bulunamadı." });
    }

    res.status(200).json(coupon);
  } catch (err) {
    res.status(500).json(err);
  }
});

// kupon koduna göre kupon getir
router.get("/code/:code", async (req, res) => {
  try {
    const coupon = await Coupon.findOne({ code: req.params.code });

    if (!coupon) {
      res.status(404).json({ message: "Kupon bulunamadı." });
    }

    res.status(200).json(coupon);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a coupon
router.patch("/:id", async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      res.status(404).json({ message: "Kupon bulunamadı." });
    }

    const updatedCoupon = await Coupon.findByIdAndUpdate(categoryId, updates, {
      new: true,
    });

    res.status(200).json(updatedCoupon);
  } catch (error) {
    res.status(500).json(err);
  }
});

// delete a coupon
router.delete("/:id", async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      res.status(404).json({ message: "Kupon bulunamadı." });
    }

    await coupon.delete();

    res.status(200).json({ message: "Kupon silindi." });
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
