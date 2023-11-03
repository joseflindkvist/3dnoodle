import React from "react";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import dog from "./dog.png";
import noodles1 from "./noodles1.jpg";
import { useEffect } from "react";
import { baseTheme } from "@/styles/styles";
import { BackToTopButton } from "../../components/BackToTopButton";
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

export default function ContactInfo() {
  useEffect(() => {
    Aos.init({ duration: "2500" });
  });
  return (
    <Box
      id="contact"
      data-aos="fade"
      sx={{
        width: "100vw",
        height: "60vh",
        display: "flex",
        alignItems: "start",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      <Box
        id="text"
        sx={{
          maxWidth: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "black",
          p: "0px",
          textAlign: "left",

          fontSize: 20,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: 25,
            gap: "10px",
            py: "30px",
          }}
        >
          send us an email{" "}
          <a href="mailto:info@3dnoodle.com">
            <EmailOutlined
              fontSize="large"
              color="primary"
              sx={{ px: "0px" }}
            />
          </a>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            justifyContent: "start",
            // gap: "0px 100px",
          }}
        >
          <Typography sx={{ fontFamily: [""], fontWeight: "700" }}>
            contact:
          </Typography>
          <Typography>info@3dnoodle.com</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignContent: "start",
            width: "100%",
            py: "10px",

            // justifyContent: "space-evenly",
            // gap: "0px 100px",
          }}
        >
          <Typography sx={{ fontWeight: "700" }}>postal address:</Typography>

          <Typography>Box 209 11479 Stockholm Sweden</Typography>
        </Box>

        <Typography
          sx={{
            py: "5px",
            display: "flex",
            justifyContent: "center",
            fontStyle: "italic ",
          }}
        >
          Fredrik Winberg and Nandan Khokar
        </Typography>
      </Box>
    </Box>
  );
}
