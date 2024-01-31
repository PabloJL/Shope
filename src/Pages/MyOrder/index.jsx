// import React from 'react'
import { useContext } from "react";
import { CartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCart from "../../Components/OrderCart";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function MyOrder() {
  const context = useContext(CartContext);
  const path = window.location.pathname;
  let index = path.substring(path.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;
  const total = context.order?.[index]?.totalPrice;

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <button className=" h-6 w-6 text-black ">
            <IoIosArrowBack />
          </button>
        </Link>
        <h1> My Order </h1>
      </div>

      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
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
