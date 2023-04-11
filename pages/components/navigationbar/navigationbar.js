import React from "react";
import { Box } from "@mui/system";
import { useState } from "react";
import printscreenlogo from "./printscreenlogo.png";
import { FitScreen } from "@mui/icons-material";
import { Button } from "@mui/material";
import Typography from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";

export default function NavigationBar() {
  return (
    <AppBar position="static" sx={{ background: "white" }}>
      <Toolbar>
        <Box
          id="topbar"
          sx={{
            display: "flex",
            color: "black",
            // height: "15vh", kanske ej behövs
            width: "100vw",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="img"
            src={printscreenlogo.src}
            sx={{
              display: "flex",
              flex: "flex-basis",
              p: "15px",
              flexBasis: "auto",
            }}
          ></Box>
          <Box
            id="nav_buttons"
            sx={{
              p: "10px",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* <Button
              variant="text"
              onClick={console.log("about us page")}
              sx={{
                typography: "ABOUT US",
                p: "40px",
                color: "black",
                fontWheight: "bold",
              }}
            >
              About us
            </Button>
            <Button sx={{ p: "40px", color: "black" }}>
              <Box>Contact</Box>
            </Button> */}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
