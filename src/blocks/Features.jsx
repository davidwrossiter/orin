import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";
function Features() {
  return (
    <div className="py-10 xl:py-20 max-w-[1156px]">
      <h3 className="pb-8 text-2xl leading-[28px] lg:pb-10 font-bold lg:text-[36px]">
        Benefits
      </h3>
      <div className="flex flex-col sm:flex-row">
        <HowItWorksEl
          title="Fixed Price"
          description="You pay the same fixed price every month so there are no surprises."
        />
        <HowItWorksEl
          title="Flexible Subscription"
          description="Upgrade or downgrade or pause or cancel your subscription at any time."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Manage your Tasks"
          description="Manage your own tasks using a dedicated task board."
          hasTopMargin={true}
        />
      </div>
    </div>
  );
}

export default Features;
