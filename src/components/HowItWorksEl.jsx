import React from "react";

function HowItWorksEl({ hasTopMargin, title, description }) {
  return (
    <>
      <div
        className={`flex flex-row items-center ${hasTopMargin ? "pt-4" : ""}`}
      >
        <img src="../../public/icons/rectangle-how-it-works.svg" />
        <p className="text-orin-black pl-6 text-xl leading-6">{title}</p>
      </div>
      <p className="pl-7 pt-4 text-orin-grey">{description}</p>
    </>
  );
}

export default HowItWorksEl;
