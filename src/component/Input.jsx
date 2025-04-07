import React from "react";

const Input = ({ placeholder, children, designs, placeholderColor }) => {
  return (
    <div className={` ${designs}`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`${placeholderColor} basis-10/12 outline-none bg-none m-0 p-0 capitalize `}
      />
      {children}
    </div>
  );
};

export default Input;
