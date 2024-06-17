import React from "react";

function BookCall() {
  return (
    <div className="px-6 py-8 border w-full rounded-xl bg-[#F5F4F1] sm:w-[346px] text-[#1F2122]">
      <div className="px-4 py-2 text-sm font-semibold leading-4 mr-2 mt-2 bg-white w-fit rounded-lg border border-orin-border-grey">
        Get in touch
      </div>
      <div>
        <div className="py-8 flex flex-row items-center ">
          <img
            src="../../icons/warren.svg"
            className="border rounded-lg border-orin-border-grey"
            draggable="false"
            alt="portrait of man in grey-scale"
          />
          <h4 className="pl-4 w-full font-bold text-2xl leading-7 max-w-[250px]">
            Book a 15-minute introductory call.
          </h4>
        </div>
        <p className="font-[400] text-sm max-w-[250px]">
          Learn more about Orin Design and find out how we can help you.
        </p>
      </div>

      <a href="https://cal.com/warrenrossiter/intro" target="_blank">
        <button
          target="_blank"
          className="mt-6 mb-8 px-4 py-4 text-sm leading-[14px] rounded-lg border-[1.4px] border-orin-black hover:bg-[#EFEFEF] active:bg-[#E0DCDC]"
        >
          Book an Intro Call
        </button>
      </a>
      <p className="text-[12px] leading-4">
        Or email using{" "}
        <span className="underline">hello at orindesign dot co</span>
      </p>
    </div>
  );
}

export default BookCall;
