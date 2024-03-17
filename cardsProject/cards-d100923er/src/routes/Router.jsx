import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CustomCardsPage from "../cards/pages/CustomCardsPage";
import CustomAboutPage from "../pages/CustomAboutPage";
import CustomErrorPage from "../pages/CustomErrorPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CustomCardsPage />} />
      <Route path={ROUTES.CARDS} element={<CustomCardsPage />} />
      <Route path={ROUTES.ABOUT} element={<CustomAboutPage />} />
      <Route path="*" element={<CustomErrorPage />} />
    </Routes>
  );
}
