import map from "../assets/treasure-map.svg";
import cup from "../assets/cup.svg";
import { ChevronDown } from "./";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const handleScrollDown = () => {
    window.scrollTo(0, window.innerHeight);
  };
  return (
    <div className="aboutPage">
      <section className="flex-col h-[calc(100vh-6rem)] flex items-center justify-center bg-primary-100">
        <h1 className="flex-1 flex items-center justify-center flex-col text-4xl md:text-6xl xl:text-9xl text-center font-bold text-sec-300 uppercase">
          The Story Of{" "}
          <span className="block font-extrabold text-sec-400">
            Sneakers<span className="text-primary-200">.</span>
          </span>
        </h1>
        <button
          onClick={() => handleScrollDown()}
          className="uppercase font-medium text-sec-300 flex items-center gap-2 mb-10 hover:text-sec-400 transitionMe group"
        >
          Read{" "}
          <ChevronDown
            className={
              "stroke-sec-300 group-hover:stroke-sec-400 transitionMe animate-bounce w-5"
            }
          />
        </button>
      </section>
      <div className="container mx-auto">
        <div className="py-32 flex items-center max-lg:flex-col max-lg:gap-20 justify-between">
          <div className="lg:w-1/2 text-sm lg:text-base lg:text-start text-center">
            <h2 className="text-4xl font-extrabold mb-8">Our Journey</h2>
            <p className="mb-2 text-sec-300">
              <span className="text-primary-200">Sneakers</span> was born out of
              a shared love for{" "}
              <span className="text-primary-200">sneakers</span> and a desire to
              create a one-stop destination for all sneakerheads. The idea
              originated when a group of friends realized that finding the
              perfect pair of <span className="text-primary-200">sneakers</span>{" "}
              often involved scouring multiple stores and websites.
            </p>
            <p className="text-sec-300">
              We decided to change this and embarked on a journey to curate a
              premium selection of{" "}
              <span className="text-primary-200">sneakers</span>, making them
              easily accessible to sneaker enthusiasts worldwide.
            </p>
          </div>
          <motion.div
            drag
            dragSnapToOrigin
            dragConstraints={{
              top: 20,
              left: 20,
              right: 20,
              bottom: 20,
            }}
            className="max-md:w-[150px] max-lg:w-[200px]"
          >
            <img
              draggable="false"
              loading="lazy"
              className="w-max -rotate-[25deg] animate-float"
              src={map}
              alt="journey map"
            />
          </motion.div>
        </div>
      </div>
      <div className="py-20 bg-primary-100">
        <div className="container mx-auto lg:flex-row-reverse flex items-center max-lg:flex-col max-lg:gap-20 justify-between">
          <div className="lg:w-1/2 text-sm lg:text-base lg:text-start text-center">
            <h2 className="text-4xl font-extrabold mb-8">Our Mission</h2>
            <p className="mb-2 text-sec-300">
              <span className="text-primary-200">Sneakers</span> was born out of
              a shared love for{" "}
              <span className="text-primary-200">sneakers</span> and a desire to
              create a one-stop destination for all sneakerheads. The idea
              originated when a group of friends realized that finding the
              perfect pair of <span className="text-primary-200">sneakers</span>{" "}
              often involved scouring multiple stores and websites.
            </p>
            <p className="text-sec-300">
              We decided to change this and embarked on a journey to curate a
              premium selection of{" "}
              <span className="text-primary-200">sneakers</span>, making them
              easily accessible to sneaker enthusiasts worldwide.
            </p>
          </div>
          <motion.div
            drag
            dragSnapToOrigin
            dragConstraints={{
              top: 20,
              left: 20,
              right: 20,
              bottom: 20,
            }}
            className="max-md:w-[150px] max-lg:w-[200px] lg:w-[250px]"
          >
            <img
              draggable="false"
              loading="lazy"
              className="max-w-full -rotate-[25deg] animate-float"
              src={cup}
              alt="journey map"
            />
          </motion.div>
        </div>
      </div>
      <div className="py-32 container mx-auto text-center flex flex-col items-center justify-center">
        <p className="text-sec-300 max-w-lg">
          At <span className="text-primary-200">Sneakers</span>, we are
          committed to providing our customers with an unparalleled shopping
          experience. We carefully handpick each pair of
          <span className="text-primary-200"> sneakers</span> from renowned
          brands, ensuring that they meet the highest standards of
          craftsmanship, quality, and design. Whether you are a sports
          enthusiast, a street-style aficionado, or simply seeking comfortable
          everyday shoes, we have something special for everyone.
        </p>
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="mt-14"
        >
          <Link to="/collections" className="btn-primary">
            Explore Sneakers
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
