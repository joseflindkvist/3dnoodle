import React from "react";
import { Box } from "@mui/system";
import { useState } from "react";
import logo1 from "./logo1.png";
import logoLarge from "./logoLarge.png";
import { FitScreen } from "@mui/icons-material";
import Typography from "@mui/material";
import { AppBar, Toolbar, useTheme, Button } from "@mui/material";
import NaviagtionButton from "../navigationButton";
import {} from "@mui/material";

export default function NavigationBar() {
  const themeInstance = useTheme();
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
        fontFamily={themeInstance.typography}
        sx={{
          background:
            "linear-gradient(to bottom,rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1),rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        }}
      >
        <Toolbar>
          <Box
            id="topbar"
            sx={{
              display: "flex",
              color: "black",
              // flexFlow: "column wrap",
              flexWrap: "wrap",
              width: "100vw",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              component="img"
              src={logoLarge.src}
              sx={{
                maxHeight: "120px",
                display: "flex",
                flex: "flex-basis",
                p: "15px",
                flexBasis: "auto",
                "@media (max-width: 768px)": {
                  p: "5px",
                  maxHeight: "80px",
                },
              }}
            ></Box>
            <Box
              id="nav_buttons"
              sx={{
                p: "0px",
                justifyContent: "space-evenly",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                fontFamily: themeInstance.typography.fontFamily,
              }}
            >
              <Button
                fontFamily={themeInstance.typography.fontFamily}
                onClick={() => {
                  scrollElement("aboutus");
                  console.log(themeInstance.typography.fontFamily);
                }}
                sx={{
                  fontFamily: themeInstance.typography.fontFamily,
                  p: "30px",
                  color: "black",

                  fontSize: "1.2em",
                  "@media (max-width: 768px)": {
                    fontSize: "3vw", // Adjust font size for smaller screens
                    p: "10px",
                  },
                }}
              >
                about us
              </Button>
              <Button
                onClick={() => {
                  scrollElement("noodles");
                }}
                sx={{
                  p: "30px",
                  color: "black",
                  fontSize: "1.2em",
                  "@media (max-width: 768px)": {
                    fontSize: "3vw", // Adjust font size for smaller screens
                    p: "10px",
                  },
                }}
              >
                noodles
              </Button>
              <Button
                // variant="contained"
                //textTransform="lowercase"
                onClick={() => {
                  scrollElement("whynoodles");
                }}
                sx={{
                  p: "30px",
                  color: "black",
                  fontSize: "1.2em",
                  "@media (max-width: 768px)": {
                    fontSize: "3vw", // Adjust font size for smaller screens
                    p: "10px",
                    texttransform: "lowercase",
                  },
                }}
              >
                advantages
              </Button>
              <Button
                onClick={() => {
                  scrollElement("contact");
                }}
                sx={{
                  p: "30px",
                  //color: "black",
                  fontSize: "1.2em",
                  "@media (max-width: 768px)": {
                    fontSize: "3vw", // Adjust font size for smaller screens
                    p: "10px",
                  },
                }}
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
