import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { CartContext } from "../../Context";
import "./styles.css";
import OrderCart from "../OrderCart";
import { totalPrice } from "../../Utils";

function CheckOut() {
  const context = useContext(CartContext);

  const closeSide = () => {
    context.closeCheckOut();
    context.closeProductDetail();
  };

  const deleteItem = (id) => {
    const filteredProducts = context.cart.filter((product) => product.id != id);
    context.setCart(filteredProducts);
    context.setCount(context.count - 1);
  };

  return (
    <aside
      className={`${
        context.isCOOpen ? " flex" : "hidden"
      } checkOut  flex-col fixed bg-bk right-0 rounded-lg drop-shadow-2xl scrollable-cards`}
    >
      <section className="flex justify-between items-center p-6">
        <h1 className=" font-medium text-xl">My Order</h1>
        <button onClick={() => closeSide()} className=" text-2xl">
          <IoMdCloseCircle />
        </button>
      </section>
      <div className="px-4">
        {context.cart.map((product) => (
          <OrderCart
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.images?.[0]}
            price={product.price}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      <section className="p-6">
        <div className="flex justify-between items-center">
          <p className=" font-light">Total:</p>
          <p className=" font-medium text-lg">${totalPrice(context.cart)} </p>
        </div>
      </section>
    </aside>
  );
}

export default CheckOut;
