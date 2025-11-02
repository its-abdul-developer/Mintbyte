import React from "react";
import AllPagesTopContent from "../AllPagesTopContent";
import MarketSection from "./MarketSection";
import Footer from "../Footer/Footer";


const MarketAnalysis = () => {
  return (
    <>
      <AllPagesTopContent
        title1="Deep Insights"
        title2="for"
        title3="Confident"
        title4="Market Moves"
        flex="hidden"
        flex2="hidden"
        flex3="hidden"
        height="h-[60vh]"
        height2="h-[100%]"
        // homeDescription="hidden"
        description="In-depth research, data-driven insights, and actionable intelligence to guide your investment decisions."
        // homeVideo="/videos/video1.mp4"
      />
      <div className="w-full">
       <MarketSection/>
      </div>
      <div className="w-full">
        <Footer/>
      </div>
    </>
  );
};

export default MarketAnalysis;
