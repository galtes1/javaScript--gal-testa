import { Box, Button } from "@mui/material";
import React, { useState } from "react";

export default function CustomMyBox() {
  const [color, setColor] = useState();
  const changeToBlue = () => setColor();
  const changeToRed = () => setColor("red");
  return (
    <>
      <Box
        sx={{ width: "500px", height: "500px", backgroundColor: "red" }}
      ></Box>
      <Button variant="contained" onClick={changeToBlue}>
        click
      </Button>
    </>
  );
}
