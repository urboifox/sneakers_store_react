import { useSelector } from "react-redux";
import { CartProductCard, SectionHeadline } from ".";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Cart = () => {
  const allItems = useSelector((state) => state.items.data);
  const CartItems = useSelector((state) => state.cart.items);
  const cartItems = allItems.filter((item) => CartItems[item.id]);
  const isLoading = useSelector((state) => state.document.isLoading);
  return (
    <>
      <SectionHeadline text="Your Cart" />
      <section className="container mx-auto flex flex-col items-center gap-10 pb-32 pt-10">
        <div className="w-full">
          {isLoading ? (
            // Show skeleton when data is loading
            <div className=" flex flex-col gap-5 flex-1 max-h-96 overflow-scroll overflow-x-hidden rounded-lg border-sec-400 p-5 hideScrollBar">
              {Array.from({ length: 2 }).map((_, index) => (
                <Skeleton key={index} height={235} width={"100%"} />
              ))}
            </div>
          ) : (
            <>
              {cartItems?.length > 0 ? (
                <>
                  <div className="flex flex-col gap-5 flex-1 max-h-96 overflow-scroll overflow-x-hidden rounded-lg border-sec-400 p-5 hideScrollBar">
                    {cartItems.map((e) => {
                      return <CartProductCard element={e} key={e.id} />;
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-4xl font-bold text-center">
                    Your Cart is Empty!
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="flex gap-5">
          <Link to="/" tabIndex={cartItems.length > 0 ? "" : "-1"}>
            <button
              tabIndex={-1}
              disabled={cartItems.length > 0 ? false : true}
              className="btn-primary"
            >
              Check Out
            </button>
          </Link>
          <Link to="/collections">
            <button tabIndex={-1} className="btn-primary">
              {cartItems.length > 0 ? "Continue Shopping" : "View Products"}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
