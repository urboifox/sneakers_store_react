/* eslint-disable react/prop-types */
import heart from "../assets/heart-outline.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteItem } from "../slices/dataSlice";
import { HeartIcon, TrashIcon } from "./";
import { toggleCartItem } from "../slices/cartSlice";

const CartProductCard = ({ element, className }) => {
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

  return (
    <article className={`${className} w-full`}>
      <div
        className={`relative bg-sec-100 border ${
          isFavourite ? "border-primary-200" : ""
        } w-full rounded-lg overflow-hidden flex transitionMe max-md:flex-col max-md:items-center sm:max-w-[350px] md:max-w-none sm:mx-auto`}
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
      </div>
      {/* <div
        className={`relative transitionMe overflow-hidden rounded-xl group bg-[#f5f5f5] ${
          isFavourite[element.id] ? "border border-primary-200 " : ""
        }`}
      >
        <img
          className="w-full aspect-square object-cover md:group-hover:scale-110 transitionMe -translate-y-5"
          src={element.img}
          alt={element.name}
          loading="lazy"
        />
        {element.discount ? (
          <span className="bg-primary-100 shadow-md text-sec-400 px-2 py-1 rounded-md font-bold text-xs absolute top-4 left-4">
            {(
              ((element.oldPrice - element.price) / element.oldPrice) *
              100
            ).toFixed(0)}
            %
          </span>
        ) : null}
        <div
          className="absolute w-6 top-4 right-4 cursor-pointer"
          onClick={() => handleFavToggle()}
        >
          {isFavourite[element.id] ? (
            <HeartIcon className={"w-full fill-primary-200 "} />
          ) : (
            <img className="w-full" src={heart} alt="Add to Favourites" />
          )}
        </div>
      </div>
      <div className="font-[600] text-sec-400  mt-3 text-sm w-full flex items-start justify-between">
        <h2 className="uppercase text-sm w-[80%]">{element.name}</h2>
        <div className="flex gap-2">
          {element.discount ? (
            <p className="line-through text-sec-300">${element.oldPrice}</p>
          ) : null}
          <p>${element.price}</p>
        </div>
      </div>
      <div className="flex mt-3 items-start justify-between">
        <span className="inline-block font-bold text-xs text-sec-300">
          {element.company}
        </span>
        <button
          onClick={() => handleInCartToggle()}
          className={`${
            inCart ? "clicked" : ""
          } relative group w-8 btn aspect-square bg-primary-100 transitionMe hover:bg-primary-200 rounded-md p-[5px]`}
        >
          <span className="popup group-hover:block">
            {inCart ? "Remove From Cart" : "Add To Cart"}
          </span>
          <img
            className="w-full"
            src={!inCart ? addToCart : removeFromCart}
            alt="add to cart button"
          />
        </button>
      </div> */}
    </article>
  );
};

export default CartProductCard;
