import eye from "../assets/eye.svg";
const CardOverlay = () => {
  return (
    <div
      className={`transition-all duration-300 z-10 cursor-pointer absolute top-0 left-0 w-full h-full bg-[#b6bcc863] flex items-center justify-center opacity-0 hover:opacity-100`}
    >
      <img className="w-1/2" src={eye} />
    </div>
  );
};

export default CardOverlay;
