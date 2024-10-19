import React from "react";
import Package from "../components/Package";

function Memberships() {
  return (
    <div
      id="memberships"
      className="py-10 xl:py-20 flex flex-col lg:items-center"
    >
      <h6 className="font-bold text-orin-dark text-2xl lg:text-[36px] leading-7 pb-4">
        Subscription plan
      </h6>
      <p className="max-w-[336px] text-orin-dark text-center pb-6 lg:pb-6">A flexible retainer plan that can be cancelled at any time.</p>
      {/*  title, price, reqCount, backgroundColour  */}
      <div className="flex flex-col md:flex-row">
        <Package
          title="Standard Subscription"
          price="1,995.00"
          reqs="One request at a time."
          backgroundColour="bg-orin-light-grey"
          textColour="text-orin-black"
          url="https://buy.stripe.com/8wM8yE77W2OLb5u5kn"
        />

        {/*  <Package
          title="Pro Subscription"
          price="5,995.00"
          reqs="Two requests at a time."
          backgroundColour="bg-orin-blue"
          textColour="text-white"
          marginTop="mt-6 md:mt-0 md:ml-6"
          url="https://buy.stripe.com/3cs3ekgIwblh2yYcMO"
        /> */}
      </div>
    </div>
  );
}

export default Memberships;
