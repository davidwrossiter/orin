import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";

function MemberBen() {
  return (
    <div className="px-6 py-10">
      <h4 className="pb-6 text-2xl leading-[28px] font-bold">
        Member benefits
      </h4>
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
  );
}

export default MemberBen;
