import React from "react";
import AQ from "../components/AQ";

function FAQ() {
  return (
    <div className="py-10 xl:py-20 w-full max-w-[1158px]">
      <p className="font-bold lg:text-[36px] text-orin-black text-2xl leading-7 pb-6 lg:pb-10">
        Frequently Asked Questions
      </p>
      <AQ
        question="How many requests can I have?"
        answer="Design systems subscriptions for everyone. Pause or cancel anytime."
      />
      <AQ
        question="When will I get my designs?"
        answer="Design systems subscriptions for everyone. Pause or cancel anytime."
      />
      <AQ
        question="Who does the design?"
        answer="Design systems subscriptions for everyone. Pause or cancel anytime."
      />
      <AQ
        question="What programs do you use?"
        answer="Design systems subscriptions for everyone. Pause or cancel anytime."
      />
      <AQ
        question="What if I need changes?"
        answer="Design systems subscriptions for everyone. Pause or cancel anytime."
      />
      <AQ
        question="What work don't you do?"
        answer="Design systems subscriptions for everyone. Pause or cancel anytime."
      />
      <AQ
        question="Can I get a refund?"
        answer="Design systems subscriptions for everyone. Pause or cancel anytime."
      />
    </div>
  );
}

export default FAQ;
