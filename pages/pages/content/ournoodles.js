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
        justifyContent: "center",
        flexDirection: "reverse-row",
        "@media (max-width: 768px)": { flexDirection: "column" },
      }}
    >
      <Box
        id="text"
        sx={{
          maxWidth: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "black",
          p: "0px",
          textAlign: "left",
          "@media (max-width: 768px)": { maxWidth: "70%" },
        }}
      >
        <Typography sx={{ fontSize: 25, py: "30px", fontWeight: "650" }}>
          what is a Noodle?
        </Typography>
        <Typography sx={{ p: "" }}>
          A Noodle is a indispensable product used in large quantities by the
          composite industry. 3D Noodles International AB produces noodles
          faster, cheaper and with consistent properties whereby helping the
          customer reduce their cost and increase the productivity and quality.
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
          "@media (max-width: 768px)": {
            p: "0px",
            order: 2,
            maxWidth: "70%",
            flexDirection: "column",
          },
        }}
      />
    </Box>
  );
}
