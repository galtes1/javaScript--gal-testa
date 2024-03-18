import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";

export default function CustomFooter() {
  return (
    <>
      <Paper>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="About" icon={<InfoIcon />} />
          <BottomNavigationAction label="Cards" icon={<StyleIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}
