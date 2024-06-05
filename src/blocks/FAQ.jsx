import React from "react";
import AQ from "../components/AQ";

function FAQ() {
  return (
    <div className="px-6 py-10">
      <p className="font-bold text-orin-black text-2xl leading-7 pb-6">
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
