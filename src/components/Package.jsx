import React from "react";
import DescTag from "./DescTag";

function Package({ title, price, reqCount, backgroundColour }) {
  return (
    <div className="border px-6 text-orin-black py-8 bg-white rounded-2xl">
      <p className="text-[12px] leading-[12px] px-4 py-2 rounded-full bg-orin-light-grey w-fit font-semibold mb-6">
        {title}
      </p>
      <p className="text-2xl leading-28 font-bold mb-4">£{price}/m</p>
      <div className="text-sm text-orin-grey">
        <p>• One request at a time.</p>
        <p>• Submit as many requests as you like.</p>
        <p>• 48 hour delivery on average.</p>
        <p>• Cancel at any time.</p>
      </div>
    </div>
  );
}

export default Package;
