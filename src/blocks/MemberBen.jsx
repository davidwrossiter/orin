import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";

function MemberBen() {
  return (
    <div className="py-10 xl:py-20 max-w-[1156px] lg:py-20">
      <h4 className="pb-6 lg:pb-10 text-2xl lg:text-[36px] leading-[28px] font-bold">
        Member benefits
      </h4>
      <div className="flex flex-col sm:flex-row flex-wrap">
        <HowItWorksEl
          title="Design Board"
          description="Easily manage your design queue with a Trello board."
        />
        <HowItWorksEl
          title="Fast Delivery"
          description="Easily manage your design queue with a Trello board."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Fixed monthly rate"
          description="Easily manage your design queue with a Trello board."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Top-Notch Quality"
          description="Easily manage your design queue with a Trello board."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Flexible and scalable"
          description="Easily manage your design queue with a Trello board."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Unique and all yours"
          description="Easily manage your design queue with a Trello board."
          hasTopMargin={true}
        />
      </div>
    </div>
  );
}

export default MemberBen;
