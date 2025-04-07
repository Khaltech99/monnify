import { Minus } from "lucide-react";
import React from "react";
import Typo from "./Typo";

const LeftAbout = ({ children }) => {
  return (
    <div className="flex-1 ">
      <div className="flex flex-1">
        <Minus size={50} color="gray" />
        <div className="flex flex-col">
          <Typo letterCase="capitalize m-2 " fontSize="text-2xl">
            {children}
          </Typo>
        </div>
      </div>
    </div>
  );
};

export default LeftAbout;
