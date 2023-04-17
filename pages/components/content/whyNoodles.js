import React from "react";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField, ThemeProvider, Typography } from "@mui/material";
import dog from "./dog.png";
import noodles3 from "./noodles3.jpg";
import { useEffect } from "react";
import { baseTheme } from "@/styles/styles";
import { BackToTopButton } from "../BackToTopButton";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CheckIcon from "@mui/icons-material/Check";
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

export default function WhyNoodles() {
  useEffect(() => {
    Aos.init({ duration: "2500" });
  });
  return (
    <Box
      id="aboutus"
      data-aos="fade"
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
        <Typography
          sx={{
            fontSize: 25,
            py: "30px",
            fontFamily: [""],
            fontWeight: "",
          }}
        >
          {/* WHY NOODLES? */}
          Noodles made by 3D Noodles International will offer many advantages:
        </Typography>
        <Box
          sx={{
            alignItems: "flex-start",
            alignContent: "flex-start",
            textAlign: "left",

            display: "flex",
            p: "",
            flexDirection: "column",
            gap: "10px 30px",
            fontSize: "30",
            justifyContent: "space-between",
          }}
        >
          <Typography x sx={{ fontWeight: "cursive" }}></Typography>
          <Typography>
            <CheckIcon color="primary" />
            Provide directly the concave sides of required radius
          </Typography>
          <Typography>
            <CheckIcon color="primary" />
            Speed up composite production, no investments needed Low production
            cost, save labour and inventory
          </Typography>
          <Typography>
            <CheckIcon color="primary" />
            {"    "}
            Generate virtually no waste Repeatable defined shape for consistent
            properties
          </Typography>
          <Typography>
            {" "}
            <CheckIcon color="primary" />
            Enable consistent quality Improve mechanical performance
          </Typography>
          <Typography>
            {" "}
            <CheckIcon color="primary" />
            Provide customized solutions Allow scaling-up the process The
            noodles can be produced in different shapes and sizes with different
            fibers and tailored to solution
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
