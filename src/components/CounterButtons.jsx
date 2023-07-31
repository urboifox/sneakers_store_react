/* eslint-disable react/prop-types */
import { MinusIcon, PlusIcon } from ".";
import { decrementCartItem, incrementCartItem } from "../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CounterButtons = ({ id, className }) => {
  const itemCount = useSelector((state) => state.cart.items[id]) || 1;

  const dispatch = useDispatch();

  const handleItemIncrement = () => {
    dispatch(incrementCartItem(id));
  };
  const handleItemDecrement = () => {
    if (itemCount > 1) dispatch(decrementCartItem(id));
  };
  return (
    <div className={`INCDEC ${className ? className : ""}`}>
      <button
        className={`${
          itemCount > 1
            ? "md:hover:opacity-100"
            : "md:opacity-70 cursor-no-drop"
        }`}
        onClick={() => handleItemDecrement()}
      >
        <MinusIcon className="fill-primary-200 scale-90 w-5 aspect-square" />
      </button>
      <div>{itemCount}</div>
      <button
        className={`md:hover:opacity-100`}
        onClick={() => handleItemIncrement()}
      >
        <PlusIcon className="stroke-primary-200 w-5 aspect-square" />
      </button>
    </div>
  );
};

export default CounterButtons;
