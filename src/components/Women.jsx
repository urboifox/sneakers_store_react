/* eslint-disable react/display-name */
import { useSelector } from "react-redux";
import { ProductCard } from ".";
import { createSelector } from "reselect";

const selectWomenItems = createSelector(
  (state) => state.items.data,
  (items) => items.filter((item) => item.category === "women")
);

const Women = () => {
  console.log("women");
  const womenItems = useSelector(selectWomenItems);
  return (
    <section className="itemsGrid itemsSection">
      {womenItems.map((e) => {
        return <ProductCard element={e} key={e.id} />;
      })}
    </section>
  );
};

export default Women;
