import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";

function MemberBen() {
  return (
    <div className="py-10 xl:py-20 max-w-[1156px] lg:py-20">
      <h4 className="pb-6 lg:pb-10 text-center text-2xl lg:text-[36px] leading-[28px] font-bold lg:leading-[48px]">
        Member benefits
      </h4>
      <div className="flex flex-col sm:flex-row flex-wrap">
        <HowItWorksEl
          title="Predictable Costs"
          description="You pay the same fixed price every month, simplify budgeting and planning."
        />
        <HowItWorksEl
          title="Flexible Subscription"
          description="Upgrade, downgrade, pause or cancel your subscription at any time."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Ongoing Support"
          description="Creative design solutions tailored to your evolving business needs."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Reduced Risk"
          description="Reduces the risk of hiring and managing an in-house team."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Sustainable Growth"
          description="Fosters long-term relationships and sustainable growth."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Efficient"
          description="Streamlined workflows and quicker turnaround times for design requests."
          hasTopMargin={true}
        />
      </div>
    </div>
  );
}

export default MemberBen;
