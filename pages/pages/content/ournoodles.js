import React, { useEffect } from "react";
import Aos from "aos";
import { Box, Typography } from "@mui/material";
import noodles4 from "./noodles4.jpg"; // Ensure this path is correct

export default function OurNoodles() {
  useEffect(() => {
    Aos.init({ duration: "2500" });
  }, []);

  return (
    <Box
      id="noodles"
      data-aos="fade"
      sx={{
        width: "100vw",
        height: "auto",
        padding: "100px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "reverse-row",
        scrollMarginTop: "120px",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          padding: "50px 0px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "15px", // Rounded corners
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Optional shadow
          backgroundColor: "#23a6e5", // Light background color
          p: "20px", // Padding inside the box
          maxWidth: "70%", // Adjusted max width
          "@media (max-width: 768px)": {
            flexDirection: "column",
            maxWidth: "90%",
          },
        }}
      >
        <Box
          id="text"
          sx={{
            maxWidth: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "black",
            textAlign: "left",
            p: "20px", // Padding inside text box
            "@media (max-width: 768px)": { maxWidth: "100%", p: "10px" },
          }}
        >
          <Typography
            sx={{ fontSize: 25, fontWeight: "650", pb: "20px", color: "white" }}
          >
            What is a Noodle?
          </Typography>
          <Typography sx={{ color: "white" }}>
            A Noodle is an indispensable product used in large quantities by the
            composite industry. 3D Noodles International AB produces noodles
            faster, cheaper, and with consistent properties, helping customers
            reduce costs and increase productivity and quality.
          </Typography>
        </Box>
        <Box
          id="image"
          component="img"
          src={noodles4.src}
          alt="Noodles"
          sx={{
            borderRadius: "15px",
            maxWidth: "50%",
            marginLeft: "20px",
            display: "block",
            "@media (max-width: 768px)": {
              marginLeft: "0px",
              maxWidth: "100%",
              marginTop: "20px",
            },
          }}
        />
      </Box>
    </Box>
  );
}
