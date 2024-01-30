import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { CartContext } from "../../Context";
import "./styles.css";
import OrderCart from "../OrderCart";

function CheckOut() {
  const context = useContext(CartContext);

  const closeSide = () => {
    context.closeCheckOut();
    context.closeProductDetail();
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
            title={product.title}
            img={product.images?.[0]}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
}

export default CheckOut;
