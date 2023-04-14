import React from "react";
import { Box, TextField, Typography } from "@mui/material";

export default function ContactForm() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box>Contact Form</Box>
      <Box sx={{ color: "white" }} id="contact">
        <Typography sx={{ color: "black", p: "15px" }}>
          Contact Form:
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Mail"
            variant="outlined"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            multiline="true"
            minRows="2"
          ></TextField>
        </Box>
      </Box>
    </Box>
  );
}
