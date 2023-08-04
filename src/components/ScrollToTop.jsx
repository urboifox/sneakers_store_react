import { useEffect } from "react";
import { Arrow } from "./";
import { setScrolled } from "../slices/documentSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
const ScrollToTop = () => {
  const scrolled = useSelector((state) => state.document.scrolled);
  const dispatch = useDispatch();

  function handleScrollToTop() {
    scrollTo(0, 0);
  }

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      dispatch(setScrolled(scrollY > 100));
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`scrollTOp w-12 md:w-16 transition-opacity duration-200 opacity-0 md:hover:opacity-100 items-center justify-center cursor-pointer aspect-square bg-primary-200 fixed bottom-6 right-6 md:right-10 md:bottom-10 rounded-full ${
        scrolled ? "opacity-50 z-50 flex" : "hidden -z-50"
      }`}
      onClick={() => handleScrollToTop()}
    >
      <Arrow className="h-[18px] w-[13px] md:scale-150 -rotate-90 fill-none stroke-white" />
    </motion.div>
  );
};

export default ScrollToTop;
