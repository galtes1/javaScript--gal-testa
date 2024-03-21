import React from "react";
import { Link } from "react-router-dom";

export default function CustomNavBarLink({ children, sx, to }) {
  return (
    <Link to={to} style={{ textDecoration: "none", ...sx }}>
      {children}
    </Link>
  );
}
