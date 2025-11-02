import React from "react";
import AllPagesTopContent from "../AllPagesTopContent";
import BlogSection from "./BlogSection";
import Footer from "../Footer/Footer";

const Blogs = () => {
  return (
    <>
      <AllPagesTopContent
        title1="Explore Expert      "
        title2=""
        title3="Insights Through Informative"
        title4=" Blogs"
        flex="hidden"
        flex2="hidden"
        flex3="hidden"
        height="h-[60vh]"
        height2="h-[100%]"
        // homeDescription="hidden"
        description="Dive into our latest blogs and articles for expert tips, market updates, and financial strategies to help you make informed decisions."
        // homeVideo="/videos/video1.mp4"
      />
      <div className="w-full">
        <BlogSection />
      </div>
      <div className="w-full">
        <Footer/>
      </div>
    </>
  );
};

export default Blogs;
