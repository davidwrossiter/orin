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
      <div className="text-sm text-orin-grey">
        <p>• {reqs} request at a time.</p>
        <p>• Submit as many requests as you like.</p>
        <p>• 48 hour delivery on average.</p>
        <p>• Cancel at any time.</p>
      </div>
      <div className="flex flex-row mt-6 leading-[14px] text-sm font-medium">
        <a
          data-rewardful
          href={url}
          target="_blank"
          className="leading-4 px-6 py-4 rounded-lg bg-orin-black text-white hover:bg-[#404245] active:bg-[#606469]"
        >
          Subscribe
        </a>
        <a
          href="https://cal.com/warrenrossiter/intro"
          target="_blank"
          className="leading-4 px-4 ml-4 py-4 rounded-lg border-[1.4px] border-orin-black hover:bg-[#EFEFEF] active:bg-[#E0DCDC]"
        >
          Book an Intro Call
        </a>
      </div>
      <div className="text-[12px] mt-8">
        <p className="mb-2 max-w-[336px]">
          Refer a friend and earn 10% monthly recurring commissions for each
          referral.
        </p>
        <a
          href="orin-design-co.getrewardful.com"
          target="_blank"
          className="font-bold"
        >
          Get started
        </a>
      </div>
    </div>
  );
}

export default Package;
