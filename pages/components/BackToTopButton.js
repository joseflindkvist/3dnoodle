import { Box, Button } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { ArrowUpward } from "@mui/icons-material";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AppBar from "@mui/material";

export default function BackToTopButton() {
  const [backToTopButton, setbackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      {backToTopButton && (
        <Button
          onClick={scrollUp}
          sx={{ color: "grey", display: "flex" }}
          position
        >
          <KeyboardArrowUpIcon
            fontSize="large"
            sx={{ fontSize: "65px", p: "15" }}
          />
        </Button>
      )}
    </Box>
  );
}
