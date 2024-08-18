import React from "react";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField, Fab, AppBar } from "@mui/material";
import {
  Instagram,
  LinkedIn,
  EmailOutlined,
  LinkedInOutlined,
  LinkedCameraOutlined,
  Book,
} from "@mui/icons-material";

import NavigationBar from "./components/navigationbar/navigationbar";
import { UnderConstruction } from "./pages/content/underConstruction";
import ContentContainer from "./pages/content/contentcontainer";
import BackToTopButton from "./components/BackToTopButton";
import BottomBar from "./components/bottombar/bottombar";
//import ThemeProvider from "styled-components";
import BottomMenu from "./pages/content/bottomMenu";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeMain } from "../styles/styles";
import NewsPage from "./pages/content/newsPage";

const MaintenancePage = () => {
  return (
    <Box
      sx={{
        //backgroundImage: `url(${"https://im3.ezgif.com/tmp/ezgif-3-8a0e0c6c99.gif"})`,
        backgroundSize: "cover",
        backgroundColor: "white",
      }}
    >
      <ThemeProvider theme={themeMain}>
        <NavigationBar />
        <ContentContainer />
        <BottomBar />
        {/* <BottomMenu /> */}
      </ThemeProvider>
    </Box>
  );
};

export default MaintenancePage;
