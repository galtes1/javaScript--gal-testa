import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CustomCardsPage from "../cards/pages/CustomCardsPage";
import CustomAboutPage from "../pages/CustomAboutPage";
import CustomErrorPage from "../pages/CustomErrorPage";
import CustomCardDetailsPage from "../cards/pages/CustomCardDetailsPage";
import CustomSandBoxPage from "../sandbox/CustomSandBoxPage";
import CustomCounterPage from "../pages/CustomCounterPage";
import CustomLifeCycle from "../sandbox/sandboxPages/CustomLifeCycle";
import CustomCountries from "../sandbox/sandboxPages/CustomCountries";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CustomCardsPage />} />
      <Route path={ROUTES.CARDS} element={<CustomCardsPage />} />
      <Route path={ROUTES.ABOUT} element={<CustomAboutPage />} />
      <Route
        path={ROUTES.CARD_INFO + "/:id"}
        element={<CustomCardDetailsPage />}
      />
      <Route path={ROUTES.SANDBOX} element={<CustomSandBoxPage />}>
        <Route path="counter" element={<CustomCounterPage />} />
        <Route path="lifeCycle" element={<CustomLifeCycle />} />
        <Route path="countries" element={<CustomCountries />} />
      </Route>
      <Route path="*" element={<CustomErrorPage />} />
    </Routes>
  );
}
