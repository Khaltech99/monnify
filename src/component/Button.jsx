import React from "react";
import { Link } from "react-router";

const Button = ({
  btnBgColor = "",
  cursor = "cursor-pointer",
  border = {
    borderWidth: "",
    borderRadius: "rounded-lg",
    borderColor: "",
  },
  shadow = "shadow-xl",

  children,
}) => {
  return (
    <div
      className={`${btnBgColor} ${border.borderColor}  ${border.borderRadius} ${border.borderWidth} ${cursor} ${shadow}`}
    >
      {children}
    </div>
  );
};

export default Button;
