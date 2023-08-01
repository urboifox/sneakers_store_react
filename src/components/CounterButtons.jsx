/* eslint-disable react/prop-types */
import { MinusIcon, PlusIcon } from ".";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../slices/countSlice";
import { decrementCartItem, incrementCartItem } from "../slices/cartSlice";

const CounterButtons = ({ id, className }) => {
  const itemCount = useSelector((state) => state.count.items[id]) || 1;
  const itemExistInCart = useSelector((state) => state.cart.items[id]);

  const dispatch = useDispatch();

  const handleItemIncrement = () => {
    dispatch(incrementCount(id));
    if (itemExistInCart) dispatch(incrementCartItem(id));
  };
  const handleItemDecrement = () => {
    if (itemCount > 1) dispatch(decrementCount(id));
    if (itemExistInCart > 1) dispatch(decrementCartItem(id));
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
        <MinusIcon className="fill-primary-200 hover:fill-primary-300 transition-all duration-200 scale-90 w-5 aspect-square" />
      </button>
      <div>{itemCount}</div>
      <button
        className={`md:hover:opacity-100`}
        onClick={() => handleItemIncrement()}
      >
        <PlusIcon className="stroke-primary-200 hover:stroke-primary-300 transition-all duration-200 w-5 aspect-square" />
      </button>
    </div>
  );
};

export default CounterButtons;
