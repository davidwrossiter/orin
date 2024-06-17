import React from "react";

function Footer() {
  return (
    <div className="w-full pt-7 pb-32 max-w-[1158px]">
      <p className="text-orin-black leading-7 ">Orin Design</p>
      <p className="text-orin-grey text-sm font-light py-3">
        Quality UI Design delivered fast and affordably.
      </p>
      <p className="text-sm text-orin-black">
        <a href="/terms-of-service">
          <span className="underline">Terms</span>
        </a>{" "}
        and{" "}
        <a href="/privacy-policy">
          <span className="underline">Privacy</span>
        </a>
      </p>
    </div>
  );
}

export default Footer;
