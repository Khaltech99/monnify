import React from "react";

const WrapperContainer = ({ children, margin }) => {
  return (
    <div className={`flex flex-col mx-4 ${margin} md:flex-row md:mx-22`}>
      {children}
    </div>
  );
};

export default WrapperContainer;
