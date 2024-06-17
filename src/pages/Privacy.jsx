import React from "react";
import Footer from "../blocks/Footer";

function Privacy() {
  return (
    <div className="w-full bg-orin-off-white flex flex-col items-center min-h-screen border-spacing-2 px-6 lg:px-[142px]">
      <div className="max-w-[1156px] flex flex-col w-full justify-between py-16">
        <h1 className="font-bold text-4xl py-4">Privacy Policy</h1>
        <p>
          At Orin Design Co, accessible from https://orindesign.co, one of our
          main priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Orin Design Co and how we use it.
        </p>
        <br />
        <h2 className="font-bold pb-1">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
        <br />
        <h2 className="font-bold pb-1">Information we collect</h2>
        <p>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </p>
        <br />
        <p>
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </p>
        <br />
        <h2 className="font-bold pb-1">How we use your information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <br />
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <br />
          <li>Improve, personalize, and expand our website</li>
          <br />
          <li>Understand and analyze how you use our website</li>
          <br />
          <li>Develop new products, services, features, and functionality</li>
          <br />
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </li>
          <br />
          <li>Send you emails</li>
          <br />
          <li>Find and prevent fraud</li>
        </ul>
        <br />
        <h2 className="font-bold pb-1">Google Analytics</h2>
        <p>
          We also use Google Analytics to measure traffic on our website. Google
          has its own Privacy Policy which you can review{" "}
          <a href="https://policies.google.com/privacy">here</a>. If you'd like
          to opt out of tracking by Google Analytics, visit the Google Analytics
          opt-out page.
        </p>
        <br />
        <h2 className="font-bold pb-1">
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </h2>
        <p>
          Under the CCPA, among other rights, California consumers have the
          right to:
        </p>
        <ul>
          <li>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </li>
          <br />
          <li>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </li>
          <br />
          <li>
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </li>
          <br />
          <li>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </li>
        </ul>
        <br />
        <h2 className="font-bold pb-1">GDPR Data Protection Rights</h2>
        <p>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
        </p>
        <ul>
          <li>
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </li>
          <br />
          <li>
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </li>
          <br />
          <li>
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </li>
          <br />
          <li>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </li>
          <br />
          <li>
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </li>
          <br />
          <li>
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </li>
          <br />
        </ul>
        <p>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
