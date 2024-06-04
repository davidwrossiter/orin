import React from "react";

function Header() {
  return (
    <header className="flex flex-row w-full justify-between px-6 py-4">
      <p className="font-inter text-xl font-semibold">Orin</p>
      <img src="../../public/icons/nav-burger-menu.svg" />
    </header>
  );
}

export default Header;
