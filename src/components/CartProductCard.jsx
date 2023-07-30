/* eslint-disable react/prop-types */
import heart from "../assets/heart-outline.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteItem } from "../slices/dataSlice";
import { HeartIcon, MinusIcon, PlusIcon, TrashIcon } from "./";
import {
  decrementCartItem,
  incrementCartItem,
  toggleCartItem,
} from "../slices/cartSlice";

const CartProductCard = ({ element, className }) => {
  const itemCount = useSelector((state) => state.cart.items[element.id]);
  const dispatch = useDispatch();
  const isFavourite = useSelector(
    (state) => state.items.favourites[element.id]
  );

  const handleFavToggle = () => {
    dispatch(toggleFavouriteItem(element.id));
  };

  const handleInCartToggle = () => {
    dispatch(toggleCartItem(element.id));
  };

  const handleItemIncrement = () => {
    dispatch(incrementCartItem(element.id));
  };
  const handleItemDecrement = () => {
    if (itemCount > 1) dispatch(decrementCartItem(element.id));
  };

  return (
    <article className={`${className} w-full`}>
      <div
        className={`relative bg-sec-100 border ${
          isFavourite ? "border-primary-200" : ""
        } w-full rounded-lg overflow-hidden flex transitionMe max-md:flex-col max-md:items-center max-w-[350px] md:max-w-none mx-auto`}
      >
        <div className="max-md:w-full min-w-[135px] flex items-center justify-center w-1/4 bg-[#f5f5f5] group overflow-hidden">
          <img
            src={element.img}
            className="w-full aspect-square md:group-hover:scale-110 transitionMe -translate-y-5 object-cover"
            alt={element.name}
          />
        </div>
        <div className="flex flex-col justify-center p-5 font-[600] text-sec-400">
          <div className="mb-2">{element.name}</div>
          <div className="text-sm text-sec-300">{element.company}</div>
          <div className="text-sec-300 font-normal mt-4 max-w-[25rem]">
            {element.description}
          </div>
          <div className="mt-4 flex items-center gap-2">
            {element.discount && (
              <span className="text-sec-300 line-through">
                ${element.oldPrice}
              </span>
            )}
            <span className="text-primary-200 text-xl">${element.price}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 absolute top-5 right-5">
          <div className="w-6 cursor-pointer" onClick={() => handleFavToggle()}>
            {isFavourite ? (
              <HeartIcon className={"w-full fill-primary-200"} />
            ) : (
              <img className="w-full" src={heart} alt="Add to Favourites" />
            )}
          </div>
          <div onClick={() => handleInCartToggle()}>
            <TrashIcon
              className={`fill-sec-300 scale-110 transitionMe hover:fill-red-600 cursor-pointer`}
            />
          </div>
        </div>
        <div className="INCDEC">
          <button
            className={`${
              itemCount > 1
                ? "md:hover:opacity-100"
                : "md:opacity-70 cursor-no-drop"
            }`}
            onClick={() => handleItemDecrement()}
          >
            <MinusIcon className="fill-white scale-90 w-4 aspect-square" />
          </button>
          <div>{itemCount}</div>
          <button
            className={`md:hover:opacity-100`}
            onClick={() => handleItemIncrement()}
          >
            <PlusIcon className="stroke-white w-4 aspect-square" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartProductCard;
