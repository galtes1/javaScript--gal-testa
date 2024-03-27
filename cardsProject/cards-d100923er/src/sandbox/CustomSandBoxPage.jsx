import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import CustomNavItem from "../routes/components/CustomNavItem";

export default function CustomSandBoxPage() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <CustomNavItem to="counter" label="Counter" sx={{ color: "black" }} />
          <CustomNavItem
            to="lifeCycle"
            label="Life cycle"
            sx={{ color: "black" }}
          />
          <CustomNavItem
            to="countries"
            label="Counteries"
            sx={{ color: "black" }}
          />
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
