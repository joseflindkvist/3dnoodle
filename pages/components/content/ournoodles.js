import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import dog from "./dog.png";
import noodles3 from "./noodles3.jpg";
import noodles4 from "./noodles4.jpg";

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
    Aos.init({ duration: "2500" });
  });
  return (
    <Box
      id="noodles"
      data-aos="fade"
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "reverse-row",
      }}
    >
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
        <Typography sx={{ fontSize: 25, py: "30px", fontWeight: "650" }}>
          WHAT ARE NOODLES?
        </Typography>
        <Typography sx={{ p: "" }}>
          Noodle is a necessary product and used extensively in the existing
          composite industry in large quantities. 3D Noodles International AB
          will produce noodles faster and cheaper and help the customer reduce
          their costs and increase the productivity and quality.
        </Typography>
      </Box>
      <Box
        id="image"
        component="img"
        src={noodles4.src}
        sx={{
          display: "flex",
          flex: "flex-basis",
          p: "15px",
          flexBasis: "auto",
          maxWidth: "30%",
        }}
      />
    </Box>
  );
}
