const express = require("express");
const router = express.Router();

const productRouter = require("./products");
const categoryRouter = require("./categories");
const authRouter = require("./auth");
const userRoute = require("./users");
const couponRoute= require("./coupons")


router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/auth", authRouter);
router.use("/users",userRoute)
router.use("/coupons",couponRoute)

module.exports = router;
