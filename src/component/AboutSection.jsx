import React from "react";
import AboutSectionWrapper from "./AboutSectionWrapper";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";
import WhatIsMonify from "./WhatIsMonify";

import { customerPay, payments } from "../data";

const AboutSection = () => {
  return (
    <>
      <WhatIsMonify />
      <AboutSectionWrapper>
        <LeftAbout>How can your customer pay?</LeftAbout>
        <RightAbout payments={payments} />
      </AboutSectionWrapper>
      <AboutSectionWrapper>
        <LeftAbout>how can you collect payment</LeftAbout>
        <RightAbout payments={customerPay} />
      </AboutSectionWrapper>
      <AboutSectionWrapper>
        <LeftAbout>how can you collect payment</LeftAbout>
        <RightAbout payments={customerPay} />
      </AboutSectionWrapper>
    </>
  );
};

export default AboutSection;
