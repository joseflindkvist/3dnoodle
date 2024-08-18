import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";
import Aos from "aos";

export default function ContactInfo() {
  useEffect(() => {
    Aos.init({ duration: "2500" });
  }, []);

  return (
    <Box
      id="contact"
      data-aos="fade"
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px", // Reduce padding for a more compact design
        backgroundColor: "#1a3b5d", // Light background color for contrast
      }}
    >
      <Box
        sx={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "white", // Box background color
          borderRadius: "15px", // Rounded corners
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
          padding: "30px", // Padding inside the box
        }}
      >
        <Typography
          sx={{
            fontSize: 25,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px", // Space below the heading
            fontWeight: "700",
            color: "#23a6e5", // Match the primary color
          }}
        >
          Send us an email{" "}
          <a href="mailto:info@3dnoodle.com">
            <EmailOutlined
              fontSize="large"
              color="#23a6e5"
              sx={{ color: "#23a6e5", verticalAlign: "middle" }} // Align icon with middle of the text
            />
          </a>
        </Typography>

        <Box
          sx={{
            marginBottom: "20px",
            color: "black",
          }}
        >
          <Typography sx={{ fontWeight: "700", marginBottom: "5px" }}>
            Contact:
          </Typography>
          <Typography>info@3dnoodle.com</Typography>
        </Box>

        <Box
          sx={{
            marginBottom: "20px",
            color: "black",
          }}
        >
          <Typography sx={{ fontWeight: "700", marginBottom: "5px" }}>
            Postal Address:
          </Typography>
          <Typography>Box 209, 11479 Stockholm, Sweden</Typography>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            fontStyle: "italic",
            color: "#666", // Slightly muted color for the names
          }}
        >
          Fredrik Winberg and Nandan Khokar
        </Typography>
      </Box>
    </Box>
  );
}
