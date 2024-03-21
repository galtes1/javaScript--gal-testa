import { Avatar, IconButton } from "@mui/material";
import React from "react";

export default function CustomLogoIcon() {
  return (
    <IconButton>
      <Avatar
        alt="business-card"
        src="assets/images/avatarCards.png"
        sx={{ width: 56, height: 56 }}
      />
    </IconButton>
  );
}
