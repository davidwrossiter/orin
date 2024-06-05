import React from "react";
import DescTag from "./DescTag";

function Package({
  title,
  price,
  marginTop,
  reqCount,
  backgroundColour,
  textColour,
}) {
  return (
    <div
      className={`max-w-[448px] ${marginTop} px-6 text-orin-black py-8 bg-white rounded-2xl`}
    >
      <p
        className={`text-[12px] ${textColour} leading-[12px] px-4 py-2 rounded-full ${backgroundColour} w-fit font-semibold mb-6`}
      >
        {title}
      </p>
      <p className="text-2xl leading-28 font-bold mb-4">£{price}/m</p>
      <div className="text-sm text-orin-grey">
        <p>• One request at a time.</p>
        <p>• Submit as many requests as you like.</p>
        <p>• 48 hour delivery on average.</p>
        <p>• Cancel at any time.</p>
      </div>
      <div className="flex flex-row mt-6 leading-[14px] text-sm font-medium">
        <button className="px-4 py-4 rounded-lg bg-orin-black text-white">
          Subscribe
        </button>
        <button className="px-4 ml-4 py-4 rounded-lg border-[1.4px] border-orin-black">
          Book an Intro Call
        </button>
      </div>
      <div className="text-[12px] mt-8">
        <p className="mb-2">
          Refer a friend and earn 10% monthly recurring commissions for each
          referral.
        </p>
        <a href="#" className="font-bold">
          Get started
        </a>
      </div>
    </div>
  );
}

export default Package;
