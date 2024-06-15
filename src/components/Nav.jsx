import React from "react";

function Nav({ visibility }) {
  // bg-white p-4
  return (
    <div className="hidden sm:block sm:bottom-8 self-center fixed max-w-[620px] sm:w-full rounded-xl">
      <div className="flex flex-col sm:flex-row items-center p-1 border rounded-lg text-white border-orin-border-grey bg-orin-black justify-between">
        <a className="px-4 py-2 text-sm hover:bg-orin-light-grey hover:text-black hover:rounded-[4px]">
          Benefits
        </a>
        <a className="px-4 py-2 text-sm hover:bg-orin-light-grey hover:text-black hover:rounded-[4px]">
          How it works
        </a>
        <a className="px-4 py-2 text-sm hover:bg-orin-light-grey hover:text-black hover:rounded-[4px]">
          Features
        </a>
        <a className="px-4 py-2 text-sm hover:bg-orin-light-grey hover:text-black hover:rounded-[4px]">
          Services
        </a>
        <a className="px-4 py-2 text-sm hover:bg-orin-light-grey hover:text-black hover:rounded-[4px]">
          Subscribe
        </a>
        <a className="px-4 py-2 text-sm hover:bg-orin-light-grey hover:text-black hover:rounded-[4px]">
          FAQ
        </a>
      </div>
    </div>
  );
}

export default Nav;
