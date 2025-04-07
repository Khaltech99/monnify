import { Minus } from "lucide-react";
import React from "react";
import Typo from "./Typo";
import AboutSectionWrapper from "./AboutSectionWrapper";

const WhatIsMonify = () => {
  return (
    <>
      <AboutSectionWrapper>
        <div className="flex flex-1">
          <Minus size={50} color="gray" />
          <div className="flex flex-col">
            <Typo letterCase="capitalize m-2 " fontSize="text-2xl">
              what is monnify
            </Typo>
            <Typo
              letterCase="capitalize text-[#A0A4A7] m-2 font-light"
              fontSize="text-xl"
            >
              payment gateway redefined
            </Typo>
          </div>
        </div>
        <Typo
          letterCase="capitalize text-[gray] m-2 text-left md:basis-1/2"
          fontSize="text-base pl-12 p-2 md:p-0"
        >
          Monnify is a gateway for business to accept payments from customers,
          either on recurring of one-time basis. Monnify offers easier. faster
          and cheaper way for business to get paid on their web and mobile
          applications using convinient payment methods for customers with
          highest success rates to obtainable in Nigeria.
        </Typo>
      </AboutSectionWrapper>
    </>
  );
};

export default WhatIsMonify;
