import WrapperContainer from "./WrapperContainer";
import Typo from "./Typo";
import Button from "./Button";
import { Link } from "react-router";
import { MoveDown } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import CarouselIndicators from "./CarouselIndicators";
import { useState } from "react";

const images = ["/images/shutter-1.webp", "/images/shutter-2.webp"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <WrapperContainer margin="mt-10 md:mt-20">
      <div className="flex flex-col">
        <Typo
          fontSize="text-4xl font-medium md:text-7xl"
          textColor="#1A4A5E"
          letterCase
          alignment="mb-4 w-full"
        >
          A Better Way To Collect Payments
        </Typo>
        <Typo
          fontSize="text-2xl font-light md:text-3xl"
          textColor="#668693"
          letterCase="capitalize"
          alignment="mb-6"
        >
          A Better Way To Collect Payments
        </Typo>
        <div className="flex flex-col md:justify-between  md:flex-row md:items-center md:w-md">
          <Button
            btnBgColor="bg-[#F07622] w-[180px]"
            border={{ borderWidth: "", borderRadius: "rounded-sm" }}
          >
            <Typo
              fontSize="text-sm text-center"
              textColor="text-white"
              letterCase="capitalize"
            >
              <Link to="/">
                <p className="px-4 py-1.5">create free account</p>
              </Link>
            </Typo>
          </Button>

          <div className="flex justify-between items-center">
            <CarouselIndicators
              count={images.length}
              currentIndex={currentIndex}
              onIndicatorClick={setCurrentIndex}
            />
          </div>
        </div>
        <MoveDown size={40} className="my-20 text-[red]" />
      </div>
      <div className="basis-1/2">
        <ImageCarousel
          images={images}
          interval={2000}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </WrapperContainer>
  );
};

export default Hero;
