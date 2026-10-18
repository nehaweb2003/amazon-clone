import { useEffect, useState } from "react";

function Orders() {
const [orders, setOrders] = useState([]);

// Database se orders lana
useEffect(() => {
const fetchOrders = async () => {
try {
const res = await fetch("http://localhost:5000/api/orders");
const data = await res.json();

console.log("Orders:", data);

if (res.ok) {
setOrders(data.orders);
}
} catch (error) {
console.log("Error:", error);
}
};

fetchOrders();
}, []);

return (
<section className="ordersSection">
<h2>My Orders</h2>

{orders.length === 0 ? (
<p>You have no orders to display.</p>
) : (
orders.map((order, index) => (
<div className="orderItem" key={order._id || index}>

<h3>Order #{index + 1}</h3>

<p>
<strong>Status:</strong>{" "}
{order.status || "Ordered"}
</p>

<p>
<strong>Total:</strong> ₹{order.totalAmount}
</p>

<h4>Products:</h4>

{order.items.map((item, itemIndex) => (
<div className="orderedProduct" key={item._id || itemIndex}>

<p>
<strong>{item.title}</strong>
</p>

<p>
Price: ₹{item.price}
</p>

<p>
Quantity: {item.quantity || 1}
</p>

</div>
))}

</div>
))
)}
</section>
);
}

export default Orders;
