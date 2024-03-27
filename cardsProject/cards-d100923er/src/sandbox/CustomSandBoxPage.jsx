import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import CustomNavItem from "../routes/components/CustomNavItem";

export default function CustomSandBoxPage() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar sx={{ color: "black" }}>
          <CustomNavItem to="counter" label="Counter" />
          <CustomNavItem to="lifeCycle" label="Life cycle" />
          <CustomNavItem to="countries" label="Counteries" />
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
