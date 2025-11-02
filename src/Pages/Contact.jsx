import React from "react";
import AllPagesTopContent from "../components/AllPagesTopContent";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <AllPagesTopContent
        title1="Contact Us"
        title2="for the"
        title3="more"
        title4="information"
        flex="hidden"
        flex2="hidden"
        height="h-[115vh]"
        description="We’re here to help you achieve your financial goals. Contact us for inquiries, support, or to explore career opportunities."
        homeVideo="/videos/video8.mp4"
      />
      <div className="pt-[15vw] w-full min-h-[160vh]">
        <div className="w-full min-h-[160vh] border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)] rounded-b-[50%] overflow-hidden">
          <ContactForm />

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
                For Market updates and analysis, investment strategies, news and
                updates, and promotional offers.
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
      <div className="w-full">
        <Footer/>
      </div>
    </>
  );
};

export default Contact;
