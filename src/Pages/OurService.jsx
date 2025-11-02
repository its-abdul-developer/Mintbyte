import React from "react";
import AllPagesTopContent from "../components/AllPagesTopContent";
import Footer from "../components/Footer/Footer";
import LiquidChrome from "../Reactbits/LiquidChrome";

const OurService = () => {
  return (
    <>
      <AllPagesTopContent
        title1="Your Gateway"
        title2="to"
        title3="Financial"
        title4="Success"
        flex="hidden"
         height="h-[115vh]"
        // flex2="hidden"
        description="Welcome to Mintbyte, your partner in navigating the complexities of the financial world. We offer a comprehensive suite of services designed to help you achieve your financial goals, whether you’re planning for retirement, growing your wealth, or seeking financial security."
        homeVideo="/videos/video9.mp4"
      />
      <div className="w-full h-[50vh] "></div>
      <div className="w-full min-h-[100vh]  flex flex-col items-center py-15 px-40 ">
        <h1 className="font-bold text-7xl tracking-tight text-center">
          Our <span className="text-[#33BC24]">Key Services</span>
        </h1>
        <div className="w-full h-[48vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
          <div className="w-1/2 h-full p-5 ">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/03/image-55.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-start p-10 ">
            <h2 className="text-3xl font-medium">Mutual Fund Services</h2>
            <p className="text-xl mt-10 w-[80%]">
              Unlock diversified investment opportunities for long-term capital
              appreciation. Explore equity, debt, hybrid, and thematic funds
              with expert guidance.
            </p>
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full h-[48vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
          <div className="w-1/2 h-full flex flex-col justify-center items-start p-10">
            <h2 className="text-3xl font-medium">Stock Trading Services</h2>
            <p className="text-xl mt-10 w-[80%]">
              Access a platform for seamless online stock trading. Capitalize on
              market opportunities with our advanced platform, insightful
              research, and diverse trading options.
            </p>
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="w-1/2 h-full p-5">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/03/image-56.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[48vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
          <div className="w-1/2 h-full  p-5">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/03/image-57.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 h-full  flex flex-col justify-center items-start p-10">
            <h2 className="text-3xl font-medium">
              Portfolio Management Services (PMS)
            </h2>
            <p className="text-xl mt-10 w-[80%]">
              Elevate your wealth with our personalized PMS solutions. Benefit
              from expert management, diversified strategies, and transparent
              communication.
            </p>
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full h-[48vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
          <div className="w-1/2 h-full flex flex-col justify-center items-start p-10">
            <h2 className="text-3xl font-medium">
              Alternate Investment Funds (AIF)
            </h2>
            <p className="text-xl mt-10 w-[80%]">
              Explore high-potential investment opportunities beyond traditional
              options. Our AIFs provide access to private equity, venture
              capital, and more, for sophisticated investors
            </p>
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="w-1/2 h-full p-5">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/03/image-58.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[48vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
          <div className="w-1/2 h-full p-5">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/03/image-59.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-start p-10">
            <h2 className="text-3xl font-medium">Fixed Income Products</h2>
            <p className="text-xl mt-10 w-[80%]">
              Secure stable returns and steady income with our range of fixed
              income investments, including corporate fixed deposits and
              government bonds.
            </p>
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full h-[48vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
          <div className="w-1/2 h-full  flex flex-col justify-center items-start p-10">
            <h2 className="text-3xl font-medium">
              National Pension Scheme (NPS)
            </h2>
            <p className="text-xl mt-10 w-[80%]">
              Plan for your retirement with a flexible and tax-efficient
              solution. We simplify the NPS process and provide expert guidance
              for a financially secure future.
            </p>
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="w-1/2 h-full  p-5">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/03/image-60.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[48vh] mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
          <div className="w-1/2 h-full  p-5">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/03/image-61.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 h-full  flex flex-col justify-center items-start p-10">
            <h2 className="text-3xl font-medium">Loan Products</h2>
            <p className="text-xl mt-10 w-[80%]">
              Achieve your personal and business goals with our tailored lending
              solutions. We offer a variety of loan products with competitive
              rates and flexible terms.
            </p>
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full h-[48vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
          <div className="w-1/2 h-full flex flex-col justify-center items-start p-10">
            <h2 className="text-3xl font-medium">Insurance</h2>
            <p className="text-xl mt-10 w-[80%]">
              Protect what matters most with our comprehensive insurance
              solutions. We offer a range of insurance products to safeguard
              your health, family, assets, and business.
            </p>
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="w-1/2 h-full p-5">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/03/image-62.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[48vh] mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
          <div className="w-1/2 h-full p-5">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/03/image-63.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-start p-10">
            <h2 className="text-3xl font-medium">Gift City Services</h2>
            <p className="text-xl mt-10 w-[80%]">
              Offer specialized financial services within Gujarat International
              Finance Tec-City (GIFT City). Cater to clients seeking
              opportunities in India’s emerging financial hub.
            </p>
            <button className="px-5 py-[1.2vh] mt-8 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[80vh] bg-red-100  z-10  relative">
        <div className="absolute inset-0 -z-9 ">
          <LiquidChrome
            baseColor={[0.1, 0.1, 0.1]}
            speed={1}
            amplitude={0.6}
            interactive={true}
          />
        </div>
        <div className="w-full h-full rounded-b-[50%] pt-24  bg-[#090909]  ">
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
        <Footer />
      </div>
    </>
  );
};

export default OurService;
