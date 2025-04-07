import React from "react";

const Card = ({ width = "", children }) => {
  return (
    <div
      className={`${width} rounded-md shadow-md bg-white p-10 pb-20 md:pb-10 flex m-4 md:m-3 gap-6`}
    >
      {children}
    </div>
  );
};

export default Card;
