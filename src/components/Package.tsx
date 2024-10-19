import React from "react";
import DescTag from "./DescTag";

function Package({
  title,
  price,
  marginTop,
  reqs,
  backgroundColour,
  textColour,
  url,
}) {
  return (
    <div
      className={`border-[1px] border-orin-border-grey max-w-[448px] w-full ${marginTop} text-orin-black p-8 bg-white rounded-2xl`}
    >
      <p
        className={`text-[12px] ${textColour} leading-[12px] px-4 py-2 rounded-full ${backgroundColour} w-fit font-semibold mb-6`}
      >
        {title}
      </p>
      <p className="text-2xl leading-28 font-bold mb-4">${price}/m</p>
      <div className="text-sm flex flex-col gap-1 text-orin-grey">
        <p>• Submit as many requests as you like.</p>
        <p>• Average 1-2 day delivery.</p>
        <p>• Delivered one request at a time.</p>
        <p>• Pause or cancel at any time.</p>
        <p>• Weekly check-ins and updates.</p>
      </div>
      <div className="flex flex-row mt-6 leading-[14px] text-sm font-medium">
        <a
          data-rewardful
          href={url}
          target="_blank"
          className="leading-4 px-3 sm:px-6 py-4 rounded-lg bg-orin-black text-white hover:bg-[#404245] active:bg-[#606469]"
        >
          Subscribe
        </a>
        <a
          href="https://cal.com/warrenrossiter/intro"
          target="_blank"
          className="leading-4 px-3 sm:px-4 ml-4 py-4 rounded-lg border-[1.4px] border-orin-black hover:bg-[#EFEFEF] active:bg-[#E0DCDC]"
        >
          Book an Intro Call
        </a>
      </div>
      <p className="text-[12px] leading-4 mt-4">
        Or email using{" "}
        <span className="underline">warren (at) orindesign (dot) co</span>
      </p>

    </div>
  );
}

export default Package;
