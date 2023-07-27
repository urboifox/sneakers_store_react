/* eslint-disable react/display-name */
import { useSelector } from "react-redux";
import { ProductCard, SectionHeadline } from ".";
import { createSelector } from "reselect";

const selectWomenItems = createSelector(
  (state) => state.items.data,
  (items) => items.filter((item) => item.category === "women")
);

const Women = () => {
  const womenItems = useSelector(selectWomenItems);
  return (
    <>
      <SectionHeadline text="women's collection" />
      <section className="itemsGrid itemsSection">
        {womenItems.map((e) => {
          return <ProductCard element={e} key={e.id} />;
        })}
      </section>
    </>
  );
};

export default Women;
