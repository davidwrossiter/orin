import React from "react";

function Hero() {
  //
  return (
    <div className="font-inter py-10 md:py-[104px] w-full max-w-[1158px] flex flex-col xl:flex-row xl:items-center">
      <div>
        <h1 className="pb-4 text-[36px] leading-10 font-bold text-orin-black md:text-[48px] md:leading-[48px]">
          We design <span className="text-orin-blue">component libraries</span>,
          so you can build interfaces quickly and consistently.
        </h1>
        <p className="pb-6 text-orin-grey">
          Design System subscriptions for everyone. <br></br>Pause or cancel
          anytime.
        </p>
        <div className="flex flex-row gap-2 leading-[14px] text-sm font-medium">
          <button className="px-6 py-4 rounded-lg bg-orin-black text-white">
            View Subscription Plans
          </button>
          <button className="px-6 py-4 rounded-lg border-[1.4px] border-orin-black">
            Read FAQ's
          </button>
        </div>
      </div>
      <img src="../../icons/hero-icon.svg" className="hidden xl:block ml-5"/>
    </div>
  );
}

export default Hero;
