import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import { useEffect } from "react";
import axios from "axios";
import { initiateFavourites, setMainData } from "../../slices/dataSlice";
import { initiateCart } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../slices/documentSlice";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { ScrollTopRoute } from "..";
import { AnimatePresence, motion } from "framer-motion";
import { routesAnimation } from "../../animations";
import AnimatedOutlet from "../AnimatedOutlet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const animation = routesAnimation;

const DefaultLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch data once the app loads and set it inside the data slice
    const fetchData = async () => {
      try {
        let res = await axios.get("https://api.npoint.io/10aea263260ef40221bf");
        // let res = await axios.get("./ShoesData.json");
        dispatch(setMainData(res.data));
        let localStorageFav = JSON.parse(localStorage.getItem("favourites"));
        dispatch(initiateFavourites(localStorageFav ? localStorageFav : {}));
        dispatch(setIsLoading());
        let localStorageCart = JSON.parse(localStorage.getItem("cartItems"));
        dispatch(initiateCart(localStorageCart ? localStorageCart : {}));
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <ScrollTopRoute />
      <Navbar />
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={location.pathname}
          variants={animation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AnimatedOutlet />
          <Footer />
        </motion.div>
      </AnimatePresence>
      <ToastContainer />
    </>
  );
};

export default DefaultLayout;
