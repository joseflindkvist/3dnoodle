import React from "react";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField, ThemeProvider, Typography } from "@mui/material";
import dog from "./dog.png";
import noodles1 from "./noodles1.jpg";
import { useEffect } from "react";
import { baseTheme } from "@/styles/styles";
import { BackToTopButton } from "../../components/BackToTopButton";
import { Lora } from "next/font/google";
import { useTheme } from "@mui/material";

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
  const themeInstance = useTheme();
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
        flexWrap: "wrap",
        "@media (max-width: 768px)": {

          flexDirection: "column",
        },
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
          "@media (max-width: 768px)": {
            p: "0px",
            order:2,
            maxWidth: "70%",
            flexDirection: "column",
          },
         
        }}
      ></Box>
      <Box
        id="text"
        sx={{
          fontFamily: themeInstance.typography.fontFamily,
          maxWidth: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "black",
          p: "0px",
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 25,
              py: "30px",

              fontWeight: "600",
            }}
          >
            ABOUT US
          </Typography>
        </Box>
        <Typography sx={{ fontFamily: themeInstance.typography.fontFamily }}>
          3D Noodles International AB, is a new company specialized in producing
          triangle-shaped fabric called noodles or fillers. It is a new Spin-off
          from Biteam AB.
        </Typography>
      </Box>
    </Box>
  );
}
