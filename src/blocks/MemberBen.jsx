import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";

function MemberBen() {
  return (
    <div className="py-10 xl:py-20 max-w-[1156px] lg:py-20" id="features">
      <h4 className="pb-8 lg:pb-10 text-start md:text-center text-2xl lg:text-[36px] leading-[28px] font-bold lg:leading-[48px]">
        Member benefits
      </h4>
      <div className="flex flex-col md:flex-row flex-wrap items-start justify-start sm:justify-center xl:justify-start">
        <div
          className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4"
          style={{ flexBasis: "33.3333%" }}
        >
          <HowItWorksEl
            title="Predictable Costs"
            description="You pay the same fixed price every month, simplify budgeting and planning."
          />
        </div>
        <div
          className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4"
          style={{ flexBasis: "33.3333%" }}
        >
          <HowItWorksEl
            title="Flexible Subscription"
            description="Upgrade, downgrade, pause or cancel your subscription at any time."
            hasTopMargin={true}
          />
        </div>
        <div
          className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4"
          style={{ flexBasis: "33.3333%" }}
        >
          <HowItWorksEl
            title="Ongoing Support"
            description="Creative design solutions tailored to your evolving business needs."
            hasTopMargin={true}
          />
        </div>
        <div
          className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4"
          style={{ flexBasis: "33.3333%" }}
        >
          <HowItWorksEl
            title="Reduced Risk"
            description="Reduces the risk of hiring and managing an in-house team."
            hasTopMargin={true}
          />
        </div>
        <div
          className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4"
          style={{ flexBasis: "33.3333%" }}
        >
          <HowItWorksEl
            title="Sustainable Growth"
            description="Fosters long-term relationships and sustainable growth."
            hasTopMargin={true}
          />
        </div>
        <div
          className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4"
          style={{ flexBasis: "33.3333%" }}
        >
          <HowItWorksEl
            title="Efficient"
            description="Streamlined workflows and quicker turnaround times for design requests."
            hasTopMargin={true}
          />
        </div>
      </div>
    </div>
  );
}

export default MemberBen;
