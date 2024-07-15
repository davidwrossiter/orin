import React from "react";

function HowItWorksEl({ hasTopMargin, title, description }) {
  return (
    <div className="lg:mr-6 w-full max-w-[330px] mb-4 flex flex-col flex-grow flex-shrink mr-2 pr-4">
      <div
        className={`flex flex-row items-start ${
          hasTopMargin ? "pt-4 sm:pt-0" : ""
        }`}
      >
        <img src="../../icons/rectangle-how-it-works.svg" alt="purple column" />
        <p className="text-orin-black pl-6 text-xl font-bold leading-7">
          {title}
        </p>
      </div>
      <p className="pl-7 pt-2 text-orin-grey">{description}</p>
    </div>
  );
}

export default HowItWorksEl;
