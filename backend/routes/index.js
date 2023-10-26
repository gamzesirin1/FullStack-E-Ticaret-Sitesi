const express = require("express");
const router = express.Router();

const productRouter = require("./products");
const categoryRouter = require("./categories");
const authRouter = require("./auth");

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/auth", authRouter);

module.exports = router;
