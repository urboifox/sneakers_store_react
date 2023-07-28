import { useSelector } from "react-redux";
import { CartProductCard, SectionHeadline } from ".";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.items.data);
  const localStorageCartItems = JSON.parse(localStorage.getItem("cartItems"));
  const cartItems = items.filter((item) => localStorageCartItems[item.id]);
  return (
    <>
      <SectionHeadline text="Your Cart" />
      <section className="container mx-auto flex flex-col items-center gap-10 pb-32 pt-10">
        {cartItems.length > 0 ? (
          <div className="flex flex-col gap-5 flex-1 max-h-96 overflow-scroll overflow-x-hidden border rounded-lg border-sec-400 p-5 hideScrollBar">
            {cartItems.map((e) => {
              return <CartProductCard element={e} key={e.id} />;
            })}
          </div>
        ) : (
          <>
            <div className="text-4xl font-bold">Your Cart is Empty!</div>
          </>
        )}
        <div className="flex gap-5">
          <Link to="/">
            <button
              disabled={cartItems.length > 0 ? false : true}
              className="btn-primary"
            >
              Check Out
            </button>
          </Link>
          <Link to="/collections">
            <button className="btn-primary">Continue Shopping</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
