const mongoose = require("mongoose");

const CouponSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    discountPercent: {
      // indirim yüzdesi
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", CouponSchema);
