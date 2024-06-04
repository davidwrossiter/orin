import React from "react";

function Hero() {
  return (
    <div className="font-inter px-6 py-10">
      <h1 className="pb-4 text-[36px] leading-10 font-bold text-orin-black">
        Designing custom component{" "}
        <span className="text-orin-blue">experiences</span>
      </h1>
      <p className="pb-6 text-orin-grey">
        Design System subscriptions for everyone. <br></br>Pause or cancel
        anytime.
      </p>
      <div className="flex flex-row gap-2 leading-[14px] text-sm font-medium">
        <button className="px-6 py-4 rounded-lg bg-orin-black text-white">
          View Plans
        </button>
        <button className="px-6 py-4 rounded-lg border border-orin-black">
          Read FAQ's
        </button>
      </div>
    </div>
  );
}

export default Hero;
