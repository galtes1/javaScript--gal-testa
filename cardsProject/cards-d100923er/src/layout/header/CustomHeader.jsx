import React from "react";
import CustomLogo from "./topNavBar/logo/CustomLogo";
import CustomLogoIcon from "./topNavBar/logo/CustomLogoIcon";
import { Stack } from "@mui/material";

export default function CustomHeader() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        backgroundColor: "#6DBABA",
        color: "#e3f2fd",
      }}
    >
      <CustomLogoIcon />
      <CustomLogo />
    </Stack>
  );
}
