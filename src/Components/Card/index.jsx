// import React from 'react'
import { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { CartContext } from "../../Context";

function Card(data) {
  const { count, setCount } = useContext(CartContext);
  const [active, setActive] = useState(false);
  const contextS = useContext(CartContext);

  const addToCart = (product) => {
    setCount(count + 1);
    setActive(!active);

    contextS.setCart([...contextS.cart, product]);
  };

  const showProduct = (product) => {
    contextS.openProductDetail();
    contextS.setProduct(product);
  };

  return (
    <div
      className="cursor-pointer w-56 rounded-md  bg-bk  h-80"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-3/5">
        <span className="absolute bottom-0 left-0 rounded-lg text-black text-xs px-3 py-0.5 m-2 bg-bk/60">
          {data.data.category.name}
        </span>
        <img
          src={data.data.images[0]}
          alt={data.data.title}
          className="w-full h-full rounded-lg object-cover"
          // eslint-disable-next-line react/no-unknown-property
          referrerPolicy="no-referrer"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(data.data);
          }}
          className={`absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-0.5 ${
            active ? " bg-ac" : " bg-bk"
          }`}
        >
          <IoMdAdd />
        </button>
      </figure>
      <div className="flex flex-col p-5 mt-0  h-2/5 justify-between">
        <p className="text-sm font-normal">{data.data.title}</p>
        <p className="text-lg font-bold self-end">${data.data.price}</p>
      </div>
    </div>
  );
}

export default Card;
