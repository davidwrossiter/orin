import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";

function HowItWorks() {
  return (
    <div className="px-6 py-10">
      <h3 className="pb-8 text-2xl leading-[28px] font-bold">How it works</h3>
      <div className="flex flex-col">
        <HowItWorksEl
          title="Subscribe"
          description="Subscribe to a plan and submit as many design tickets as you'd like."
        />
        <HowItWorksEl
          title="48 Hours"
          description="Receive your design within two business days on average."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="100% Satisfaction"
          description="We'll revise the designs until you're 100% satisfied"
          hasTopMargin={true}
        />
      </div>
    </div>
  );
}

export default HowItWorks;
