import React from "react";
import CustomLogo from "./topNavBar/logo/CustomLogo";
import CustomLogoIcon from "./topNavBar/logo/CustomLogoIcon";

export default function CustomHeader() {
  return (
    <>
      <CustomLogo />
      <CustomLogoIcon avatarPNG="../../assets/avatarCards.png" />
    </>
  );
}
