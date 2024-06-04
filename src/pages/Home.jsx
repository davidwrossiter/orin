import Hero from "../blocks/Hero";
import HowItWorks from "../blocks/HowItWorks";
import ReviewBlock from "../blocks/ReviewBlock";
import MemberBen from "../blocks/MemberBen";
import SystemSupport from "../blocks/SystemSupport";

function Home() {
  return (
    <div className="bg-orin-off-white">
      <Hero />
      <HowItWorks />
      <ReviewBlock />
      <MemberBen />
      <SystemSupport />
    </div>
  );
}

export default Home;
