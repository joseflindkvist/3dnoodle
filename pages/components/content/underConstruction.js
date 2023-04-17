import React from "react"
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

export default function UnderConstruction(){
    return(
        <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            color: "black",
            fontFamily: "Roboto",
            fontSize: "300%",
            padding: "10px",
          }}
        >
          Website is under construction
        </Box>
        <Box
          sx={{
            color: "black",
            fontFamily: "Roboto",
            padding: "10px",
          }}
        >
          For now, contact us through our LinkedIn or send us an email
        </Box>
        <Box sx={{}}>
          <LinkedIn fontSize="large" color="primary" />
          <a href="mailto:info@3dnoodle.com">
            <EmailOutlined fontSize="large" color="primary" />
          </a>
        </Box>
      </Box>
    )
}