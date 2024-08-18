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
import NewsPage from "./newsPage";
import NoodleInfoPage from "./noodleInfoPage";

export default function ContentContainer(theme) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "30vh",
          "@media (max-width: 768px)": {
            flexDirection: "column",
            height: "20vh",
          },
        }}
      ></Box>
      <NewsPage />
      <AboutUs theme={theme} />
      <OurNoodles />
      <NoodleInfoPage />
      <WhyNoodles />
      <Box
        sx={{
          height: "20vh",
          backgroundColor: "#f9f9f9",
          "@media (max-width: 768px)": {
            flexDirection: "column",
            height: "10vh",
          },
        }}
      ></Box>
      <ContactInfo />
    </Box>
  );
}
