import React from "react";
import DescTag from "../components/DescTag";

function SystemSupport() {
  return (
    <div
      id="services"
      className="py-10 xl:py-20 w-full max-w-[1156px] flex flex-col lg:items-center"
    >
      <h5 className="max-w-[700px] font-bold text-2xl lg:text-[36px] lg:leading-10 lg:text-center leading-7 pb-4 lg:pb-6">
        Work
      </h5>
      <div className="flex flex-wrap mb-4 lg:mb-10 max-w-[1000px] lg:justify-center">
        <DescTag title="Website Redesign" />
        <DescTag title="Mobile App UI" />
        <DescTag title="Dashboard Design" />
        <DescTag title="Component Library Design" />
        <DescTag title="Prototyping" />
        <DescTag title="User Flow Diagrams" />
        <DescTag title="Responsive Design" />
        <DescTag title="Micro-Interactions" />
        <DescTag title="Landing Page Design" />
        <DescTag title="Accessibility Improvements" />
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:justify-between max-w-[1156px]">
        <img
          src="../../public/updated/Frame.png"
          className="mb-6 w-full sm:w-[49%] object-cover "
          draggable="false"
          alt="website landing page in light mode"
        />
        <img
          src="../../public/updated/2.png"
          className="mb-6 w-full sm:w-[49%] object-cover "
          draggable="false"
          alt="website landing page in light mode"
        />
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:justify-between max-w-[1156px]">
        <img
          src="../../public/updated/3.png"
          className="mb-6 w-full sm:w-[49%] object-cover"
          draggable="false"
          alt="website landing page in light mode"
        />
        <img
          src="../../public/updated/4.png"
          className="mb-6 w-full sm:w-[49%] object-cover"
          draggable="false"
          alt="website landing page in light mode"
        />
      </div>

      <div className="flex flex-col sm:flex-row w-full sm:justify-between max-w-[1156px]">
        <img

          src="../../public/updated/5.png"
          className="mb-5 w-full sm:w-[49%] object-cover"
          draggable="false"
          alt="website landing page in dark mode"
        />
        <img

          src="../../public/updated/6.png"
          className="mb-5 w-full sm:w-[49%] object-cover"
          draggable="false"
          alt="website landing page in dark mode"
        />
      </div>
      <a
        className="mt-6"
        href="https://www.figma.com/proto/YZ7mEOEg9pkIn8xbNI7xwy/Orin-Landing-Page?page-id=1068%3A6441&node-id=1068-6666&viewport=380%2C416%2C0.12&t=eeaTGHglfrxyoGPP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1068%3A6666&show-proto-sidebar=1"
        target="_blank"
      >
        <button className="px-6 leading-[14px] border-[1.4px] py-4 rounded-lg border-orin-black hover:bg-[#EFEFEF] active:bg-[#E0DCDC]">
          View More Work
        </button>
      </a>
    </div>
  );
}

export default SystemSupport;
