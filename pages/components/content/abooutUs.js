import React from "react";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField, ThemeProvider, Typography } from "@mui/material";
import dog from "./dog.png";
import noodles1 from "./noodles1.jpg";
import { useEffect } from "react";
import { baseTheme } from "@/styles/styles";
import { BackToTopButton } from "../BackToTopButton";
import { Lora } from "next/font/google";

import {
  Instagram,
  LinkedIn,
  EmailOutlined,
  LinkedInOutlined,
  LinkedCameraOutlined,
  Book,
  Height,
  RoundedCorner,
} from "@mui/icons-material";
import Aos from "aos";

export default function AboutUs(theme) {
  useEffect(() => {
    Aos.init({ duration: "2500" });
  });
  return (
    <Box
      id="aboutus"
      data-aos="fade-down"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      <Box
        id="image"
        component="img"
        src={noodles1.src}
        sx={{
          display: "flex",
          flex: "flex-basis",
          p: "15px",
          flexBasis: "auto",
          maxWidth: "25%",
        }}
      ></Box>
      <Box
        id="text"
        sx={{
          maxWidth: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "black",
          p: "0px",
          textAlign: "center",
        }}
      >
        <Box theme={theme}>
          <Typography
            sx={{
              fontSize: 25,
              py: "30px",
              // fontFamily: "Lora",
              fontWeight: "600",
            }}
          >
            ABOUT US 
          </Typography>
        </Box>
        <Typography sx={{ p: "" }}>
          3D Noodles International AB, is a new company specialized in producing
          triangle-shaped fabric called noodles or fillers. It is a new Spin-off
          from Biteam AB.
        </Typography>
      </Box>
    </Box>
  );
}
