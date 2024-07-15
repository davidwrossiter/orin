import React from "react";
import AQ from "../components/AQ";
import BookCall from "../components/BookCall";

function FAQ() {
  return (
    <div
      className="py-10 xl:py-20 w-full max-w-[1156px] flex flex-col"
      id="faq"
    >
      <p className="font-bold lg:text-[36px] text-orin-black text-2xl leading-7 pb-6 lg:pb-10">
        What are some examples of a request?
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-start w-full md:basis-0">
        <div className="flex flex-col md:flex-grow max-w-[740px]">
          <AQ
            question="What are some examples of a request?"
            // answer="We don’t offer refunds but you can cancel at any time."
            answer={
              <div className="flex flex-col mt-2">
                <p className="mb-8">
                  A request can cover a wide range of UI design tasks. Here are
                  some examples:
                </p>
                <p className="font-bold mb-2">Website Redesign</p>
                <p className="mb-4">
                  ‘I need a complete redesign of my e-commerce website to
                  improve user experience and increase conversion rates.’
                </p>
                {/*  */}
                <p className="font-bold mb-2">Mobile App UI</p>
                <p className="mb-4">
                  ‘I need the user interface for our new mobile app designed,
                  ensuring it is intuitive and visually appealing for both iOS
                  and Android platforms.’
                </p>
                {/*  */}
                <p className="font-bold mb-2">Dashboard Design</p>
                <p className="mb-4">
                  ‘I need a user-friendly dashboard for our analytics platform,
                  making complex data easy to understand and interact with.’
                </p>
                {/*  */}
                <p className="font-bold mb-2">Component Library Design</p>
                <p className="mb-4">
                  ‘I need a comprehensive UI component library for our internal
                  design system to maintain consistency across our products.’
                </p>
                {/*  */}
                <p className="font-bold mb-2">Prototyping</p>
                <p className="mb-4">
                  ‘We need high-fidelity prototypes for our new feature to test
                  user interactions and gather feedback before development.’
                </p>
                {/*  */}
                <p className="font-bold mb-2">User Flow Diagrams</p>
                <p className="mb-4">
                  ‘We need detailed user flow diagrams for our onboarding
                  process to streamline the user journey and improve
                  engagement.’
                </p>
                {/*  */}
                <p className="font-bold mb-2">Responsive Design</p>
                <p className="mb-4">
                  ‘We need to ensure our current website is fully responsive and
                  optimised for various devices and screen sizes.’
                </p>
                {/*  */}
                <p className="font-bold mb-2">Micro-Interactions</p>
                <p className="mb-4">
                  ‘We need to design engaging micro-interactions to enhance user
                  experience and provide feedback during user interactions.’
                </p>
                {/*  */}
                <p className="font-bold mb-2">Landing Page Design</p>
                <p className="mb-4">
                  ‘We need a high-converting landing page for our upcoming
                  product launch, focusing on clear call-to-actions and
                  compelling visuals.’
                </p>
                {/*  */}
                <p className="font-bold mb-2">Accessibility Improvements</p>
                <p className="mb-4">
                  ‘We need to review and redesign our website to meet
                  accessibility standards, ensuring it is usable by all users,
                  including those with disabilities.’
                </p>
              </div>
            }
          />
          <AQ
            question="How many requests can I have?"
            answer="You can submit as many requests as you like. Larger requests like a ‘Component Library Design’ or ‘Website Redesign’ will be broken down into smaller tasks that will be delivered one at a time."
          />
          <AQ
            question="How do I submit a request?"
            answer="Once you subscribe, you'll get access to a dedicated Trello board where you can add and track your requests. We’ll help you break larger requests down into smaller tasks on your Trello board. You won’t be left to figure it out alone; we're here to help every step of the way."
          />
          <AQ
            question="When will I receive my designs?"
            answer="On average we will deliver designs for review within 2 business days."
          />
          <AQ
            question="What program do you use to design?"
            answer="We use Figma for all our design work."
          />
          <AQ
            question="What if I don’t like the design?"
            answer="We will keep iterating until you are 100% happy."
          />
          <AQ
            question="What if I only have a single request?"
            answer="You can pause your subscription and return when you have additional design needs."
          />
          <AQ
            question="What kind of clients do you work with?"
            answer={
              <div className="flex flex-col">
                <p className="mb-4">
                  Typical clients include any of the following:
                </p>{" "}
                <ul className="list-disc pl-4">
                  <li className="mb-2">
                    <p className="font-bold">Startups</p>
                    <p>
                      Example: Startups with only technical founders who need
                      high quality design delivered fast.
                    </p>
                  </li>
                  <li className="mb-2">
                    <p className="font-bold">Retail/E-Commerce</p>
                    <p>
                      Example: You Require continuous UI design support to keep
                      your website and mobile app visually appealing and
                      user-friendly. You frequently launch new product lines and
                      promotions, requiring regular updates to you digital
                      interfaces.
                    </p>
                  </li>
                  <li className="mb-2">
                    <p className="font-bold">Financial Services</p>
                    <p>
                      Example: You provide financial advisory services and need
                      a user-friendly client portal and mobile app to manage
                      client accounts, provide financial insights, and
                      communicate with clients securely.
                    </p>
                  </li>
                </ul>
              </div>
            }
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
