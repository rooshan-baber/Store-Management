const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    Pcode: {
      type: Number,
      required: true
    },
    Pname: {
      type: String,
      required: true
    },
    Pprice: {
      type: Number,
      required: true
    },
    Pcat: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
