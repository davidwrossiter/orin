import React from "react";

function Nav({ visibility }) {
  // bg-white p-4

  return (
    <div className="text-[12px] sm:text-sm sm:block bottom-4 sm:bottom-8 self-center fixed max-w-[500px] sm:w-full rounded-xl">
      <div className="flex sm:flex-row items-center p-1 border rounded-lg text-white border-orin-border-grey bg-orin-black justify-between">
        <a
          href="#how-it-works"
          className="px-2 sm:px-4 py-1 sm:py-2  hover:bg-orin-light-grey hover:text-black hover:rounded-[4px] hover:cursor-pointer"
        >
          How it works
        </a>
        <a
          href="#features"
          className="px-2 sm:px-4 py-1 sm:py-2  hover:bg-orin-light-grey hover:text-black hover:rounded-[4px] hover:cursor-pointer"
        >
          Benefits
        </a>
        <a
          href="#services"
          className="px-2 sm:px-4 py-1 sm:py-2  hover:bg-orin-light-grey hover:text-black hover:rounded-[4px] hover:cursor-pointer"
        >
          Services
        </a>
        <a
          href="#memberships"
          className="px-2 sm:px-4 py-1 sm:py-2 hover:bg-orin-light-grey hover:text-black hover:rounded-[4px] hover:cursor-pointer"
        >
          Subscribe
        </a>
        <a
          href="#faq"
          className="px-2 sm:px-4 py-1 sm:py-2 hover:bg-orin-light-grey hover:text-black hover:rounded-[4px] hover:cursor-pointer"
        >
          FAQ
        </a>
      </div>
    </div>
  );
}

export default Nav;
