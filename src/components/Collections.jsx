import { useSelector } from "react-redux";
import { ProductCard } from "./";

const Collections = () => {
  const items = useSelector((state) => state.items.data);
  console.log("c");
  return (
    <section className="itemsGrid itemsSection">
      {items.map((e) => {
        return <ProductCard element={e} key={e.id} />;
      })}
    </section>
  );
};

export default Collections;
