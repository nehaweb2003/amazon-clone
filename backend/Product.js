const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    image: String,
    rating: Number,
    reviews: Number,
    price: Number,
    oldPrice: Number
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;