const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
    const products = [
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
    ]
    res.json(products);
});
app.listen(5000, () => {
    console.log("Server running on port 5000")
});