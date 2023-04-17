import React from "react";
import { Box, Button } from "@mui/material";

export default function NaviagtionButton(props) {
  function createbutton() {
    return (
      <Button
        onClick={() => {
          scrollElement();
        }}
        sx={{ p: "40px", color: "black" }}
      >
        about us
        {props.text}
      </Button>
    );
  }
  function scrollElement() {
    var element = props.element;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return createbutton();
}
