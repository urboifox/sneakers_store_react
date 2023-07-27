import { useSelector } from "react-redux";

const Loader = () => {
  const loaded = useSelector((state) => state.document.loaded);
  return (
    <div
      className={`left-0 top-0 z-[60] transitionMe fixed w-full h-full bg-primary-100 font-bold flex items-center justify-center text-5xl ${
        loaded ? "opacity-0 invisible -z-[99999999]" : ""
      }`}
    >
      Loading...
    </div>
  );
};

export default Loader;
