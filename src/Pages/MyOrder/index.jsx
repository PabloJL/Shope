// import React from 'react'
import { useContext } from "react";
import { CartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCart from "../../Components/OrderCart";

function MyOrder() {
  const context = useContext(CartContext);
  const total = context.order?.slice(-1)[0]?.totalPrice;
  return (
    <Layout>
      My Order
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0]?.products.map((product) => (
          <OrderCart
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.images?.[0]}
            price={product.price}
          />
        ))}
      </div>
      <div className="flex justify-between items-center w-80 mt-4">
        <p className=" font-light">Total:</p>
        <p className=" font-medium text-lg">${total} </p>
      </div>
    </Layout>
  );
}

export default MyOrder;
