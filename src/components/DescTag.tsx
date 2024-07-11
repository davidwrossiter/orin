import React from "react";

function DescTag({ title }) {
  return (
    <div className="px-4 py-2 text-[12px] sm:text-sm leading-4 mr-2 mt-2 bg-white w-fit rounded-full border border-orin-border-grey">
      {title}
    </div>
  );
}

export default DescTag;
