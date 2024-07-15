import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";

function HowItWorks() {
  return (
    <div id="how-it-works" className="py-10 xl:py-20 max-w-[1156px]">
      <h3 className="pb-8 text-2xl md:text-center leading-[28px] lg:pb-10 font-bold lg:text-[36px] lg:leading-[48px]">
        How we work
      </h3>
      <div className="flex flex-col md:flex-row">
        <HowItWorksEl
          title="Subscribe"
          description="Choose a subscription plan that suits your requirements."
        />
        <HowItWorksEl
          title="Submit Requests"
          description="Submit as many requests as you’d like."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Review"
          description="We’ll deliver one request at a time usually within 48 hours."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Iterate"
          description="We’ll iterate on your designs until you're 100% satisfied."
          hasTopMargin={true}
        />
      </div>
    </div>
  );
}

export default HowItWorks;
