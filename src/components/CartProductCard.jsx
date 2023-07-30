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
    <article className={`${className} w-full `}>
      <div
        className={`relative bg-sec-100 h-max md:h-40 border ${
          isFavourite ? "border-primary-200" : ""
        } w-full rounded-lg overflow-hidden flex transitionMe max-md:flex-col max-md:items-center max-w-[350px] md:max-w-none mx-auto`}
      >
        <div className="max-md:h-48 max-md:w-full min-w-[135px] flex items-center justify-center w-1/4 bg-[#f5f5f5] group overflow-hidden">
          <img
            src={element.img}
            className="w-full aspect-square md:group-hover:scale-110 transitionMe -translate-y-5 object-cover"
            alt={element.name}
          />
        </div>
        <div className="flex flex-col self-start w-40 justify-center pt-5 pl-5 font-[600] text-sec-400">
          <div className="mb-1 md:mb-2 text-sm md:text-base">
            {element.name}
          </div>
          <div className="text-xs md:text-sm text-sec-300">
            {element.company}
          </div>
          <div className="mt-2 md:mt-4 flex items-center gap-2">
            {element.discount && (
              <span className="text-sec-300 line-through">
                ${element.oldPrice}
              </span>
            )}
            <span className="text-primary-200 text-lg md:text-xl">
              ${element.price}
            </span>
          </div>
        </div>
        <div>{/* RATING */}</div>
        <div className="flex items-center gap-3 absolute top-5 right-5">
          <button
            className="w-6 cursor-pointer"
            onClick={() => handleFavToggle()}
          >
            {isFavourite ? (
              <HeartIcon className={"w-full fill-primary-200"} />
            ) : (
              <img className="w-full" src={heart} alt="Add to Favourites" />
            )}
          </button>
          <button onClick={() => handleInCartToggle()}>
            <TrashIcon
              className={`fill-sec-300 scale-110 transitionMe hover:fill-red-600 cursor-pointer`}
            />
          </button>
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
