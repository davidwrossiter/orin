import React from "react";

function HowItWorksEl({ hasTopMargin, title, description }) {
  return (
    <div className="lg:mr-6 w-full max-w-[360px] mb-4 flex flex-col flex-grow flex-shrink mr-2">
      <div
        className={`flex flex-row items-center ${
          hasTopMargin ? "pt-4 sm:pt-0" : ""
        }`}
      >
        <img src="../../icons/rectangle-how-it-works.svg" />
        <p className="text-orin-black pl-6 text-xl font-bold leading-7">
          {title}
        </p>
      </div>
      <p className="pl-7 pt-2 text-orin-grey">{description}</p>
    </div>
  );
}

export default HowItWorksEl;
