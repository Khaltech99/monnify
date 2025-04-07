import Typo from "./Typo";
import { Link } from "react-router"; // Or react-router-dom if using v6
import useViewPort from "../hooks/useViewPort";
import Button from "./Button";
import { Menu } from "lucide-react";
import Slider from "./Slider";
import { useState } from "react";

const NavBar = () => {
  const { width } = useViewPort();
  const [open, setOpen] = useState(false);
  const isSmall = width <= 1021;

  const handleDrop = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      {open && <Slider setOpen={setOpen} />}
      <div className="flex justify-around items-center mt-6">
        <div>
          <a href="/">
            <img
              src="/images/monify_logo.svg"
              alt="logo"
              className="w-38 h-15"
            />
          </a>
        </div>

        {isSmall ? (
          <Menu
            color="#00B8C2"
            size={45}
            absoluteStrokeWidth
            onClick={handleDrop}
          />
        ) : (
          <>
            <ul className="flex gap-8">
              {[
                "checkout-offline",
                "offline-payment",
                "pricing",
                "documentation",
                "contact",
              ].map((path) => (
                <li key={path}>
                  <Link to={`/${path}`}>
                    <Typo
                      fontSize="text-base"
                      letterCase="capitalize"
                      textColor="text-[#063A4F]"
                      hover="hover:text-[#00B8C2]"
                    >
                      {path.replace("-", " ")}
                    </Typo>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Button
                btnBgColor="bg-transparent"
                border={{
                  borderWidth: "border",
                  borderRadius: "rounded-sm",
                  borderColor: "border-[#063A4F]",
                }}
              >
                <Typo
                  fontSize="text-sm"
                  textColor="text-[#063A4F]"
                  letterCase="capitalize"
                >
                  <Link to="/">
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
                  <Link to="/">
                    <p className="px-4 py-1.5">Get Started</p>
                  </Link>
                </Typo>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
