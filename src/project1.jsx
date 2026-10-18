
import { useEffect, useState } from "react";
import "./project1.css";
import Orders from "./components/orders";
import Slider from "./components/slider";

function Project1() {  // sbse pehle product list .
  // const products = [
  //   {
  //     id: 1,
  //     title: "Wireless Bluetooth Headphones",
  //     image:
  //       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  //     rating: "4.5",
  //     reviews: "1,245",
  //     price: "1,499",
  //     oldPrice: "2,999",
  //   },
  //   {
  //     id: 2,
  //     title: "Smart Watch for Men & Women",
  //     image:
  //       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  //     rating: "4.3",
  //     reviews: "856",
  //     price: "1,999",
  //     oldPrice: "3,999",
  //   },
  //   {
  //     id: 3,
  //     title: "Laptop Backpack Waterproof",
  //     image:
  //       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  //     rating: "4.6",
  //     reviews: "2,105",
  //     price: "799",
  //     oldPrice: "1,599",
  //   },
  //   {
  //     id: 4,
  //     title: "Running Sports Shoes",
  //     image:
  //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  //     rating: "4.4",
  //     reviews: "3,542",
  //     price: "1,299",
  //     oldPrice: "2,499",
  //   },
  //   {
  //     id: 5,
  //     title: "Modern Sunglasses",
  //     image:
  //       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
  //     rating: "4.2",
  //     reviews: "745",
  //     price: "599",
  //     oldPrice: "999",
  //   },
  //   {
  //     id: 6,
  //     title: "Women's Handbag",
  //     image:
  //       "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
  //     rating: "4.5",
  //     reviews: "1,876",
  //     price: "899",
  //     oldPrice: "1,799",
  //   },
  //   {
  //     id: 1,
  //     title: "Wireless Bluetooth Headphones",
  //     image:
  //       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  //     rating: "4.5",
  //     reviews: "1,245",
  //     price: "1,499",
  //     oldPrice: "2,999",
  //   },
  //   {
  //     id: 2,
  //     title: "Smart Watch for Men & Women",
  //     image:
  //       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  //     rating: "4.3",
  //     reviews: "856",
  //     price: "1,999",
  //     oldPrice: "3,999",
  //   },
  //   {
  //     id: 3,
  //     title: "Laptop Backpack Waterproof",
  //     image:
  //       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  //     rating: "4.6",
  //     reviews: "2,105",
  //     price: "799",
  //     oldPrice: "1,599",
  //   },
  //   {
  //     id: 4,
  //     title: "Running Sports Shoes",
  //     image:
  //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  //     rating: "4.4",
  //     reviews: "3,542",
  //     price: "1,299",
  //     oldPrice: "2,499",
  //   },
  //   {
  //     id: 5,
  //     title: "Modern Sunglasses",
  //     image:
  //       "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
  //     rating: "4.2",
  //     reviews: "745",
  //     price: "599",
  //     oldPrice: "999",
  //   },
  //   {
  //     id: 6,
  //     title: "Women's Handbag",
  //     image:
  //       "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
  //     rating: "4.5",
  //     reviews: "1,876",
  //     price: "899",
  //     oldPrice: "1,799",
  //   }
  // ];

  // react in backend products import..
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProduct(data);
      })
      .catch((error) => {
        console.log("Error:", error)
      })
  }, [])


  // seearch functionality----
  const [searchTerm, setSearchTerm] = useState("");
  // search icon click functionality
  const [searched, setSearched] = useState("");

  const filteredProducts = product.filter((prod) =>
    prod.title.toLowerCase().includes(searched.toLowerCase())
  );


  // cart-----
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // remove from cart--
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  }

  // Add product form----
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const addProduct = () => {
    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: productName,
        price: Number(productPrice)
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        alert("Product added successfully")

        const newProduct = {
          _id: data.product._id,
          id: data.product._id,
          title: data.product.title,
          image: "",
          rating: "4.5",
          reviews: "0",
          price: data.product.price,
          oldPrice: data.product.price

        };
        setProduct((prevProducts) => [
          ...prevProducts, newProduct
        ]);

      })
      .catch((error) => {
        console.log("Error:", error);
      })
  }


  // react in DELETE function---

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, { method: "DELETE" });
      const data = await res.json();
      console.log(data);

      setProduct((prevProducts) => prevProducts.filter((product) => (product._id || product.id) !== id));
      alert("Product deleted successfully");
    } catch (error) {
      console.log("Error:", error)
    }
  };

  // react in EDIT function---
  const editProduct = (product) => {
    const newTitle = prompt("Enter new product title:", product.title);
    const newPrice = prompt("Enter new product price:", product.price);

    if (newTitle === null || newPrice === null) {
      return; // User canceled the prompt
    }

    updateProduct(product._id || product.id, {
      title: newTitle,
      price: Number(newPrice)
    });
  };

  // update product function---
  const updateProduct = async (id, updatedData) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
      });

      const data = await res.json();
      console.log(data);

      setProduct((prevProducts) => prevProducts.map((product) => (product._id || product.id) === id ? { ...product, ...updatedData } : product));
      alert("Product updated successfully");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // react in add to order functionality---

  const placeOrder = async () => {
    try {
      const orderItems = cart.map((item) => ({
        ...item,
        price:Number(String(item.price).replace(/./g,""))
      }));
      const totalAmount = orderItems.reduce((total, item) => total + item.price, 0);
    
      const orderData = {
        items: orderItems,
        totalAmount: totalAmount
      };

      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        alert(data.message || "Failed to place order");
        return;
      }
      alert("Order placed successfully");

    } catch (error) {
      console.log("Error:", error);
      alert("Failed to place order");
    }
  };


// ------------------------------------------

  return (
    <div className="amazon">

      {/* ==== NAVBAR ==== */}

      <header className="navbar">

        {/* Logo */}
        <div className="logo">
          <h1>amazon</h1>
          <span>.in</span>
        </div>

        {/* Location */}
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>

          <div>
            <small>Delivering to</small>
            <strong>Shimla 171001</strong>
          </div>
        </div>

        {/* Search */}
        <div className="searchBox">

          <select>
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Mobiles</option>
            <option>Books</option>
            <option>Home & Kitchen</option>
            <option>Beauty</option>
            <option>Accessories</option>
            <option>Sports</option>
            <option>amazon devices</option>

          </select>

          <input
            type="text"
            placeholder="Search Amazon.in"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearched(searchTerm)
              }
            }}
          />

          <button >
            <i className="fa-solid fa-magnifying-glass" onClick={() => setSearched(searchTerm)}></i>
          </button>

        </div>

        {/* Language */}
        <div className="language">
          🇮🇳
          <select>
            <option>EN</option>
            <option>HI</option>
            <option>TA</option>
            <option>TE</option>
            <option>KN</option>
            <option>ML</option>
            <option>BN</option>
            <option>MR</option>

          </select>
        </div>

        {/* Account */}
        <div className="account">
          <small>Hello, sign in</small>
          <strong>Account & Lists ▾</strong>
        </div>

        {/* Orders */}
        <div className="orders" onClick={() => (window.location.href = "/orders")}>
          <strong onClick={placeOrder}>Returns<br />& Orders</strong>
        </div>


        {/* Cart  */}
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <b>{cart.length}</b>
          <span>Cart</span>

        </div>
        <section className="cartItems">
          <h2>Cart Items</h2>
          {cart.length === 0 ? (
            <h5>Your cart is empty !</h5>
          ) : (
            cart.map((item, index) => (
              <div className="cartItem" key={index}>
                <img src={item.image}
                  alt={item.title} />

                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))
          )}
        </section>
        
      </header>


      {/* ==== MENU ==== */}

      <nav className="menu">

        <div>
          <i className="fa-solid fa-bars"></i>
          All
        </div>

        <div>Fresh</div>
        <div>MX Player</div>
        <div>Sell</div>
        <div>Best Sellers</div>
        <div>Today's Deals</div>
        <div>Mobiles</div>
        <div>Electronics</div>
        <div>Customer Service</div>
        <div>Prime</div>

      </nav>




      {/* product form */}
      <div className="add-product-form">
        <input type="text"
          placeholder="Product name"
          value={productName}
          onChange={(e) =>
            setProductName(e.target.value)}
        />

        <input type="number"
          placeholder="Product price"
          value={productPrice}
          onChange={(e) =>
            setProductPrice(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>





      {/* ==== HERO ==== */}

      <div className="centerContent">
        <section className="hero">
          <Slider />

          <div className="heroContent">
            <h1>Great Deals on Everything</h1>
            <p>Discover amazing products at the best prices.</p>
            <button>Shop Now</button>
          </div>

        </section>


        {/* ==== CATEGORY BOXES ==== */}

        <section className="categories">

          <div className="category">
            <h2 style={{ color: "black" }}>Up to 60% off | Electronics</h2>

            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
              alt="Laptop"
            />

            <a href="#">See all deals</a>
          </div>


          <div className="category">
            <h2 style={{ color: "black" }}>Home & Kitchen</h2>

            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600"
              alt="Kitchen"
            />

            <a href="#">Explore now</a>
          </div>


          <div className="category">
            <h2 style={{ color: "black" }}>Fashion deals</h2>

            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600"
              alt="Fashion"
            />

            <a href="#">Shop fashion</a>
          </div>


          <div className="category">
            <h2 style={{ color: "black" }}>Beauty products</h2>

            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
              alt="Beauty"
            />

            <a href="#">See more</a>
          </div>

        </section>


        {/*==== PRODUCTS functionality add start  ==== */}

        <section className="productsSection">

          <h2 style={{ color: 'black' }}>Best Sellers</h2>

          <div className="products">

            {filteredProducts.map((product) => (

              <div className="productCard" key={product._id || product.id}>

                <div className="productImage">

                  <img
                    src={product.image || "https://via.placeholder.com/150"}
                    alt={product.title}
                  />

                </div>

                <h3 style={{ color: "black" }}>
                  {product.title}
                </h3>

                <div className="rating">

                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>

                  <a href="#">
                    {product.reviews}
                  </a>

                </div>

                <div className="price">

                  <strong style={{ color: "black" }}>
                    ₹{product.price}
                  </strong>

                  <del>
                    ₹{product.oldPrice}
                  </del>

                </div>

                <p className="discount">
                  50% off
                </p>

                <button type="button" className="addCart" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>

                <button className="delete" onClick={() =>
                  deleteProduct(product._id || product.id)}>Delete</button>

                <button className="edit" onClick={() => editProduct(product)}>Edit</button>

              </div>

            ))}

          </div>

        </section>


        {/* ==== DEAL BANNER ==== */}

        <section className="deal">

          <div>
            <h1>Today's Deals</h1>

            <p>
              Don't miss these amazing offers!
            </p>

            <button>
              Shop Now
            </button>
          </div>

        </section>

      </div>

      {/* ==== FOOTER ==== */}

      <footer>

        <div className="backTop">
          Back to top
        </div>

        <div className="footerContent">

          <div>
            <h3>Get to Know Us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </div>

          <div>
            <h3>Connect with Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>

          <div>
            <h3>Make Money with Us</h3>
            <p>Sell on Amazon</p>
            <p>Protect and Build Your Brand</p>
            <p>Become an Affiliate</p>
          </div>

          <div>
            <h3>Let Us Help You</h3>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>Help</p>
          </div>

        </div>

        <div className="footerBottom">
          <h2>amazon.in</h2>
          <p>© 2026 Amazon Style Clone | For Learning</p>
        </div>

      </footer>

    </div>
  );
}

export default Project1;