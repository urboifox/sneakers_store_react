/* eslint-disable react/prop-types */
import { nanoid } from "@reduxjs/toolkit";
import StarIcon from "./icons/StarIcon";

const RatingStars = ({ className, rate }) => {
  const finalRate = (5 / 100) * rate;
  return (
    <div className="flex items-center gap-px ml-[-5px]">
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <div className={`${className}`} key={nanoid()}>
              <StarIcon
                className={`cursor-pointer stroke-sec-400 ${
                  i < finalRate ? "fill-primary-300" : "fill-white"
                } `}
                rate={2}
              />
            </div>
          );
        })}
    </div>
  );
};

export default RatingStars;
