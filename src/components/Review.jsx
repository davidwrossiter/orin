import React from "react";

function Review({ hasPaddingBottom, name, jobTitle, description, iconSrc }) {
  // className={`flex flex-row items-center ${hasTopMargin ? "pt-4" : ""}`}
  return (
    <div className={`${hasPaddingBottom ? "pb-6" : ""} max-w-[448px] pr-4`}>
      <div className="flex flex-row items-center pb-6">
        <img src={iconSrc} alt="man in grey-scale" draggable="false" />
        <div className="flex flex-col pl-4">
          <p className="text-xl leading-5 pb-1 text-orin-black">{name}</p>
          <p className="text-sm leading-[14px] text-orin-grey">{jobTitle}</p>
        </div>
      </div>
      <p className="text-orin-grey">{description}</p>
    </div>
  );
}

export default Review;
