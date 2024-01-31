// import { IoClose } from "react-icons/io5";
import { dateTime } from "../../Utils";
import {
  IoChevronForward,
  IoCalendarOutline,
  IoCartOutline,
} from "react-icons/io5";

function OrdersCard(props) {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-6 flex-shrink-0 ">
      <div className="flex gap-4 justify-between w-96 bg-bk h-14 items-center p-4 rounded-lg drop-shadow-sm">
        <p className="flex items-center gap-1 ">
          <IoCartOutline />
          {totalProducts} products{" "}
        </p>

        <p className=" items-center flex gap-1">
          <IoCalendarOutline />
          {dateTime()}
        </p>
        <p className=" text-right font-semibold">${totalPrice}</p>
        <IoChevronForward />
      </div>
    </div>
  );
}

export default OrdersCard;
