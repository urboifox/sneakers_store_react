import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CounterButtons from "./CounterButtons";
import CartIcon from "./icons/CartIcon";
import NotFound from "./NotFound";
import { addToCart } from "../slices/cartSlice";
import { changeActiveImage } from "../slices/productPageSlice";
import CardOverlay from "./CardOverlay";
import ImagePopup from "./ImagePopup";
import Skeleton from "react-loading-skeleton";
import { togglePopup } from "../slices/popupSlice";

const ProductPage = () => {
  const currentImageIndex = useSelector((state) => state.product.active);
  const { id } = useParams();
  const isLoading = useSelector((state) => state.document.isLoading);
  const allItems = useSelector((state) => state.items.data);
  const element = allItems.find((e) => e.id === Number(id));
  const itemCount = useSelector((state) => state.count.items[id]) || 1;
  const dispatch = useDispatch();
  const popupVisible = useSelector((state) => state.popup.visible);

  const handleAddToCart = () => {
    dispatch(addToCart({ id: element.id, value: itemCount }));
  };

  const handleImageChange = (i) => {
    dispatch(changeActiveImage(i));
  };

  const handlePopup = () => {
    dispatch(togglePopup(element.id));
  };
  return (
    <section className="py-24 flex items-center justify-around container mx-auto">
      {element && !isLoading ? (
        <>
          {popupVisible && <ImagePopup element={element} />}
          <article className="max-w-xl flex px-24 items-center flex-col justify-center">
            <div className="relative border-white border-2 aspect-square max-w-full flex  items-center justify-center rounded-xl shadowMe overflow-hidden mb-5">
              <div onClick={() => handlePopup()}>
                <CardOverlay />
              </div>
              <img
                className="max-w-full object-cover w-96"
                src={element.images[currentImageIndex]}
                alt={element.name}
                loading="lazy"
              />
            </div>
            <div className=" flex items-center gap-5 justify-between">
              {element.images.map((e, i) => {
                return (
                  <div
                    onClick={() => handleImageChange(i)}
                    key={i}
                    className={`transitionMe hover:border-primary-300 border-${
                      i === currentImageIndex ? "primary-200" : "white"
                    } border-2 cursor-pointer shadowMe rounded-lg overflow-hidden aspect-square`}
                  >
                    <img
                      className="w-32 max-w-full aspect-square object-cover"
                      src={e}
                      alt={element.name}
                    />
                  </div>
                );
              })}
            </div>
          </article>
          <article className="max-w-[450px]">
            <div>
              <div className="text-primary-200 tracking-widest text-xs font-bold uppercase">
                {element.company}
              </div>
              <h1 className="text-4xl font-bold text-sec-400 mt-2 mb-6">
                {element.name}
              </h1>
              <p className="text-sec-300 mb-5">{element.description}</p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-sec-400">
                  ${element.price.toFixed(2)}
                </div>
                {element.discount && (
                  <div className="text-primary-200 bg-primary-100 px-2 py-1 font-bold rounded-lg text-sm">
                    {(
                      ((element.oldPrice - element.price) / element.oldPrice) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                )}
              </div>
              <div className="text-sec-200 text-lg line-through mt-2 font-bold">
                {element.discount ? `$${element.oldPrice}` : ""}
              </div>
            </div>
            <div className="mt-10 gap-5 flex items-center">
              <div>
                <CounterButtons
                  className={`!bg-sec-100 !m-0`}
                  id={element.id}
                />
              </div>
              <div>
                <button
                  onClick={() => handleAddToCart()}
                  className="w-max btn-primary flex items-center gap-4"
                >
                  <CartIcon class="fill-white" /> Add To Cart
                </button>
              </div>
            </div>
          </article>
        </>
      ) : isLoading ? (
        <>
          <article className="max-w-xl flex px-24 items-center flex-col justify-center">
            <div className="relative border-white border-2 aspect-square max-w-full flex items-center justify-center rounded-xl shadowMe overflow-hidden mb-5">
              <Skeleton height={400} width={400} />
            </div>
            <div className=" flex items-center gap-5 justify-between">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={` border-white border-2 cursor-pointer shadowMe rounded-lg overflow-hidden aspect-square`}
                >
                  <Skeleton height={80} width={80} />
                </div>
              ))}
            </div>
          </article>
          <article className="w-[450px]">
            <div>
              <div className=" tracking-widest text-xs font-bold uppercase">
                <Skeleton width={100} />
              </div>
              <h1 className="text-4xl font-bold text-sec-400 mt-2 mb-6">
                <Skeleton width={300} />
              </h1>
              <p className="text-sec-300 mb-5">
                <Skeleton count={3} />
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-sec-400">
                  <Skeleton width={100} />
                </div>
                <div className="px-2 py-1 rounded-lg">
                  <Skeleton width={30} />
                </div>
              </div>
              <div className=" mt-2">
                <Skeleton width={70} />
              </div>
            </div>
            <div className="mt-10 gap-5 flex items-center">
              <div>
                <Skeleton height={40} width={100} />
              </div>
              <div>
                <Skeleton height={40} width={150} />
              </div>
            </div>
          </article>
        </>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default ProductPage;
