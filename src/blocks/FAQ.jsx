import React from "react";
import AQ from "../components/AQ";
import BookCall from "../components/BookCall";

function FAQ() {
  return (
    <div className="py-10 xl:py-20 w-full max-w-[1156px] flex flex-col">
      <p className="font-bold lg:text-[36px] text-orin-black text-2xl leading-7 pb-6 lg:pb-10">
        Frequently Asked Questions
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-start w-full md:basis-0">
        <div className="flex flex-col md:flex-grow">
          <AQ
            question="How many requests can I have?"
            answer="You can submit as many requests as you like. We will deliver them one at a time."
          />
          <AQ
            question="When will I get my designs?"
            answer="It takes 48 hours on average to complete a request."
          />
          <AQ
            question="What if I don’t like the design?"
            answer="We will keep iterating until you are 100% happy with the design."
          />
          <AQ
            question="What if I only have a single request?"
            answer="That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste."
          />
          <AQ
            question="Do you offer a refund if I don’t like the service?"
            answer="We don’t offer refunds but you can cancel at any time."
          />
        </div>
        <div className="md:flex-grow md:basis-1">
          <BookCall />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
