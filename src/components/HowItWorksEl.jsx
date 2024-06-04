import React from "react";

function HowItWorksEl({ hasTopMargin }) {
  return (
    <>
      {hasTopMargin ? <div>Top</div> : <p>no top</p>}

      <p>maybach music</p>
    </>
  );
}

export default HowItWorksEl;
