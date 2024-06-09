import React from "react";

function Header() {
  return (
    <header className=" bg-orin-off-white w-full flex justify-center">
      <div className="max-w-[1156px] flex flex-row w-full justify-between mx-6 py-4 lg:mx-[142px]">
        <p className="font-inter text-xl font-semibold">Orin Design</p>
        <img
          src="../../icons/nav-burger-menu.svg"
          className="hover:cursor-pointer sm:hidden"
        />
      </div>
    </header>
  );
}

export default Header;
