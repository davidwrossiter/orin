import React from "react";
import DescTag from "../components/DescTag";

function SystemSupport() {
  return (
    <div className="px-6 py-10">
      <h5 className="font-bold text-2xl leading-7 pb-4">
        Design System <span className="text-orin-blue">support</span> for
        product teams and developers
      </h5>
      <p className="text-orin-grey mb-4">
        Design System subscriptions for everyone. Pause or cancel anytime.
      </p>
      <div className="flex flex-wrap mb-4">
        <DescTag title="Design Systems" />
        <DescTag title="UI Design" />
        <DescTag title="Maintenance" />
        <DescTag title="Custom Components" />
      </div>
      <div className="flex flex-col md:flex-row w-full md:justify-between">
        <img
          src="../../public/icons/work-examples.svg"
          className="mb-6 w-full md:w-[32%] object-cover"
        />
        <img
          src="../../public/icons/work-examples.svg"
          className="mb-6 w-full md:w-[32%] object-cover"
        />
        <img
          src="../../public/icons/work-examples.svg"
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
