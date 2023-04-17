import React from "react";
import { Box } from "@mui/system";
import { useState } from "react";
import logo1 from "./logo1.png";
import { FitScreen } from "@mui/icons-material";
import { Button, duration } from "@mui/material";
import Typography from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { NaviagtionButton } from "../navigationButton";
import { ContentContainer } from "../content/contentcontainer";
import { AboutUs } from "../content/abooutUs";
import { OurNoodles } from "../content/ournoodles";


export function NavigationBar() {
  function scrollElement(id) {
    console.log(id);
    var element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", duration: "2000" });
    }
  }


  return (
    <Box>
      <AppBar
        position="fixed"
        elevation="0"
        sx={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0))",
        }}
      >
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
              src={logo1.src}
              sx={{
                maxHeight: "140px",
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

              <Button
                onClick={() => {
                  scrollElement("aboutus");
                }}
                sx={{ p: "40px", color: "black" }}
              >
                about us
              </Button>
              <Button
                onClick={() => {
                  scrollElement("noodles");
                }}
                sx={{ p: "40px", color: "black" }}
              >
                noodles
              </Button>
              <Button
                onClick={() => {
                  scrollElement("contact");
                }}
                sx={{ p: "40px", color: "black" }}
              >
                contact
              </Button>
            </Box>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
