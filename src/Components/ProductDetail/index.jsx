import "./styles.css";
import { IoMdCloseCircle } from "react-icons/io";

function ProductDetail() {
  return (
    <aside className="product-detail flex flex-col fixed bg-bk right-0 rounded-lg drop-shadow-2xl ">
      <section className="flex justify-between items-center p-6">
        <h1 className=" font-medium text-xl">Detail</h1>
        <button className=" text-2xl">
          <IoMdCloseCircle />
        </button>
      </section>
    </aside>
  );
}

export default ProductDetail;
