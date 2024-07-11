import React, { useState } from "react";

function AQ({ question, answer }) {
  const [open, setOpen] = useState(false);

  const openQuestion = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={openQuestion}
      className="border hover:cursor-pointer bg-white mb-[12px] font-inter border-orin-border-grey p-4 rounded-lg"
    >
      <div className="flex flex-row items-center">
        <img
          src="../../icons/faq-arrow.svg"
          className={`${open ? "transform rotate-180" : ""} `}
          alt="arrow pointing down"
        />
        <p className="pl-2 text-sm font-bold">{question}</p>
      </div>
      {open ? (
        
        <p className="px-8 font-light border-t text-sm mt-4 pt-4">
          {answer}
        </p>
        
      ) : (
        ""
      )}
    </div>
  );
}

export default AQ;
