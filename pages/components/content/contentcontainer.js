import React from "react";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField } from "@mui/material";
import {
  Instagram,
  LinkedIn,
  EmailOutlined,
  LinkedInOutlined,
  LinkedCameraOutlined,
  Book,
  Margin,
} from "@mui/icons-material";
import Aos from "aos";
import "aos/dist/aos.css";
import { UnderConstruction } from "./underConstruction";
import { AboutUs } from "./abooutUs";
import { OurNoodles } from "./ournoodles";
import { useEffect } from "react";
export function ContentContainer() {
  useEffect(() => {
    Aos.init({ duration: "3000" });
  });
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AboutUs data-aos="fade-up" />
      <OurNoodles/>
      <UnderConstruction data-aos="fade-up" />
   

    </Box>
  );
}
