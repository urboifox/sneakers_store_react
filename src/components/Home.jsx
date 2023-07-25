import sneakerImage from "../assets/home-sneaker.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="section flex items-center flex-col justify-center sm:justify-evenly sm:flex-row">
      <div className="relative z-20">
        <h1 className=" xl:!leading-[70px] text-4xl font-medium text-start md:text-5xl xl:text-6xl">
          Explore <span className="text-primary-200">Sneakers</span>.
          <br /> Your Ultimate Footwear Destination!
        </h1>
        <Link to="/collections">
          <button className="bg-primary-200 mt-5 btn-primary">
            Explore
            {/* <span className="inline-block transitionMe group-hover:translate-x-2 relative">
            ➡️
          </span> */}
          </button>
        </Link>
      </div>
      <div className="max-w-[500px] w-[70%] sm:w-[45%]  sm:-translate-x-7 -rotate-[25deg] relative sneakerImage">
        <img
          loading="lazy"
          className="w-max"
          src={sneakerImage}
          alt="sneakers"
        />
      </div>
    </div>
  );
};

export default Home;
