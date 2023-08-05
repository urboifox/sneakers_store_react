import { useSelector } from "react-redux";
import SkeletonCard from "./SkeletonCard";
import ProductCard from "./ProductCard";
import SectionHeadline from "./SectionHeadline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ShowCaseProducts = () => {
  const items = useSelector((state) => state.items.data);
  const isLoading = useSelector((state) => state.document.isLoading);

  return (
    <div className="my-10 lg:pb-20">
      <SectionHeadline text={"Popular Sneakers"} />

      <section className="mt-20 max-sm:mt-16 container mx-auto itemsGrid itemsSection">
        {isLoading ? (
          <SkeletonCard count={3} />
        ) : (
          <>
            {items.map((e, i) => {
              return <>{i < 3 && <ProductCard element={e} key={e.id} />}</>;
            })}
          </>
        )}
      </section>
      <Link to="/collections">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <button tabIndex={-1} className="btn-primary mx-auto w-fit flex">
            See All Collection
          </button>
        </motion.div>
      </Link>
    </div>
  );
};

export default ShowCaseProducts;
