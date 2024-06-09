import React from "react";
import Seven from "./icons/22seven";
import Absa from "./icons/Absa";
import OldMutual from "./icons/OldMutual";
import Engen from "./icons/Engen";
import DBS from "./icons/DBS";

function Brands() {
  return (
    <div className="flex gap-8 flex-row items-center flex-wrap">
      <OldMutual />
      <Seven></Seven>
      <Absa />
      <Engen />
      <DBS />
    </div>
  );
}

export default Brands;
