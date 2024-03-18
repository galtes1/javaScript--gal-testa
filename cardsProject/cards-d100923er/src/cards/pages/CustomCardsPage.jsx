import React from "react";

import CustomCards from "../components/CustomCards";
import CustomPageHeader from "../../components/CustomPageHeader";

export default function CustomCardsPage() {
  return (
    <div>
      <CustomPageHeader
        title="Cards"
        subtitle="on this page you can find explanations about using the app"
      />
      <CustomCards />
    </div>
  );
}
