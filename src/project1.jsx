
import { useEffect, useState } from "react";
import "./project1.css";
import Orders from "./components/orders";
import Slider from "./components/slider";

function Project1() {  // sbse pehle product list .
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
    }
  ];

  //popup--
  useEffect(()=>{
    alert(
    ("I build an Amazon clone using React.js, javaScript, css, Node.js. \n"+
      "I used REST APIs and Fetch APIs for frontend- backend communication and immplemented product listing , search, cart, slider and resposive design.")
    )
  })

  // seearch functionality
  const [searchTerm, setSearchTerm] = useState("");
  // search icon click functionality
  const [searched, setSearched] = useState("");

  const filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(searched.toLowerCase())
  );



  // cart-----
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // remove from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  }

  // backend products
  const [productive, setProductive] = useState([]);
  useEffect(()=>{
    fetch("http:/localhost:5000/api/products")
    .then((res)=>res.json())
    .then((data)=>{
      setProductive(data)
    })
    .catch((error)=>{
      console.log("Error",error)
    })
  },[])

  //orders functionality
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);



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
        <div className="orders" onClick={() => setShowOrders(!showOrders)}>
          <strong>Returns<br />& Orders</strong>
        </div>


        {/* Cart */}
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
      {showOrders && <Orders orders={orders} setOrders={setOrders} />}



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

            {productive.map((product) => (

              <div className="productCard" key={product.id}>

                <div className="productImage">

                  <img
                    src={product.image}
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