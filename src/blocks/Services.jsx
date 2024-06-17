import React from "react";
import DescTag from "../components/DescTag";

function SystemSupport() {
  return (
    <div
      id="services"
      className="py-10 xl:py-20 w-full max-w-[1156px] flex flex-col lg:items-center"
    >
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
      <div className="flex flex-col sm:flex-row w-full sm:justify-between max-w-[1156px]">
        <img
          src="../../work-examples/example-one.svg"
          className="mb-6 w-full sm:w-[32%] object-cover"
          draggable="false"
          alt="website landing page in dark"
        />
        <img
          src="../../work-examples/example-two.svg"
          className="mb-6 w-full sm:w-[32%] object-cover"
          draggable="false"
          alt="website landing page in dark"
        />
        <img
          src="../../work-examples/example-three.svg"
          className="mb-6 w-full sm:w-[32%] object-cover"
          draggable="false"
          alt="website landing page in dark"
        />
      </div>
      <a href="https://www.figma.com/proto/YZ7mEOEg9pkIn8xbNI7xwy/Orin-Landing-Page?page-id=700%3A22977&node-id=765-5041&viewport=11888%2C-267%2C0.58&t=e6IHwBx3ShLmHIQI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=765%3A5041">
        <button className="px-6 leading-[14px] border-[1.4px] py-4 rounded-lg border-orin-black hover:bg-[#EFEFEF] active:bg-[#E0DCDC]">
          View More Work
        </button>
      </a>
    </div>
  );
}

export default SystemSupport;
