import React from "react";
import DescTag from "../components/DescTag";

function SystemSupport() {
  return (
    <div className="py-10 xl:py-20 w-full max-w-[1156px] flex flex-col lg:items-center">
      <h5 className="max-w-[700px] font-bold text-2xl lg:text-[36px] lg:leading-10 lg:text-center leading-7 pb-4 lg:pb-6">
        Our Services
      </h5>
      <div className="flex flex-wrap mb-4 lg:mb-10 max-w-[900px] lg:justify-center">
        <DescTag title="Visual Design" />
        <DescTag title="Wireframes" />
        <DescTag title="High-Fidelity Mockups" />
        <DescTag title="Interactive Prototypes" />
        <DescTag title="Responsive Layouts" />
        <DescTag title="Mobile Apps" />
        <DescTag title="Building Component Libraries" />
        <DescTag title="Maintaining Component Libraries" />
      </div>
      <div className="flex flex-col md:flex-row w-full md:justify-between max-w-[1156px]">
        <img
          src="../../work-examples/example-one.svg"
          className="mb-6 w-full md:w-[32%] object-cover"
          draggable="false"
        />
        <img
          src="../../work-examples/example-two.svg"
          className="mb-6 w-full md:w-[32%] object-cover"
          draggable="false"
        />
        <img
          src="../../work-examples/example-three.svg"
          className="mb-6 w-full md:w-[32%] object-cover"
          draggable="false"
        />
      </div>
      <button className="px-6 leading-[14px] border-[1.4px] py-4 rounded-lg border-orin-black">
        View More Work
      </button>
    </div>
  );
}

export default SystemSupport;
