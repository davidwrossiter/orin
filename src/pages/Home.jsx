import Hero from "../blocks/Hero";
import HowItWorks from "../blocks/HowItWorks";
import ReviewBlock from "../blocks/ReviewBlock";
import MemberBen from "../blocks/MemberBen";
import SystemSupport from "../blocks/SystemSupport";
import Memberships from "../blocks/Memberships";

function Home() {
  return (
    <div className="bg-orin-off-white">
      <Hero />
      <HowItWorks />
      <ReviewBlock />
      <MemberBen />
      <SystemSupport />
      <Memberships />
    </div>
  );
}

export default Home;
