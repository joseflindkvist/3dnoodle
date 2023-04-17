import React from "react";
import { Box, Typography } from "@mui/material";
import BackToTopButton from "../BackToTopButton";
import { AppBar } from "@mui/material";
import { Color } from "@mui/material";

export default function BottomBar() {
  return (
    <Box>
      <AppBar
        position="fixed"
        elevation="0"
        color="transparent"
        sx={{
          top: "auto",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <BackToTopButton />
      </AppBar>
    </Box>
  );
}
