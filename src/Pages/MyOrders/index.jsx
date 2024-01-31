// import React from "react";

import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { CartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(CartContext);
  return (
    <Layout>
      My Orders
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
