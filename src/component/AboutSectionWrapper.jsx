import React from "react";

const AboutSectionWrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-between md:flex-row md:mx-22 mt-10">
      {children}
    </div>
  );
};

export default AboutSectionWrapper;
