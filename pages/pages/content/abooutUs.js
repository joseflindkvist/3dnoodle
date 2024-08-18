import React from "react";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField, Typography } from "@mui/material";
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
      color="primary"
      sx={{
        width: "100vw",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
            order: 2,
            maxWidth: "50%",
            flexDirection: "column",
            marginTop: "60px",
          },
        }}
      ></Box>
      <Box
        id="text"
        sx={{
          fontFamily: "Dosis Medium",
          maxWidth: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "black",
          p: "0px",
          textAlign: "right",
          flexWrap: "wrap",
          "@media (max-width: 768px)": {
            maxWidth: "70%",
            textAlign: "center",
          },
        }}
      >
        <Box>
          <Typography
            color="black"
            sx={{
              fontSize: 25,
              py: "30px",

              fontWeight: "600",
              "@media (max-width: 768px)": {
                py: "20px",
              },
            }}
          >
            about us
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
