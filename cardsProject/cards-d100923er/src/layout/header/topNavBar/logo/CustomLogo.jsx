import { Typography } from "@mui/material";
import React from "react";

export default function CustomLogo() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "fantasy",
          mr: 2,
          display: { xs: "none", md: "inline-flex" },
        }}
      >
        BCard
      </Typography>
    </>
  );
}
