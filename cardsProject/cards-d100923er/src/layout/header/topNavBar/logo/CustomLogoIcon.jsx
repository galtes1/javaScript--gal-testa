import { Avatar } from "@mui/material";
import React from "react";

export default function CustomLogoIcon({ avatarPNG }) {
  return (
    <>
      <Avatar alt="avatar" src={avatarPNG} />
    </>
  );
}
