import React from "react";
import styled from "styled-components";
import { Box, flexbox, width } from "@mui/system";
import { TextField } from "@mui/material";
import {
  Instagram,
  LinkedIn,
  EmailOutlined,
  LinkedInOutlined,
  LinkedCameraOutlined,
  Book,
} from "@mui/icons-material";
import NavigationBar  from "./components/navigationbar/navigationbar";
import UnderConstruction  from "./components/content/underConstruction";
import ContentContainer  from "./components/content/contentcontainer";

const MaintenancePage = () => {
  return (
    <Box
      sx={{
        //backgroundImage: `url(${"https://im3.ezgif.com/tmp/ezgif-3-8a0e0c6c99.gif"})`,
        backgroundSize: "cover",
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <NavigationBar />
      <ContentContainer />
    </Box>
  );
};

export default MaintenancePage;