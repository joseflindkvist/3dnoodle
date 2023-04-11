import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField } from "@mui/material";
import dog from "./dog.png";
import {
  Instagram,
  LinkedIn,
  EmailOutlined,
  LinkedInOutlined,
  LinkedCameraOutlined,
  Book,
  Height,
} from "@mui/icons-material";

export default function OurNoodles() {
  useEffect(() => {
    Aos.init({ duration: "3000" });
  });
  return (
    <Box
    //   data-aos="fade-up"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "reverse-row",
      }}
    >
      <Box
        id="image"
        component="img"
        src={dog.src}
        sx={{
          display: "flex",
          flex: "flex-basis",
          p: "15px",
          flexBasis: "auto",
          maxWidth: "30%",
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
        }}
      >
        <Box sx={{ py: "30px" }}>ABOUT US</Box>
        <Box sx={{ p: "" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </Box>
    </Box>
  );
}
