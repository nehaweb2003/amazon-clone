const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    items: [
        {
            title:String,
            price:Number,
            quantity:Number,
            image:String
        }
    ],
    totalAmount: Number,
    status: {
        type: String,
        default: "Placed"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;