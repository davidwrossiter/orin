import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";

function HowItWorks() {
  return (
    <div className="px-6 py-10">
      <h3>How it works</h3>
      <HowItWorksEl hasTopMargin={true} />
      <HowItWorksEl />
      <HowItWorksEl />
    </div>
  );
}

export default HowItWorks;
