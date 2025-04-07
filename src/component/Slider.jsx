import { X } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import Typo from "./Typo";
import Button from "./Button";

const Slider = ({ setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="absolute w-full top-0 bg-[#0e536e] flex flex-col justify-between h-screen pt-6 px-6 z-50">
      <div className="flex flex-col basis-11/12">
        <X
          color="white"
          size={40}
          className="self-end cursor-pointer"
          onClick={handleClose}
        />
        <ul className="flex flex-col gap-y-4 mt-6">
          {[
            "checkout-offline",
            "offline-payment",
            "pricing",
            "documentation",
            "contact",
          ].map((path) => (
            <li key={path}>
              <Link to={`/${path}`} onClick={handleClose}>
                <Typo
                  fontSize="text-xl"
                  letterCase="capitalize"
                  textColor="text-[#ffffff]"
                  hover="hover:text-[#00B8C2]"
                >
                  {path.replace("-", " ")}
                </Typo>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 self-center bg-[#063A4F] w-screen justify-center items-center p-4 h-full basis-1/12">
        <Button
          btnBgColor="bg-transparent"
          border={{
            borderWidth: "border",
            borderRadius: "rounded-sm",
            borderColor: "border-[#ffffff]",
          }}
        >
          <Typo
            fontSize="text-sm"
            textColor="text-[#ffffff]"
            letterCase="capitalize"
          >
            <Link to="/" onClick={handleClose}>
              <p className="px-4 py-1.5">Merchant Login</p>
            </Link>
          </Typo>
        </Button>
        <Button
          btnBgColor="bg-[#F07622]"
          border={{ borderWidth: "", borderRadius: "rounded-sm" }}
        >
          <Typo
            fontSize="text-sm"
            textColor="text-white"
            letterCase="capitalize"
          >
            <Link to="/" onClick={handleClose}>
              <p className="px-4 py-1.5">Get Started</p>
            </Link>
          </Typo>
        </Button>
      </div>
    </div>
  );
};

export default Slider;
