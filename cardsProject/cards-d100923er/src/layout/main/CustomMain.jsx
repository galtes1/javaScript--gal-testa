import { Box } from "@mui/material";
import React from "react";

export default function CustomMain({ children }) {
  return (
    <Box sx={{ minHeight: "85vh", backgroundColor: "#e3f2fd" }}>{children}</Box>
  );
}
