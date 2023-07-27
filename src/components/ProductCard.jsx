/* eslint-disable react/prop-types */
import addToCart from "../assets/icon-add.svg";
import heart from "../assets/heart-outline.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteItem } from "../slices/dataSlice";
import HeartIcon from "./HeartIcon";

const Product = ({ element }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.items.favourites);
  const handleFavToggle = () => {
    dispatch(toggleFavouriteItem(element.id));
  };

  return (
    <article>
      <div className="relative overflow-hidden rounded-xl group bg-[#f5f5f5]">
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
          {favourites[element.id] ? (
            <HeartIcon className={"w-full fill-primary-200 "} />
          ) : (
            <img className="w-full" src={heart} alt="Add to favourites" />
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
      <div className="flex mt-3 items-center justify-between">
        <span className="inline-block font-bold text-xs text-sec-300">
          {element.company}
        </span>
        <button className="aspect-square bg-primary-100 transitionMe shadow-md hover:bg-primary-200 rounded-md p-[5px]">
          <img className="w-5" src={addToCart} alt="add to cart button" />
        </button>
      </div>
    </article>
  );
};

export default Product;
