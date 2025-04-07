import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ImageCarousel = ({
  images,
  interval = 3000,
  currentIndex: externalCurrentIndex,
  setCurrentIndex: setExternalCurrentIndex,
}) => {
  const [internalCurrentIndex, setInternalCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Use external control if provided, otherwise use internal state
  const currentIndex =
    typeof externalCurrentIndex !== "undefined"
      ? externalCurrentIndex
      : internalCurrentIndex;
  const setCurrentIndex = setExternalCurrentIndex || setInternalCurrentIndex;

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, images.length, interval, setCurrentIndex]);

  return (
    <div
      className="relative w-full m-auto h-full overflow-hidden flex"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides container */}
      <div className=" w-[100%] h-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full  h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <img
              className="w-full h-full"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  interval: PropTypes.number,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
};

export default ImageCarousel;
