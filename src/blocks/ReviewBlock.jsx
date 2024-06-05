import React from "react";
import Review from "../components/Review";
function ReviewBlock() {
  // name, jobTitle, description, iconSrc
  return (
    <div className="py-10 xl:py-20 w-full max-w-[1156px] font-inter">
      <h3 className="font-bold text-2xl lg:text-[36px] leading-7 pb-6 lg:pb-10">
        What others have said
      </h3>
      <div className="flex flex-col md:flex-row">
        <Review
          hasPaddingBottom={true}
          name="Sven"
          jobTitle="Head of Product Design - 22seven"
          description="Warren’s finesse in refining ideas, integrating feedback, and interpreting critiques rendered him exceptionally suited to our specialised design needs."
          iconSrc=""
        />
        <Review
          name="Brandon"
          jobTitle="Director - Rethink"
          description="Warren’s commitment to excellence and his collaborative spirit made him an invaluable asset to our team."
          iconSrc=""
        />
      </div>
    </div>
  );
}

export default ReviewBlock;
