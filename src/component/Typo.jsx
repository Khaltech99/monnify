import React from "react";

const Typo = ({
  fontSize = "text-base",
  letterCase = "uppercase",
  textColor = "",
  hover = "",
  alignment = "",
  children,
}) => {
  return (
    <div
      className={`${fontSize} ${textColor} ${letterCase} ${hover} ${alignment}`}
    >
      {children}
    </div>
  );
};

export default Typo;
