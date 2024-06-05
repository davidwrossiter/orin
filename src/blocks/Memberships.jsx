import React from "react";
import Package from "../components/Package";

function Memberships() {
  return (
    <div className="py-10 xl:py-20 flex flex-col lg:items-center">
      <h6 className="font-bold text-orin-dark text-2xl lg:text-[36px] leading-7 pb-6 lg:pb-10">
        M<span className="text-orin-light-black">emberships</span>
      </h6>
      {/*  title, price, reqCount, backgroundColour  */}
      <div className="flex flex-col md:flex-row">
        <Package
          title="Standard Subscription"
          price="3,000.00"
          reqs="One"
          backgroundColour="bg-orin-light-grey"
          textColour="text-orin-black"
        />
        <Package
          title="Pro Subscription"
          price="5,000.00"
          reqs="Two"
          backgroundColour="bg-orin-blue"
          textColour="text-white"
          marginTop="mt-6 md:mt-0 md:ml-6"
        />
      </div>
    </div>
  );
}

export default Memberships;
