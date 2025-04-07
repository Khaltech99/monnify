import React from "react";
import PropTypes from "prop-types";
import { Minus } from "lucide-react";

const CarouselIndicators = ({
  count,
  currentIndex,
  activeClass = "text-[#F07622]",
  inactiveClass = "text-gray-300",
  //   indicatorClass = "h-1 rounded-full transition-all duration-300 cursor-pointer",
}) => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: count }).map((_, index) => (
        <Minus
          size={50}
          className={`${index === currentIndex ? activeClass : inactiveClass}`}
          key={index}
        />
      ))}
    </div>
  );
};

CarouselIndicators.propTypes = {
  count: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  activeClass: PropTypes.string,
  inactiveClass: PropTypes.string,
  indicatorClass: PropTypes.string,
};

export default CarouselIndicators;
