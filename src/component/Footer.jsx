import React from "react";
import Typo from "./Typo";
import { Link } from "react-router";
import {
  FacebookIcon,
  InstagramIcon,
  MoveRight,
  TwitterIcon,
} from "lucide-react";
import Input from "./Input";

const Footer = () => {
  return (
    <div className="bg-[#E1E7EB] mt-8 p-4 md:p-15 h-fit flex-1">
      {/* logo space  */}
      <section className="flex flex-col md:flex-row gap-8 justify-around">
        <div>
          <img
            src="/images/brand-logo-dark.svg"
            alt=""
            className="w-20 h-20 aspect-square"
          />
        </div>
        {/* ul space  PRODUCT */}
        <ul className="flex flex-col gap-3">
          <Typo
            fontSize="text-base"
            letterCase="capitalize"
            textColor="text-[#063A4F]"
          >
            product
          </Typo>
          {[
            "pricing",
            "frequently Asked Questions",
            "contact",
            "terms of services",
            "privacy policies",
            "Dispute resolution",
            "referral terms and condition",
          ].map((path) => (
            <li key={path}>
              <Link to={`/${path}`}>
                <Typo
                  fontSize="text-sm"
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
        {/* ul space  CONTACT */}
        <ul className="flex flex-col gap-3">
          <Typo
            fontSize="text-base"
            letterCase="capitalize"
            textColor="text-[#063A4F]"
          >
            contact
          </Typo>
          {[
            "12, ajewole, street lekki phase 1, lagos nigeria",
            "support@monnify.com",
          ].map((path) => (
            <li key={path}>
              <Link to={`/${path}`}>
                <Typo
                  fontSize="text-sm"
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
        <div className="flex flex-col gap-3">
          <Typo
            fontSize="text-base"
            letterCase="capitalize"
            textColor="text-[#063A4F]"
            margin="mb-3"
          >
            community
          </Typo>
          <div className="flex gap-8">
            <InstagramIcon className="cursor-pointer hover:text-[#00B8C2]" />
            <FacebookIcon className="cursor-pointer hover:text-[#00B8C2]" />
            <TwitterIcon className="cursor-pointer hover:text-[#00B8C2]" />
          </div>
          <Typo
            letterCase="capitalize"
            fontSize="text-base"
            textColor="text-[#063A4F]"
          >
            join developer stack community
          </Typo>
          <Typo
            letterCase="capitalize"
            fontSize="text-xs"
            textColor="text-[#063A4F] mb-4"
          >
            stay excited. subscribe to our newsletter
          </Typo>
          <div>
            <Input
              placeholder="your email"
              designs="bg-[#D4DCE2] flex justify-between p-0 rounded-full w-[300px]"
              placeholderColor="placeholder-[#668693] my-2 pl-4"
            >
              <div className="bg-[#FFFFFF] rounded-3xl px-3 py-1 flex w-full m-1 justify-center items-center basis-1/12">
                <MoveRight color="#F07622" size={25} />
              </div>
            </Input>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <p className="text-center text-xs text-[#A5A9AC] mb-2">
          © 2025 TeamApt. All rights reserved
        </p>
        <p className="text-center text-xs text-[#A5A9AC]">
          © 2025 TeamApt. All rights reserved All text, graphics, audio files,
          code, downloadable material, and other works on this web site are the
          copyrighted works of TeamApt. All Rights Reserved. Any
          <br /> unauthorized redistribution or reproduction of any copyrighted
          materials on this website is strictly prohibited. Other product and
          company names are trademarks of their respective owners. This web site
          <br />
          contains simulated images; actual appearance may vary.
        </p>
      </section>
    </div>
  );
};

export default Footer;
