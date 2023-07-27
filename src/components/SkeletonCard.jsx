import Skeleton from "react-loading-skeleton";

const SkeletonCard = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i}>
          <div className="aspect-square overflow-hidden">
            <Skeleton height={"100%"} />
          </div>
          <div>
            <Skeleton height={20} count={2} />
          </div>
        </div>
      );
    });
};

export default SkeletonCard;
