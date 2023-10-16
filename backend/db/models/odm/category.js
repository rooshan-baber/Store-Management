const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    Ccode: {
      type: Number,
      required: true
    },
    Cname: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
