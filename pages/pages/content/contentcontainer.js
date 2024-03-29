import React from "react";
import { Box, flexbox, width } from "@mui/system";
import Aos from "aos";
import "aos/dist/aos.css";

import { UnderConstruction } from "./underConstruction";
import AboutUs from "./abooutUs";
import OurNoodles from "./ournoodles";
import ContactForm from "./contactForm";
import WhyNoodles from "./whyNoodles";
import ContactInfo from "./contactInfo";

export default function ContentContainer(theme) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AboutUs theme={theme} />
      <OurNoodles />
      <WhyNoodles />
      <ContactInfo />
    </Box>
  );
}
