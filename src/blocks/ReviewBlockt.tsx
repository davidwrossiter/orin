import React from "react";
import Review from "../components/Review";
function ReviewBlock() {
  // name, jobTitle, description, iconSrc
  return (
    <div className="py-10 xl:py-20 w-full max-w-[1156px] font-inter flex flex-col items-start md:items-center">
      <h3 className="font-bold text-2xl w-full md:text-center lg:text-[36px] leading-7 pb-8 lg:pb-10 lg:leading-[48px]">
        What others have said
      </h3>
      <div className="flex flex-col md:flex-row">
        <Review
          hasPaddingBottom={true}
          name="Sven"
          jobTitle="Head of Product Design - 22seven"
          description="Warren’s finesse in refining ideas, integrating feedback, and interpreting critiques rendered him exceptionally suited to our specialised design needs."
          iconSrc="../../icons/sven.svg"
        />
        <Review
          name="Brandon"
          jobTitle="Director - Rethink"
          description="Warren is a highly experienced UX/UI designer whose passion, skill and dedication are evident in every project he undertakes."
          iconSrc="../../icons/brandon.svg"
        />
      </div>
    </div>
  );
}

export default ReviewBlock;
