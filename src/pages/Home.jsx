import Hero from "../blocks/Hero";
import HowItWorks from "../blocks/HowItWorks";
import ReviewBlock from "../blocks/ReviewBlock";
import MemberBen from "../blocks/MemberBen";
import SystemSupport from "../blocks/SystemSupport";
import Memberships from "../blocks/Memberships";
import FAQ from "../blocks/FAQ";
import Footer from "../blocks/Footer";

function Home() {
  return (
    <div className="bg-orin-off-white px-6 lg:px-[148px] w-full flex flex-col lg:items-center">
      <Hero />
      <HowItWorks />
      <ReviewBlock />
      <MemberBen />
      <SystemSupport />
      <Memberships />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
