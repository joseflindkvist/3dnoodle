import React from "react";
import { Box, TextField } from "@mui/material"



export default function ContactForm(){
    return(
        <Box
        sx={{
          backgroundColor: "orange",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>Contact Form</Box>
        <Box sx={{ color: "white" }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined">
            name
          </TextField>
        </Box>
        </Box>
    )
}