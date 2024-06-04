import React from "react";
import Package from "../components/Package";

function Memberships() {
  return (
    <div className="px-6 py-10">
      <h6 className="font-bold text-orin-dark text-2xl leading-7 pb-4">
        M<span className="text-orin-light-black">emberships</span>
      </h6>
      {/*  title, price, reqCount, backgroundColour  */}
      <Package
        title="Standard Subscription"
        price="3,000.00"
        reqs="One"
        backgroundColour="bg-orin-light-grey"
      />
      {/* <Package
        title="Pro Subscription"
        price="5,000.00"
        reqs="Two"
        backgroundColour="bg-orin-blue"
      /> */}
    </div>
  );
}

export default Memberships;
