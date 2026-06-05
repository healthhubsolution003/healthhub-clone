const mongoose = require("mongoose");



const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    subproducts: [
      {
        name: { type: String },
        description: { type: String },
      }
    ],
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Product", productSchema);