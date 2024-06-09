import React from "react";
import HowItWorksEl from "../components/HowItWorksEl";

function MemberBen() {
  return (
    <div className="py-10 xl:py-20 max-w-[1156px] lg:py-20">
      <h4 className="pb-6 lg:pb-10 text-2xl lg:text-[36px] leading-[28px] font-bold">
        Member benefits
      </h4>
      <div className="flex flex-col sm:flex-row flex-wrap">
        <HowItWorksEl
          title="Consistency"
          description="Ensure a unified look and feel across all you digital products."
        />
        <HowItWorksEl
          title="Efficiency"
          description="Streamline your design and development process with reusable components."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Collaboration"
          description="Enhance communication between designers and developers."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Quality"
          description="Maintain high standards across all designs and improves the overall user experience."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Maintainability"
          description="Reduce design and technical debt by standardising components."
          hasTopMargin={true}
        />
        <HowItWorksEl
          title="Brand Integrity"
          description="Reinforce brand identity consistently across different platforms."
          hasTopMargin={true}
        />
      </div>
    </div>
  );
}

export default MemberBen;
