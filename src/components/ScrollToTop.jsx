import { useEffect } from "react";
import { Arrow } from "./";
import { setScrolled } from "../slices/documentSlice";
import { useDispatch, useSelector } from "react-redux";
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
    <div
      className={`w-12 md:w-16 -z-50 transitionMe opacity-0 hover:opacity-100 flex items-center justify-center cursor-pointer aspect-square bg-primary-200 fixed bottom-10 right-10 rounded-full ${
        scrolled ? "opacity-50 z-50" : ""
      }`}
      onClick={() => handleScrollToTop()}
    >
      <Arrow className="h-[18px] w-[13px] md:scale-150 -rotate-90 fill-none stroke-white" />
    </div>
  );
};

export default ScrollToTop;
