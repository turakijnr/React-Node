const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
      required: false,
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);