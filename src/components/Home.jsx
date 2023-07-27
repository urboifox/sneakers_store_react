import sneakerImage from "../assets/home-sneaker.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto  section flex items-center sm:text-center md:text-start flex-col justify-between md:justify-evenly md:flex-row">
      <div className="relative z-20">
        <h1 className="leading-[40px] sm:text-center md:text-start md:leading-[55px] xl:!leading-[70px] text-[2.1rem] font-medium text-start md:text-5xl xl:text-6xl">
          Explore <span className="text-primary-200 font-bold">Sneakers</span>
          .
          <br /> Your Ultimate Footwear Destination!
        </h1>
        <p className="text-xs mt-2 text-sec-300 md:text-base font-medium md:mt-5 max-w-sm lg:max-w-xl max-sm:mx-0 max-md:mx-auto">
          Find the perfect kicks that blend fashion and function, ensuring every
          step is a statement. Step into Sneaker Paradise!
        </p>

        <Link to="/collections">
          <button className="bg-primary-200 mt-6 btn-primary">Explore</button>
        </Link>
      </div>

      <div className="ml-auto sm:ml-0 -translate-y-[50%] md:-translate-y-10 max-w-[300px] md:max-w-[500px] w-[70%] md:w-[45%]  md:-translate-x-7  relative sneakerImage">
        <img
          loading="lazy"
          className="w-max -rotate-[25deg]"
          src={sneakerImage}
          alt="sneakers"
        />
      </div>
    </div>
  );
};

export default Home;
