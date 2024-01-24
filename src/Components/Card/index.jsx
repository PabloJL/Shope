// import React from 'react'

function Card() {
  return (
    <div className="cursor-pointer w-56 h-60 rounded-md  bg-bk drop-shadow-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0  bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 m-2">
          Shoes
        </span>
        <img
          src="https://urbanutility.mx/cdn/shop/files/CatalogoEdit2-2023-10-12T132329.448.png?v=1697236182"
          alt="product"
          className="w-full h-full object-cover rounded-lg"
        />
        <button className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-0.5 bg-bk">
          +
        </button>
      </figure>
      <p className="flex justify-between  px-3">
        <span className="text-lg font-light">Yeezy Slides</span>
        <span className="text-lg font-bold">$300</span>
      </p>
    </div>
  );
}

export default Card;
