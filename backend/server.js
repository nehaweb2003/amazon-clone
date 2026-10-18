const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
const Product = require("./Product")
const Order = require("./order")

// mongoose--
mongoose.connect("mongodb://127.0.0.1:27017/amazonClone")
    .then(() => {
        console.log("MongoDB connected")
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error)
    });




app.get("/", (req, res) => {
    res.send("Amazon backend is running")
});

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            title: "Wireless Bluetooth Headphones",
            image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
            rating: "4.5",
            reviews: "1,245",
            price: "1,499",
            oldPrice: "2,999",
        },
        {
            id: 2,
            title: "Smart Watch for Men & Women",
            image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
            rating: "4.3",
            reviews: "856",
            price: "1,999",
            oldPrice: "3,999",
        },
        {
            id: 3,
            title: "Laptop Backpack Waterproof",
            image:
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
            rating: "4.6",
            reviews: "2,105",
            price: "799",
            oldPrice: "1,599",
        },
        {
            id: 4,
            title: "Running Sports Shoes",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
            rating: "4.4",
            reviews: "3,542",
            price: "1,299",
            oldPrice: "2,499",
        },
        {
            id: 5,
            title: "Modern Sunglasses",
            image:
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
            rating: "4.2",
            reviews: "745",
            price: "599",
            oldPrice: "999",
        },
        {
            id: 6,
            title: "Women's Handbag",
            image:
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
            rating: "4.5",
            reviews: "1,876",
            price: "899",
            oldPrice: "1,799",
        },
        {
            id: 7,
            title: "Wireless Bluetooth Headphones",
            image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
            rating: "4.5",
            reviews: "1,245",
            price: "1,499",
            oldPrice: "2,999",
        },
        {
            id: 8,
            title: "Smart Watch for Men & Women",
            image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
            rating: "4.3",
            reviews: "856",
            price: "1,999",
            oldPrice: "3,999",
        },
        {
            id: 9,
            title: "Laptop Backpack Waterproof",
            image:
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
            rating: "4.6",
            reviews: "2,105",
            price: "799",
            oldPrice: "1,599",
        },
        {
            id: 10,
            title: "Running Sports Shoes",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
            rating: "4.4",
            reviews: "3,542",
            price: "1,299",
            oldPrice: "2,499",
        },
        {
            id: 11,
            title: "Modern Sunglasses",
            image:
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
            rating: "4.2",
            reviews: "745",
            price: "599",
            oldPrice: "999",
        },
        {
            id: 12,
            title: "Women's Handbag",
            image:
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
            rating: "4.5",
            reviews: "1,876",
            price: "899",
            oldPrice: "1,799",
        }
    ];
    res.json(products);
});

// GET route change ---
app.get("/api/db-products", async (req, res) => {
    try {
        const products = await Product.find();

        res.json(products);
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            message: "Products not found"
        });
    }
});

// post route
// app.post("/api/products", (req, res) => {
//     const newProduct = req.body;

//     console.log("New Product:", newProduct);

//     res.json({
//         massage: "Product added successfully",
//         product: newProduct
//     });
// });

// replace post--
app.post("/api/products", async (req, res) => {
    try {
        const newProduct = new Product(req.body);

        const saveProduct = await newProduct.save();

        console.log("product saved:", saveProduct);

        res.json({
            massage: "Product saved successfully",
            product: saveProduct
        });
    }
    catch (error) {
        console.log(error);

        res.status(500).json({
            massage: "Product not saved",
            error: error.message
        });
    }
});


// DELETE product
app.delete("/api/products/:id", async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deleteProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        res.json({
            message: "Product deleted successfully",
            product: deleteProduct
        });
    } catch (error) {
        console.log("Delete Error:", error);

        res.status(500).json({
            message: "Product delete failed"
        });
    }
});


// update product
app.put("/api/products/:id", async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate
            (req.params.id,
                req.body,
                { new: true });

        if (!updateProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        res.json({
            message: "Product updated successfully",
            product: updateProduct
        });
    } catch (error) {
        console.log("Update Error:", error);
        res.status(500).json({
            message: "Product update failed"
        });
    }
});


// POST route for creating an order
app.post("/api/orders", async (req, res) => {
    try{
        const {items, totalAmount} = req.body;
        const newOrder = new Order({
            items,
            totalAmount
        });
        const savedOrder = await newOrder.save();

        res.status(201).json({
            message: "Order placed successfully",
            order: savedOrder
        });
    } catch (error) {
        console.log("Order Error:", error);
        res.status(500).json({
            message: "Order placement failed"
        });
    }
});


// GET route for fetching all orders
app.get("/api/orders", async (req, res) => {
    try {
        const orders = await Order.find().sort({_id: -1}); 

        res.status(200).json({
            orders: orders
        });
    } catch (error) {
        console.log("Fetch Orders Error:", error);
        res.status(500).json({ 
            message: "Failed to fetch orders"
        });
    }
});




app.listen(5000, () => {
    console.log("Server running on port 5000")
});