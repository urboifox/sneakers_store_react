/* eslint-disable react/prop-types */
const SectionHeadline = ({ text }) => {
  return (
    <>
      <div className="container mx-auto  sectionHeadline translate-y-10 strokeText">
        <h1>{text}</h1>
        <h1 className="strokeText absolute top-[1px] left-[2px] w-full ">
          {text}
        </h1>

        <span className="absolute w-1/2 h-[2px] bg-primary-100 left-1/2 -translate-x-1/2 -bottom-5"></span>
      </div>
    </>
  );
};

export default SectionHeadline;
