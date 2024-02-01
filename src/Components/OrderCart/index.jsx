import { IoClose } from "react-icons/io5";

function OrderCart(props) {
  const { id, title, img, price, deleteItem } = props;

  return (
    <div className="flex justify-between items-center mb-4 w-80">
      <div className="flex items-center gap-2">
        <figure className=" w-20 h-20 flex-shrink-0">
          <img
            className=" w-full h-full rounded-lg object-cover"
            src={img}
            alt={title}
          ></img>
        </figure>
        <div className="flex flex-col">
          <p className="text-md font-light overflow-hidden overflow-ellipsis p-2">
            {title}
          </p>
        </div>
      </div>

      <section className="flex items-center gap-2">
        <p className=" text-lg font-medium">${price} </p>
        {deleteItem && (
          <button
            onClick={() => deleteItem(id)}
            className=" h-6 w-6 text-black cursor-pointer text-xl"
          >
            <IoClose />
          </button>
        )}
      </section>
    </div>
  );
}

export default OrderCart;
