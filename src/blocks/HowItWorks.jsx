import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";

function HowItWorks() {
  return (
    <div id="how-it-works" className="pb-10 xl:pb-20 max-w-[1156px]">
      <h3 className="pb-8 text-2xl leading-[28px] lg:pb-10 font-bold lg:text-[36px]">
        How it works
      </h3>
      <div className="flex flex-col sm:flex-row">
        <HowItWorksEl
          title="Subscribe"
          description="Choose a subscription plan that suits your requirements."
        />
        <HowItWorksEl
          title="Request"
          description="Submit as many requests as you’d like."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Receive"
          description="Receive one request at a time, usually within 2 business days."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Happy"
          description="We revise until you're 100% satisfied."
          hasTopMargin={true}
        />
      </div>
    </div>
  );
}

export default HowItWorks;
