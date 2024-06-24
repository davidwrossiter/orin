import React from "react";
import Brands from "../components/Brands";
import HeroRight from "../../public/components/HeroRight";

function Hero() {
  //
  return (
    <div className="font-inter py-10 md:py-[104px] w-full max-w-[1158px] flex flex-col xl:flex-row xl:items-start xl:justify-between">
      <div className="mr-16 w-full flex justify-center flex-col items-start md:items-center">
        <h1 className="max-w-[800px] md:text-center pb-4 text-[36px] leading-10 font-bold text-orin-black text-wrap md:text-[48px] md:leading-[48px]">
          Quality{" "}
          <span className="text-orin-blue">
            {/* <br className="sm:hidden" /> */}
            design
            {/* <br className="sm:hidden" /> */}
          </span>
          ,
          <br />
          delivered fast and affordably.
        </h1>
        <p className="text-orin-grey md:text-center max-w-[600px]">
          Orin Design is a subscription-based design agency that offers a
          consistent, high-quality design service with the flexibility to pause
          or cancel at any time.
        </p>
        <div className="flex flex-row gap-2 leading-[14px] text-sm font-medium mb-4 py-6 xl:py-10">
          <a href="#memberships">
            <button className="px-6 py-3 sm:py-3 rounded-lg border-[1.4px] border-orin-black bg-orin-black text-white hover:bg-[#404245] active:bg-[#606469]">
              Book a call
            </button>
          </a>
        </div>
        {/* The brands component below is a regular SVG component I made in JSX */}
        <Brands />
      </div>


      {/* <img src="../../icons/hero-icon.svg" className="hidden xl:block ml-5"/> */}
    </div>
  );
}

export default Hero;
