import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";

function HowItWorks() {
  return (
    <div className="py-10 xl:py-20 max-w-[1156px]">
      <h3 className="pb-8 text-2xl leading-[28px] lg:pb-10 font-bold lg:text-[36px]">
        How it works
      </h3>
      <div className="flex flex-col sm:flex-row">
        <HowItWorksEl
          title="Subscribe"
          description="Choose a subscription option and submit as many requests as you’d like."
        />
        <HowItWorksEl
          title="Save"
          description="We’ll deliver one request at a time, usually within 2 business days."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="100%"
          description="We'll revise your designs until you're 100% happy."
          hasTopMargin={true}
        />
      </div>
    </div>
  );
}

export default HowItWorks;
