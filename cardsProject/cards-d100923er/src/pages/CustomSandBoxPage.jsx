import React from "react";
import { Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";

export default function CustomSandBoxPage() {
  const nav = useNavigate();
  return (
    <Toolbar>
      <Button variant="contained" onClick={() => nav(ROUTES.COUNTER)}>
        Counter
      </Button>
    </Toolbar>
  );
}
