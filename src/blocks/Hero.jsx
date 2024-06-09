import React from "react";
import Brands from "../components/Brands";
import HeroRight from "../../public/components/HeroRight";

function Hero() {
  //
  return (
    <div className="font-inter py-10 md:pt-[104px] w-full max-w-[1158px] flex flex-col xl:flex-row xl:items-start xl:justify-between">
      <div className="mr-4">
        <h1 className="max-w-[648px] pb-4 text-[36px] leading-10 font-bold text-orin-black text-wrap md:text-[48px] md:leading-[48px]">
          Lay the <span className="text-orin-blue">right foundations</span> and
          accelerate product development.
        </h1>
        <p className="text-orin-grey">
          We build design systems that help entrepreneurs achieve a cohesive
          brand presence, accelerate product development, deliver a superior
          user experience, and drive business growth.
        </p>
        <div className="flex flex-row gap-2 leading-[14px] text-sm font-medium py-6 xl:py-10">
          <button className="px-6 py-4 rounded-lg bg-orin-black text-white">
            View Plans
          </button>
          <button className="px-6 py-4 rounded-lg border-[1.4px] border-orin-black">
            Read FAQ's
          </button>
        </div>
        {/* The brands component below is a regular SVG component I made in JSX */}
        <Brands />
      </div>
      <div className="hidden xl:flex">
        <HeroRight />
      </div>

      {/* <img src="../../icons/hero-icon.svg" className="hidden xl:block ml-5"/> */}
    </div>
  );
}

export default Hero;
