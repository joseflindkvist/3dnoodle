import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Aos from "aos";
import "aos/dist/aos.css";

export default function WhyNoodles() {
  useEffect(() => {
    Aos.init({ duration: "2500" });
  }, []);

  return (
    <Box
      id="whynoodles"
      sx={{
        width: "100vw",
        backgroundColor: "#f9f9f9", // Consistent background color
        padding: "100px 20px",
        "@media (max-width: 768px)": {
          padding: "50px 20px",
        },
      }}
    >
      <Box
        data-aos="fade"
        data-aos-anchor-placement="top-center"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          "@media (max-width: 768px)": {
            padding: "0px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 25,
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "30px",
            color: "black", // Set text color to black
          }}
        >
          Noodles made by 3D Noodles International offer many advantages:
        </Typography>
        <Box
          sx={{
            backgroundColor: "white", // Background color for the text box
            borderRadius: "15px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            p: "20px",
            maxWidth: "80%",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {[
              "Provide directly the concave sides of required radius",
              "Speed up composite production, no investments needed; low production cost, save labor and inventory",
              "Generate virtually no waste; Repeatable defined shape for consistent properties",
              "Enable consistent quality; Improve mechanical performance",
              "Provide customized solutions; Allow scaling-up the process; The noodles can be produced in different shapes and sizes with different fibers and tailored to solutions",
            ].map((text, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <CheckIcon
                  sx={{
                    color: "green",
                  }}
                />
                <Typography
                  sx={{
                    color: "black", // Set text color to black
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
