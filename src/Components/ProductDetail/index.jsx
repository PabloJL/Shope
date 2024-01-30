import { useContext } from "react";
import "./styles.css";
import { IoMdCloseCircle } from "react-icons/io";
import { CartContext } from "../../Context";

function ProductDetail() {
  const context = useContext(CartContext);
  return (
    <aside
      className={`${
        context.isPDOpen ? " flex" : "hidden"
      } product-detail  flex-col fixed bg-bk right-0 rounded-lg drop-shadow-2xl`}
    >
      <section className="flex justify-between items-center p-6">
        <h1 className=" font-medium text-xl">Detail</h1>
        <button
          onClick={() => context.closeProductDetail()}
          className=" text-2xl"
        >
          <IoMdCloseCircle />
        </button>
      </section>
      <figure className=" px-6">
        <img
          className=" w-full h-full rounded-lg"
          src={context.product.images?.[0]}
          alt={context.product.title}
        />
      </figure>
      <div className="flex flex-col gap-2 p-6">
        <p className=" font-medium text-2xl">${context.product.price} </p>
        <p className=" font-medium text-xl">{context.product.title} </p>
        <p className=" font-light text-m">{context.product.description} </p>
      </div>
    </aside>
  );
}

export default ProductDetail;
