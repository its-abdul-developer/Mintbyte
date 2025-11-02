import React from "react";
import AllPagesTopContent from "../components/AllPagesTopContent";
import Footer from "../components/Footer/Footer";
import LiquidChrome from "../Reactbits/LiquidChrome";

const KYC = () => {
  return (
    <>
      <AllPagesTopContent
        title1="KYC"
        title2="/ FATCA"
        title3=""
        title4="Forms"
        flex="hidden"
        flex2="hidden"
        height="h-[115vh]"
        description="In order to comply with regulatory provisions under Prevention of Money Laundering Act 2002, issued by SEBI/ Govt. of India, KYC formalities are required to be completed for all Unit Holders."
        homeVideo="/videos/video4.mp4"
      />
      <div
        id="online-kyc"
        className="w-full min-h-[100vh] pb-10 flex flex-col items-center justify-end tracking-widest"
      >
        <div className="w-full min-h-[150vh] rounded-b-[50%] overflow-hidden pt-10 border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)] flex flex-col justify-end items-center">
          <h1 className="text-6xl font-bold ">Downloads</h1>
          <div className="mb-5">
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Online KYC
            </button>
            <button className="px-5 py-[1.2vh] mt-8 mx-6 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Mutual Funds Forms
            </button>
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              KYC / FATCA Forms
            </button>
          </div>
          <button className="px-5 py-[1.2vh] mb-20 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
            Client to open Online KYC
          </button>
          <div className="w-full h-[80vh] pt-15">
            <div className="w-full h-[30vh] bg-[#77777787] px-30 flex items-center justify-between">
              <div>
                <h1 className="text-5xl font-bold">
                  Start on Platform from today.
                </h1>
                <h1 className="text-5xl font-bold">Open an account now!</h1>
              </div>
              <div className="">
                <button className="px-5 py-[1.3vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                  Book an Appointment
                </button>
                <button className="px-5 mx-8 py-[1.3vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                  Contact Us
                </button>
                <button className="px-5 py-[1.3vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="w-[58%] h-[24vh] rounded-2xl mt-[-2.5vw]  ml-[22vw]  p-8 flex items-center border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <div className="w-1/2">
                {" "}
                <h1 className="text-3xl font-bold">
                  <span className="text-[#33BC24]">Subscribe</span> to Our
                  Newsletter
                </h1>
                <p className="text-[14px] w-[80%]">
                  For Market updates and analysis, investment strategies, news
                  and updates, and promotional offers.
                </p>
                <p className="text-[14px] text-[#888]">
                  *We respect your privacy. Your information is secure with us.
                </p>
              </div>
              <div className="w-1/2 h-20 pl-30">
                <div className="w-fit h-[70%] rounded-[50px] border overflow-hidden flex">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className=" px-5 py-4 outline-none"
                  />
                  <button className="px-10 py-3 rounded-r-[50px] text-sm bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default KYC;
