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
      <div className=" bg-bk p-4 drop-shadow-sm rounded-md  justify-center items-center">
        <div className="flex items-center justify-center relative  mb-6 ">
          <Link to="/my-orders" className="absolute left-0">
            <button className=" text-xl text-black ">
              <IoIosArrowBack />
            </button>
          </Link>
          <h1 className=" font-semibold text-xl"> My Order </h1>
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
          <p className=" font-normal text-lg">Total:</p>
          <p className=" font-medium text-lg">${total} </p>
        </div>
      </div>
    </Layout>
  );
}

export default MyOrder;
