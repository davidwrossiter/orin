import React from "react";
import DescTag from "../components/DescTag";

function SystemSupport() {
  return (
    <div className="py-10 xl:py-20 w-full max-w-[1156px] flex flex-col lg:items-center">
      <h5 className="max-w-[700px] font-bold text-2xl lg:text-[36px] lg:leading-10 lg:text-center leading-7 pb-4 lg:pb-6">
        For teams involved in the{" "}
        <span className="text-orin-blue">design and development</span> for of
        digital products.
      </h5>
      <p className="text-orin-grey mb-2 lg:mb-8">
        Design System subscriptions for everyone. Pause or cancel anytime.
      </p>
      <div className="flex flex-wrap mb-4 lg:mb-10">
        <DescTag title="Design Systems" />
        <DescTag title="UI Design" />
        <DescTag title="Maintenance" />
        <DescTag title="Custom Components" />
      </div>
      <div className="flex flex-col md:flex-row w-full md:justify-between max-w-[1156px]">
        <img
          src="../../icons/work-examples.svg"
          className="mb-6 w-full md:w-[32%] object-cover"
        />
        <img
          src="../../icons/work-examples.svg"
          className="mb-6 w-full md:w-[32%] object-cover"
        />
        <img
          src="../../icons/work-examples.svg"
          className="mb-6 w-full md:w-[32%] object-cover"
        />
      </div>
      <button className="px-6 leading-[14px] border-[1.4px] py-4 rounded-lg border-orin-black">
        View More Work
      </button>
    </div>
  );
}

export default SystemSupport;
