import React from "react";
import AllPagesTopContent from "../AllPagesTopContent";
import FinancialSection from "./FinancialSection";
import Footer from "../Footer/Footer"

const FiniancialAwareness = () => {
  return (
    <>
      <AllPagesTopContent
        title1="Awaken Minds  "
        title2="To"
        title3="Smarter"
        title4=" Financial Choices"
        flex="hidden"
        flex2="hidden"
        flex3="hidden"
        height="h-[60vh]"
        height2="h-[100%]"
        // homeDescription="hidden"
        description="Empower your financial decisions with our market updates, expert blogs, webinars and educational resources."
        // homeVideo="/videos/video1.mp4"
      />
      <div className="w-full">
        <FinancialSection/>
      </div>
      <div className="w-full">
        <Footer/>
      </div>
    </>
  );
};

export default FiniancialAwareness;
