/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  changeActiveImage,
  showNextImage,
  showPrevImage,
} from "../slices/productPageSlice";
import { togglePopup } from "../slices/popupSlice";
import { Chevron, CloseIcon } from ".";
import { motion } from "framer-motion";

const ImagePopup = ({ element }) => {
  const currentImageIndex = useSelector((state) => state.product.active);
  // const prevImageIndex = useSelector((state) => state.product.prev);
  const dispatch = useDispatch();
  const handleImageChange = (i) => {
    dispatch(changeActiveImage(i));
  };
  const handlePopup = () => {
    dispatch(togglePopup());
  };
  const visible = useSelector((state) => state.popup.visible);
  const handlePrevImage = () => {
    dispatch(showPrevImage());
  };
  const handleNextImage = () => {
    dispatch(showNextImage());
  };

  const popupAnimation = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: "0",
      position: "fixed",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 150,
      },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      className={`${
        visible ? "flex" : "hidden"
      } z-[9999999999] transform-none top-0 left-0 fixed w-screen h-screen items-center justify-center bg-[hsla(219,9%,45%,50%)]`}
      variants={popupAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <article className="mx-auto relative max-w-2xl flex-col flex px-24 items-center gap-5 justify-center">
        <motion.div
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
          }}
          className="cursor-pointer absolute right-0 top-0 flex items-center justify-center w-10 aspect-square fill-white hover:fill-primary-200"
          onClick={() => handlePopup()}
        >
          <CloseIcon class="scale-150 transition-all duration-150 " />
        </motion.div>
        <motion.div
          animate={{ y: "-50%", rotate: 180 }}
          initial={{ y: "-50%", rotate: 180 }}
          exit={{ y: "-50%", rotate: 180 }}
          whileTap={{
            scale: 0.9,
          }}
          className="popupChevron rotate-180 left-16"
          onClick={() => handlePrevImage()}
        >
          <Chevron />
        </motion.div>
        <motion.div
          animate={{ y: "-50%" }}
          initial={{ y: "-50%" }}
          exit={{ y: "-50%" }}
          whileTap={{
            scale: 0.9,
          }}
          className="popupChevron right-16"
          onClick={() => handleNextImage()}
        >
          <Chevron />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.1 } }}
          className="relative h-full border-white border-2 aspect-square flex items-center justify-center rounded-xl shadowMe overflow-hidden mb-5"
        >
          <img
            className="max-w-full object-cover"
            src={element?.images[currentImageIndex]}
            alt={element?.name}
            loading="lazy"
          />
        </motion.div>
        <div className=" flex items-center gap-5 max-w-sm justify-between">
          {element?.images.map((e, i) => {
            return (
              <div
                onClick={() => handleImageChange(i)}
                key={i}
                className={`transitionMe hover:border-primary-300 border-${
                  i === currentImageIndex ? "primary-200" : "white"
                } border-2 cursor-pointer shadowMe rounded-lg overflow-hidden aspect-square`}
              >
                <img
                  className="w-32 max-w-full aspect-square object-cover"
                  src={e}
                  alt={element?.name}
                />
              </div>
            );
          })}
        </div>
      </article>
    </motion.div>
  );
};

export default ImagePopup;
