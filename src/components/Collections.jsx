import { useSelector } from "react-redux";
import { ProductCard, SectionHeadline, SkeletonCard } from "./";

const Collections = () => {
  const items = useSelector((state) => state.items.data);
  const isLoading = useSelector((state) => state.document.isLoading);
  return (
    <>
      <SectionHeadline text="Explore Our Collection" />
      <section className="container mx-auto itemsGrid itemsSection">
        {isLoading ? (
          <SkeletonCard count={16} />
        ) : (
          <>
            {items.map((e) => {
              return <ProductCard element={e} key={e.id} />;
            })}
          </>
        )}
      </section>
    </>
  );
};

export default Collections;
