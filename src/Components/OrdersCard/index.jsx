// import { IoClose } from "react-icons/io5";
import { dateTime } from "../../Utils";

function OrdersCard(props) {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-6 flex-shrink-0  ">
      <div className="flex gap-4 justify-between w-80 bg-bk h-14 items-center p-4 rounded-lg drop-shadow-sm">
        <p className=" w-1/3">{totalProducts} products </p>
        <p className=" w-1/3">{dateTime()}</p>
        <p className="w-1/3 text-right font-semibold">${totalPrice}</p>
      </div>
    </div>
  );
}

export default OrdersCard;
