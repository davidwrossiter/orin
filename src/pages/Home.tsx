import Hero from "../blocks/Hero";
import HowItWorks from "../blocks/HowItWorks";
import ReviewBlock from "../blocks/ReviewBlocktjsx";

import Services from "../blocks/Services";
import Memberships from "../blocks/Memberships";
import FAQ from "../blocks/FAQ";
import Footer from "../blocks/Footer";
import Nav from "../components/Nav";
import Features from "../blocks/Features";
import MemberBen from "../blocks/MemberBen";

function Home() {
  return (
    <div className="bg-orin-off-white px-6 lg:px-[148px] w-full flex flex-col lg:items-center">
      <Hero />
      <HowItWorks />
      <ReviewBlock />
      <MemberBen />
      {/* <Features /> */}
      <Services />
      <Memberships />
      <FAQ />
      <Footer />
      <Nav visibility={true} />
    </div>
  );
}

export default Home;
