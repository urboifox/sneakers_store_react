import { useSelector } from "react-redux";
import {
  CartIcon,
  CartProductCard,
  Chevron,
  SectionHeadline,
  Tumbleweed,
} from ".";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Cart = () => {
  const allItems = useSelector((state) => state.items.data);
  const cartElementsCount = useSelector((state) => state.cart.items);
  const cartItems = allItems.filter((item) => cartElementsCount[item.id]);
  const isLoading = useSelector((state) => state.document.isLoading);
  const PRICE = cartItems.reduce(
    (acc, curr) =>
      acc +
      (curr.oldPrice > 0 ? curr.oldPrice : curr.price) *
        cartElementsCount[curr.id],
    0
  );
  const TOTAL = cartItems.reduce(
    (acc, curr) => acc + curr.price * cartElementsCount[curr.id],
    0
  );
  const DISCOUNT = Math.abs(TOTAL - PRICE);

  return (
    <>
      <SectionHeadline text="Your Cart" />
      <section className="mt-20 max-sm:mt-16 container mx-auto flex flex-col items-center gap-10 pb-32 pt-10 lg:flex-row">
        <div className="w-full">
          {isLoading ? (
            // Show skeleton when data is loading
            <div className=" flex flex-col gap-5 max-h-[26rem] md:max-h-[32rem] overflow-scroll overflow-x-hidden rounded-lg border-sec-400 p-5  hideScrollBar">
              {Array.from({ length: 2 }).map((_, index) => (
                <Skeleton key={index} height={235} width={"100%"} />
              ))}
            </div>
          ) : (
            <>
              {cartItems?.length > 0 ? (
                <>
                  <div className="flex flex-col gap-5 max-h-[26rem] md:max-h-[32rem] overflow-scroll overflow-x-hidden rounded-lg border-sec-400 p-5 hideScrollBar">
                    {cartItems.map((e) => {
                      return <CartProductCard element={e} key={e.id} />;
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-xl flex flex-col items-center justify-center font-bold text-center">
                    <p className="mb-8 font-normal uppercase text-2xl text-sec-400">
                      Nothing Here..
                    </p>
                    <div className="animation-container">
                      <div className="bounce">
                        <Tumbleweed className={"fill-sec-400 w-full"} />
                      </div>
                      <div className="pebble1 pebble"></div>
                      <div className="pebble2 pebble"></div>
                      <div className="pebble3 pebble"></div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-around w-full items-center lg:flex-col lg:max-w-lg">
          <div className="cartPrices max-w-xs  text-xl font-medium text-sec-400 w-full my-8">
            <div className="flex flex-col gap-4">
              <div className="border-sec-200 p-4 rounded-lg border">
                <p>
                  Price:{" "}
                  <span className="text-primary-200 font-bold">${PRICE}</span>
                </p>
                <p>
                  Discount:{" "}
                  <span className="text-sec-300 font-bold">${DISCOUNT}</span>
                </p>
              </div>
              <div className="border-sec-200 p-4 rounded-lg border">
                <p>
                  Total:{" "}
                  <span className="text-primary-200 font-bold">${TOTAL}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 flex-col md:flex-row lg:flex-col">
            <Link tabIndex={cartItems.length > 0 ? "" : "-1"}>
              <button
                tabIndex={-1}
                disabled={cartItems.length > 0 ? false : true}
                className="btn-primary w-max flex items-center gap-4"
              >
                <CartIcon class="fill-white" />
                Check Out
              </button>
            </Link>
            <Link
              to="/collections"
              className="text-sec-300 transitionMe fill-sec-300 hover:fill-sec-400 hover:text-sec-400 flex items-center gap-1 md:hover:translate-x-2 justify-center"
            >
              {cartItems.length > 0 ? "Continue Shopping" : "View Products"}
              <Chevron className="w-3 translate-y-[2px]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
