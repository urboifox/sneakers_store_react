import { useSelector } from "react-redux";
import { ProductCard, SectionHeadline } from "./";

const Collections = () => {
  const items = useSelector((state) => state.items.data);
  return (
    <>
      <SectionHeadline text="Explore Our Collection" />
      <section className="itemsGrid itemsSection">
        {items.map((e) => {
          return <ProductCard element={e} key={e.id} />;
        })}
      </section>
    </>
  );
};

export default Collections;
