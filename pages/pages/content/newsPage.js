import React, { useEffect } from "react";
import Aos from "aos";
import { Box, Typography } from "@mui/material";

export default function NewsPage() {
  useEffect(() => {
    Aos.init({ duration: "2500" });
  }, []);

  return (
    <Box
      id="news"
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
          maxWidth: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "black",
          p: "20px", // Padding inside the box
          textAlign: "left",
          borderRadius: "15px", // Rounded corners
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Optional: shadow for a more polished look
          backgroundColor: "#f9f9f9", // Background color
          "@media (max-width: 768px)": { maxWidth: "70%" },
        }}
      >
        <Typography
          sx={{
            fontSize: 25,
            py: "30px",
            fontWeight: "650",
            color: "black",
          }}
        >
          San Diego, USA 9-12 September
        </Typography>
        <Typography>
          We are pleased to inform that we will participate at CAMX Composites
          and Advanced Material Expo in San Diego, USA, from September 9-12,
          2024. You will find us joining Textreme at Booth NN6. Visit us to
          explore the cost-efficient 3D Noodles and discuss the potential in the
          unique delamination-free preforms.
        </Typography>
      </Box>
    </Box>
  );
}
