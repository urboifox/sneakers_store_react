/* eslint-disable react/display-name */
import { useSelector } from "react-redux";
import { ProductCard, SectionHeadline, SkeletonCard } from ".";
import { createSelector } from "reselect";

const selectWomenItems = createSelector(
  (state) => state.items.data,
  (items) => items.filter((item) => item.category === "women")
);

const Women = () => {
  const womenItems = useSelector(selectWomenItems);
  const isLoading = useSelector((state) => state.document.isLoading);

  return (
    <>
      <SectionHeadline text="women's collection" />
      <section className="mt-20 max-sm:mt-16 container mx-auto  itemsGrid itemsSection">
        {isLoading ? (
          <SkeletonCard count={8} />
        ) : (
          <>
            {womenItems.map((e) => {
              return <ProductCard element={e} key={e.id} />;
            })}
          </>
        )}
      </section>
    </>
  );
};

export default Women;
