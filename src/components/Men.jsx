import { useSelector } from "react-redux";
import { ProductCard, SectionHeadline, SkeletonCard } from ".";
import { createSelector } from "reselect";

const selectMenItems = createSelector(
  (state) => state.items.data,
  (items) => items.filter((item) => item.category === "men")
);

const Men = () => {
  const menItems = useSelector(selectMenItems);
  const isLoading = useSelector((state) => state.document.isLoading);

  return (
    <>
      <SectionHeadline text="men's collection" />
      <section className="mt-20 max-sm:mt-16 container mx-auto  itemsGrid itemsSection">
        {isLoading ? (
          <SkeletonCard count={8} />
        ) : (
          <>
            {menItems.map((e) => {
              return <ProductCard element={e} key={e.id} />;
            })}
          </>
        )}
      </section>
    </>
  );
};

export default Men;
