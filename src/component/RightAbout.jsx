// import React, { useState } from "react";
import Card from "./Card";
import Typo from "./Typo";
import Button from "./Button";
import { Link } from "react-router";

const RightAbout = ({ payments }) => {
  return (
    <div
      className={`flex flex-1 flex-col md:${
        payments.length > 2 ? "flex-col" : "flex-row"
      }`}
    >
      {payments.map((paymentMethod) => (
        <>
          <Card width="w-[80%] md:w-full flex-col md:flex-row">
            <div key={paymentMethod.title}>
              <img src={paymentMethod.img} alt="image" />
            </div>
            <div>
              <Typo
                letterCase="capitalize"
                fontSize="text-base"
                textColor="#063A4F"
              >
                {paymentMethod.title}
              </Typo>
              <Typo
                letterCase="capitalize"
                fontSize="text-sm mt-6"
                textColor="#063A4F"
              >
                {paymentMethod.desc}
              </Typo>
              {paymentMethod.btn ? (
                <Button
                  btnBgColor="bg-[#F07622] mt-4 w-[150px]"
                  border={{ borderWidth: "", borderRadius: "rounded-sm" }}
                >
                  <Typo
                    fontSize="text-sm"
                    textColor="text-white text-center"
                    letterCase="capitalize"
                  >
                    <Link to="/">
                      <p className="px-4 py-1.5">{paymentMethod.btn}</p>
                    </Link>
                  </Typo>
                </Button>
              ) : null}
            </div>
          </Card>
        </>
      ))}
    </div>
  );
};

export default RightAbout;
