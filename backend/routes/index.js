const express = require("express");
const router = express.Router();

const productRouter = require("./products");
const categoryRouter = require("./categories");
const authRouter = require("./auth");
const userRoute = require("./users");

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/auth", authRouter);
router.use("/users",userRoute)

module.exports = router;
