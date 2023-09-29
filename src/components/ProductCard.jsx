/* eslint-disable react/prop-types */
import addToCart from "../assets/add-to-cart.svg";
import removeFromCart from "../assets/remove-from-cart.svg";
import heart from "../assets/heart-outline.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteItem } from "../slices/dataSlice";
import { CardOverlay, HeartIcon, ImagePopup, RatingStars } from "./";
import { toggleCartItem } from "../slices/cartSlice";
import { Link, useLocation } from "react-router-dom";
import { togglePopup } from "../slices/popupSlice";
import { AnimatePresence, motion } from "framer-motion";

const ProductCard = ({ element, className }) => {
  const popupVisible = useSelector((state) => state.popup.visible);
  const location = useLocation();
  const dispatch = useDispatch();
  const isFavourite = useSelector(
    (state) => state.items.favourites[element.id]
  );
  const inCart = useSelector((state) => state.cart.items[element.id]);
  const currentElement = useSelector((state) => state.popup.current);

  const handleFavToggle = () => {
    dispatch(toggleFavouriteItem(element.id));
  };

  const handleInCartToggle = () => {
    dispatch(toggleCartItem(element.id));
  };

  const handlePopup = () => {
    dispatch(togglePopup(element.id));
  };

  return (
    <article className={`${className ? className : ""}`}>
      <AnimatePresence mode="wait" initial={true} onExitComplete={() => null}>
        {popupVisible && currentElement === element.id && (
          <div className="max-md:hidden">
            <ImagePopup element={element} />
          </div>
        )}
      </AnimatePresence>
      <div
        className={`relative transitionMe overflow-hidden rounded-xl group bg-[#f5f5f5] ${
          isFavourite ? "border border-primary-200 " : ""
        }`}
      >
        <div className="max-md:hidden" onClick={() => handlePopup()}>
          <CardOverlay />
        </div>
        <img
          className="w-full aspect-square object-cover md:group-hover:scale-110 transitionMe -translate-y-5"
          src={element.images[0]}
          alt={element.name}
          loading="lazy"
        />
        {element.discount ? (
          <span className="z-50 bg-primary-100 shadow-md text-sec-400 px-2 py-1 rounded-md font-bold text-xs absolute top-4 left-4">
            {(
              ((element.oldPrice - element.price) / element.oldPrice) *
              100
            ).toFixed(0)}
            %
          </span>
        ) : null}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute w-6 z-50 top-4 right-4 cursor-pointer"
          onClick={() => handleFavToggle()}
        >
          {isFavourite ? (
            <HeartIcon className={"w-full fill-primary-200 "} />
          ) : (
            <img
              className="w-full heartNoFill"
              src={heart}
              alt="Add to Favourites"
            />
          )}
        </motion.div>
      </div>
      <div className="font-[600] text-sec-400  mt-3 text-sm w-full flex items-start justify-between">
        <span className="inline-block font-medium text-xs text-primary-200">
          {element.company}
        </span>
        <div className="flex gap-2">
          {element.discount ? (
            <p className="line-through text-sec-300">${element.oldPrice}</p>
          ) : null}
          <p>${element.price}</p>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <Link
          to={`${
            location.pathname === "/" ? "collections" : location.pathname
          }/${element.id}`}
          className="flex flex-col w-full cursor-pointer"
        >
          <h2 className="uppercase text-sm font-bold w-[80%] mb-2">
            {element.name}
          </h2>
          <RatingStars className={`!w-5`} rate={element.rate} />
        </Link>

        <button
          onClick={() => handleInCartToggle()}
          className={`${
            inCart ? "clicked" : ""
          } relative group mt-3 w-8 btn aspect-square hover:!shadow-primary-200 bg-primary-100 transitionMe md:hover:bg-primary-200 rounded-md p-[5px]`}
        >
          <span className="max-lg:hidden popup">
            {inCart ? "Remove From Cart" : "Add To Cart"}
          </span>
          <img
            className="w-full"
            src={!inCart ? addToCart : removeFromCart}
            alt="add to cart button"
          />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
