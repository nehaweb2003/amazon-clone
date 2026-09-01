
function Orders({ orders, setOrders }) {
  return (
    <section className="ordersSection">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders to display.</p>
      ) : (
        orders.map((order, index) => (
          <div className="orderItem" key={index}>
            <h3>Order #{index + 1}</h3>
            <p>Status: {order.status}</p>
          </div>
        ))
      )}
    </section>
  );
}   

export default Orders;