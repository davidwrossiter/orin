import React from "react";
import Package from "../components/Package";

function Memberships() {
  return (
    <div
      id="memberships"
      className="py-10 xl:py-20 flex flex-col lg:items-center"
    >
      <h6 className="font-bold text-orin-dark text-2xl lg:text-[36px] leading-7 pb-6 lg:pb-10">
        M<span className="text-orin-light-black">emberships</span>
      </h6>
      {/*  title, price, reqCount, backgroundColour  */}
      <div className="flex flex-col md:flex-row">
        <Package
          title="Standard Subscription"
          price="3,995.00"
          reqs="One request at a time."
          backgroundColour="bg-orin-light-grey"
          textColour="text-orin-black"
          url="https://buy.stripe.com/14k5ms2RG3SP7Ti145"
        />
        <Package
          title="Pro Subscription"
          price="5,995.00"
          reqs="Two requests at a time."
          backgroundColour="bg-orin-blue"
          textColour="text-white"
          marginTop="mt-6 md:mt-0 md:ml-6"
          url="https://buy.stripe.com/3cs3ekgIwblh2yYcMO"
        />
      </div>
    </div>
  );
}

export default Memberships;
