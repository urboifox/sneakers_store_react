import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CounterButtons from "./CounterButtons";
import CartIcon from "./icons/CartIcon";
import NotFound from "./NotFound";
import { addToCart } from "../slices/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const allItems = useSelector((state) => state.items.data);
  const element = allItems.filter((e) => e.id == id)[0];
  const itemCount = useSelector((state) => state.cart.items[id]) || 1;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: element.id, value: itemCount }));
  };

  return (
    <section className="py-24 flex items-center justify-around container mx-auto">
      {element ? (
        <>
          <article className="max-w-xl flex px-24 items-center flex-col justify-center">
            <div className="aspect-square max-w-full flex  items-center justify-center rounded-xl shadowMe overflow-hidden mb-5">
              <img
                className="max-w-full object-cover"
                src={element.img}
                alt={element.name}
              />
            </div>
            <div className=" flex items-center gap-5 justify-between">
              {element.additionalImages.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="transitionMe hover:border-primary-300 border-white border-2 cursor-pointer shadowMe rounded-lg overflow-hidden aspect-square"
                  >
                    <img
                      className="object-cover"
                      src={i === 0 ? element.img : e}
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
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default ProductPage;
