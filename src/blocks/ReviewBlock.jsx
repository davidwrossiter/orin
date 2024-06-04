import React from "react";
import Review from "../components/Review";
function ReviewBlock() {
  // name, jobTitle, description, iconSrc
  return (
    <div className="px-6 py-10 font-inter">
      <h3 className="font-bold text-2xl leading-7 pb-6">
        What others have said
      </h3>
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
  );
}

export default ReviewBlock;
