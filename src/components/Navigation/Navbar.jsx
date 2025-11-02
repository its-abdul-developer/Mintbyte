import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const aboutChildRef = useRef(null);
  const serviceChildRef = useRef(null);
  const kycChildRef = useRef(null);
  const partnerChildRef = useRef(null);
  const insightsChildRef = useRef(null);
  const resourceChildRef = useRef(null);
  const searchRef = useRef(null);

  const investmentServicesRef = useRef(null);
  const npsRef = useRef(null);
  const loanProductRef = useRef(null);
  const insuranceRef = useRef(null);
  const solutionOfferingRef = useRef(null);
  const auciliaryOfferingRef = useRef(null);

  // ✅ Mouse Enter par animation (slide down)
  const handleMouseEnter = () => {
    gsap.to(aboutChildRef.current, {
      top: "200%", // dropdown slide niche
      display: "block",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  const handleMouseEnter2 = () => {
    gsap.to(serviceChildRef.current, {
      top: "200%", // dropdown slide niche
      display: "block",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  const handleMouseEnter3 = () => {
    gsap.to(kycChildRef.current, {
      top: "180%", // dropdown slide niche
      display: "block",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  const handleMouseEnter4 = () => {
    gsap.to(partnerChildRef.current, {
      top: "200%", // dropdown slide niche
      display: "block",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  const handleMouseEnter5 = () => {
    gsap.to(insightsChildRef.current, {
      top: "200%", // dropdown slide niche
      display: "block",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  const handleMouseEnter6 = () => {
    gsap.to(resourceChildRef.current, {
      top: "200%", // dropdown slide niche
      display: "block",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  const handleMouseEnter7 = () => {
    gsap.to(searchRef.current, {
      top: "130%", // dropdown slide niche
      display: "block",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  // ✅ Mouse Leave par animation (slide up)
  const handleMouseLeave = () => {
    gsap.to(aboutChildRef.current, {
      top: "70%", // dropdown wapas upar
      display: "none",
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };
  const handleMouseLeave2 = () => {
    gsap.to(serviceChildRef.current, {
      top: "100%", // dropdown wapas upar
      display: "none",
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };
  const handleMouseLeave3 = () => {
    gsap.to(kycChildRef.current, {
      top: "100%", // dropdown wapas upar
      display: "none",
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };
  const handleMouseLeave4 = () => {
    gsap.to(partnerChildRef.current, {
      top: "100%", // dropdown wapas upar
      display: "none",
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };
  const handleMouseLeave5 = () => {
    gsap.to(insightsChildRef.current, {
      top: "100%", // dropdown wapas upar
      display: "none",
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };
  const handleMouseLeave6 = () => {
    gsap.to(resourceChildRef.current, {
      top: "100%", // dropdown wapas upar
      display: "none",
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };
  const handleMouseLeave7 = () => {
    gsap.to(searchRef.current, {
      top: "100%", // dropdown wapas upar
      display: "none",
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

useGSAP(()=>{
  gsap.to(".nav", {
    opacity:1,
    // top:"50%",
    delay:1,
    duration:0.3,
  })
})
  return (
    <nav className="nav w-[80%] h-[8vh] opacity-0 relative rounded-[50px] border border-[#888] text-white shadow-[0_1px_10px_rgba(255,255,255,0.4)] flex items-center justify-between px-2 py-2">
      <img className="h-12 ml-3" src="/images/logo.png" alt="" />

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="About relative"
      >
        <NavLink
          to="/about"
          style={(e) => {
            return {
              color: e.isActive ? "yellow" : "",
              font: e.isActive ? "bold" : "",
              borderBottom: e.isActive ? "2px solid #33BC24" : "",
            };
          }}
          className="flex gap-1 font-light cursor-pointer hover:text-[#00DD41] transition-all ease-linear duration-200"
        >
          About us <i class="ri-arrow-down-s-line "></i>
        </NavLink>
        <div
          ref={aboutChildRef}
          className="absolute rounded-md bg-white  z-50  hidden top-[70%] p-2 w-[12vw]  border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] text-sm"
        >
          <a
            href="#who-we-are"
            className="px-1 py-2 block  rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Who we are
          </a>
          <a
            href="#why-choose-us"
            className="px-1 py-2 block  rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Why Choose Mintbyte
          </a>
          <a
            href="#founder's-profile"
            className="px-1 py-2 block  rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Founder's profile
          </a>
          <a
            href="#environmental"
            className="px-1 py-2 block  rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Environmental, Social and Governance
          </a>
          <a
            href="#career"
            className="px-1 py-2 block  rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Career
          </a>
          <a
            href="#testimonial"
            className="px-1 py-2 block  rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Testimonials
          </a>
          <a
            href="#case-studies"
            className="px-1 py-2 block  rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Case studies
          </a>
        </div>
      </div>
      <div
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
        className="Service relative"
      >
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "yellow" : "",
              font: e.isActive ? "bold" : "",
              borderBottom: e.isActive ? "2px solid #33BC24" : "",
            };
          }}
          to="/services"
          className="flex gap-1  font-light cursor-pointer hover:text-[#00DD41] transition-all ease-linear duration-200"
        >
          Our Services <i class="ri-arrow-down-s-line "></i>
        </NavLink>
        <div
          ref={serviceChildRef}
          className="absolute rounded-md  hidden bg-white z-50  top-[100%] p-2 w-[70vw] left-[-300%]  border border-white/30  shadow-[0_4px_15px_rgba(255,255,255,0.4)] text-sm"
        >
          <div className="border-r-2 border-black h- w-1/4 relative">
            <div>
              <h2
                onMouseEnter={() => {
                  investmentServicesRef.current.style.opacity = 1;
                  investmentServicesRef.current.style.pointerEvents = "auto";
                  loanProductRef.current.style.opacity = 0;
                  loanProductRef.current.style.pointerEvents = "none";

                  insuranceRef.current.style.opacity = 0;
                  insuranceRef.current.style.pointerEvents = "none";

                  npsRef.current.style.opacity = 0;
                  npsRef.current.style.pointerEvents = "none";

                  solutionOfferingRef.current.style.opacity = 0;
                  solutionOfferingRef.current.style.pointerEvents = "none";

                  auciliaryOfferingRef.current.style.opacity = 0;
                  auciliaryOfferingRef.current.style.pointerEvents = "none";
                }}
                // onMouseLeave={()=>{
                //   investmentServicesRef.current.style.opacity = 0;
                // }}
                className=" w-fit px-3 py-2 rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-opacity ease-linear duration-200 cursor-pointer"
              >
                Investment Services <i class="ri-arrow-right-s-line"></i>
              </h2>
              <div
                ref={investmentServicesRef}
                className="absolute transition-all ease-linear duration-200  pointer-events-none  opacity-0 top-0 right-[-55%]"
              >
                <Link
                  to="/services/mutual-fund"
                  className="px-3 py-2 block  rounded-[50px] w-full  text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer "
                >
                  Mutual Funds
                </Link>
                <Link
                  to="/services/stock-trading"
                  className="px-3 py-2 block  rounded-[50px] w-full  text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer "
                >
                  Stock Trading
                </Link>
                <Link
                  to="/services/portfolio-management"
                  className="px-3 py-2  block rounded-[50px] w-full  text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer "
                >
                  PMS
                </Link>
                <Link
                  to="/services/alternative-investment"
                  className="px-3 py-2 block  rounded-[50px] w-full  text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer "
                >
                  Alternative Investments
                </Link>
              </div>
            </div>
            <div>
              <Link
                to="/services/nps"
                onMouseEnter={() => {
                  investmentServicesRef.current.style.opacity = 0;
                  investmentServicesRef.current.style.pointerEvents = "none";
                  loanProductRef.current.style.opacity = 0;
                  loanProductRef.current.style.pointerEvents = "none";

                  insuranceRef.current.style.opacity = 0;
                  insuranceRef.current.style.pointerEvents = "none";

                  npsRef.current.style.opacity = 1;
                  npsRef.current.style.pointerEvents = "auto";

                  solutionOfferingRef.current.style.opacity = 0;
                  solutionOfferingRef.current.style.pointerEvents = "none";

                  auciliaryOfferingRef.current.style.opacity = 0;
                  auciliaryOfferingRef.current.style.pointerEvents = "none";
                }}
                // onMouseLeave={()=>{
                //   investmentServicesRef.current.style.opacity = 0;
                // }}
                className=" w-fit px-3 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41]  hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
              >
                National Pension System <i class="ri-arrow-right-s-line"></i>
              </Link>
              <div
                ref={npsRef}
                className="absolute transition-all ease-linear duration-200 w-[40vw] pointer-events-none  opacity-0 top-0 right-[-245%]"
              >
                <p className="mt-3 text-black  ">
                  A mutual fund is simply a financial intermediary that allows a
                  group of investors to pool their money together with a
                  predetermined investment objective.As you probably know,
                  mutual funds have become extremely popular over the last 20
                  years.
                </p>
                <button className="px-4 py-[1.2vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 font-medium mt-5 cursor-pointer">
                  Learn more
                </button>
              </div>
            </div>
            <div>
              <Link
                to="/services/loan-product"
                onMouseEnter={() => {
                  investmentServicesRef.current.style.opacity = 0;
                  investmentServicesRef.current.style.pointerEvents = "none";
                  loanProductRef.current.style.opacity = 1;
                  loanProductRef.current.style.pointerEvents = "auto";

                  insuranceRef.current.style.opacity = 0;
                  insuranceRef.current.style.pointerEvents = "none";

                  npsRef.current.style.opacity = 0;
                  npsRef.current.style.pointerEvents = "none";

                  solutionOfferingRef.current.style.opacity = 0;
                  solutionOfferingRef.current.style.pointerEvents = "none";

                  auciliaryOfferingRef.current.style.opacity = 0;
                  auciliaryOfferingRef.current.style.pointerEvents = "none";
                }}
                className=" w-fit px-3 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
              >
                Loan Products <i class="ri-arrow-right-s-line"></i>
              </Link>
              <div
                ref={loanProductRef}
                className="absolute transition-all ease-linear opacity-0 pointer-events-none duration-200  top-0 right-[-40%]"
              >
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer ">
                  Home Loans
                </h3>
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer ">
                  Business Loans
                </h3>
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black  hover:text-[#fff] hover:bg-[#ffd921] cursor-pointer ">
                  Education Loans
                </h3>
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer ">
                  Vehicle Loans
                </h3>
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer ">
                  Gold Loans
                </h3>
              </div>
            </div>
            <div>
              <Link
                to="/services/insurance"
                onMouseEnter={() => {
                  investmentServicesRef.current.style.opacity = 0;
                  investmentServicesRef.current.style.pointerEvents = "none";
                  loanProductRef.current.style.opacity = 0;
                  loanProductRef.current.style.pointerEvents = "none";

                  insuranceRef.current.style.opacity = 1;
                  insuranceRef.current.style.pointerEvents = "auto";

                  npsRef.current.style.opacity = 0;
                  npsRef.current.style.pointerEvents = "none";

                  solutionOfferingRef.current.style.opacity = 0;
                  solutionOfferingRef.current.style.pointerEvents = "none";

                  auciliaryOfferingRef.current.style.opacity = 0;
                  auciliaryOfferingRef.current.style.pointerEvents = "none";
                }}
                className=" w-fit px-3 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
              >
                Insurance <i class="ri-arrow-right-s-line"></i>
              </Link>
              <div
                ref={insuranceRef}
                className="absolute transition-all ease-linear opacity-0 pointer-events-none duration-200  top-0 right-[-40%]"
              >
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer ">
                  Life Insurance
                </h3>
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer ">
                  Health Insurance
                </h3>
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer ">
                  Motor Insurance
                </h3>
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer ">
                  Home Insurance
                </h3>
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer ">
                  Travel Insurance
                </h3>
              </div>
            </div>
            <div>
              <h2
                onMouseEnter={() => {
                  investmentServicesRef.current.style.opacity = 0;
                  investmentServicesRef.current.style.pointerEvents = "none";
                  loanProductRef.current.style.opacity = 0;
                  loanProductRef.current.style.pointerEvents = "none";

                  insuranceRef.current.style.opacity = 0;
                  insuranceRef.current.style.pointerEvents = "none";

                  npsRef.current.style.opacity = 0;
                  npsRef.current.style.pointerEvents = "none";

                  solutionOfferingRef.current.style.opacity = 1;
                  solutionOfferingRef.current.style.pointerEvents = "auto";

                  auciliaryOfferingRef.current.style.opacity = 0;
                  auciliaryOfferingRef.current.style.pointerEvents = "none";
                }}
                className=" w-fit px-3 py-2 rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
              >
                Solution-Oriented Offerings{" "}
                <i class="ri-arrow-right-s-line"></i>
              </h2>
              <div
                ref={solutionOfferingRef}
                className="absolute transition-all ease-linear opacity-0 duration-200 pointer-events-none  top-0 right-[-55%]"
              >
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]  cursor-pointer ">
                  Retirement Saving
                </h3>
                <h3 className="px-3 py-2 rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]    cursor-pointer ">
                  Tax-Efficient Investments
                </h3>
                <Link
                  to="/services/estate-planing"
                  className="px-3 py-2 block rounded-[50px] w-full text-black hover:text-[#fff] hover:bg-[#ffd921]    cursor-pointer "
                >
                  Estate Planning
                </Link>
              </div>
            </div>
            <div>
              <Link
                to="/services/auxillary-offerings"
                onMouseEnter={() => {
                  investmentServicesRef.current.style.opacity = 0;
                  investmentServicesRef.current.style.pointerEvents = "none";
                  loanProductRef.current.style.opacity = 0;
                  loanProductRef.current.style.pointerEvents = "none";

                  insuranceRef.current.style.opacity = 0;
                  insuranceRef.current.style.pointerEvents = "none";

                  npsRef.current.style.opacity = 0;
                  npsRef.current.style.pointerEvents = "none";

                  solutionOfferingRef.current.style.opacity = 0;
                  solutionOfferingRef.current.style.pointerEvents = "none";

                  auciliaryOfferingRef.current.style.opacity = 1;
                  auciliaryOfferingRef.current.style.pointerEvents = "auto";
                }}
                className=" w-fit px-3 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
              >
                Auxiliary Offerings <i class="ri-arrow-right-s-line"></i>
              </Link>
              <div
                ref={auciliaryOfferingRef}
                className="absolute  transition-all ease-linear duration-200 w-[40vw] pointer-events-none  opacity-0 top-0 right-[-245%]"
              >
                <p className="mt-3 text-black hover:text-[#00DD41]">
                  A mutual fund is simply a financial intermediary that allows a
                  group of investors to pool their money together with a
                  predetermined investment objective.As you probably know,
                  mutual funds have become extremely popular over the last 20
                  years.
                </p>
                <button className="px-4 py-[1.2vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 font-medium mt-5 cursor-pointer">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
        className="Kyc relative"
      >
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "yellow" : "",
              font: e.isActive ? "bold" : "",
              borderBottom: e.isActive ? "2px solid #33BC24" : "",
            };
          }}
          to="/kyc"
          className=" font-light cursor-pointer hover:text-[#00DD41] transition-all ease-linear duration-200"
        >
          KYC <i class="ri-arrow-down-s-line "></i>
        </NavLink>
        <div
          ref={kycChildRef}
          className="absolute rounded-md bg-white  z-50  hidden top-[100%] p-2 w-[12vw]  border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] text-sm"
        >
          <a
            href="#online-kyc"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Online KYC
          </a>
          <a
            href="#online-kyc"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Mutual Funds Forms
          </a>
          <a
            href="#online-kyc"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            KYC/FATCA Forms
          </a>
        </div>
      </div>
      <div
        onMouseEnter={handleMouseEnter4}
        onMouseLeave={handleMouseLeave4}
        className="Partner relative"
      >
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "yellow" : "",
              font: e.isActive ? "bold" : "",
              borderBottom: e.isActive ? "2px solid #33BC24" : "",
            };
          }}
          to="/partnerwithus"
          className="flex gap-1 font-light cursor-pointer hover:text-[#00DD41] transition-all ease-linear duration-200"
        >
          Partner with us <i class="ri-arrow-down-s-line "></i>
        </NavLink>
        <div
          ref={partnerChildRef}
          className="absolute  rounded-md z-50 bg-white  hidden top-[100%] p-2 w-[12vw]  border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] text-sm"
        >
          <a
            href="#for-financial"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            For Financial Advisor
          </a>
          <a
            href="#for-business"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            For Businesses
          </a>
        </div>
      </div>
      <div
        onMouseEnter={handleMouseEnter5}
        onMouseLeave={handleMouseLeave5}
        className="insights relative"
      >
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "yellow" : "",
              font: e.isActive ? "bold" : "",
              borderBottom: e.isActive ? "2px solid #33BC24" : "",
            };
          }}
          to="/insights"
          className="flex gap-1 font-light cursor-pointer hover:text-[#00DD41] transition-all ease-linear duration-200"
        >
          Insights <i class="ri-arrow-down-s-line "></i>
        </NavLink>
        <div
          ref={insightsChildRef}
          className="absolute  rounded-md z-50  hidden top-[100%] p-2 w-[12vw] bg-white  border border-white/30 shadow-[0_4px_15px_rgba(255,255,25)] text-sm"
        >
          <Link
            to="/insights/market-analysis"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Market Analysis
          </Link>
          <Link
            to="/insights/finiancial-awareness"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Finiancial Awareness
          </Link>
          <Link
            to="/insights/blogs"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Blog
          </Link>
          <Link
            to="/insights/webinars-podcast"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Webinars and Podcasts
          </Link>
        </div>
      </div>
      <div
        onMouseEnter={handleMouseEnter6}
        onMouseLeave={handleMouseLeave6}
        className="rsources relative"
      >
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "yellow" : "",

              fontWeight: e.isActive ? "700" : "",
              borderBottom: e.isActive ? "2px solid #33BC24" : "",
            };
          }}
          to="/resources"
          className="flex gap-1 font-light cursor-pointer hover:text-[#00DD41] transition-all ease-linear duration-200"
        >
          Resources <i class="ri-arrow-down-s-line "></i>
        </NavLink>
        <div
          ref={resourceChildRef}
          className="absolute  rounded-md z-50  hidden top-[100%] p-2 w-[12vw] bg-white  border border-white/30 shadow-[0_4px_15px_rgba(255,255,25)] text-sm"
        >
          <a
            href="#online-kyc"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            Download Forms
          </a>
          <a
            href="#faqs"
            className="px-1 py-2 block rounded-lg text-yellow-500 hover:text-[#00DD41] hover:bg-[#022E10] transition-all ease-linear duration-200 cursor-pointer"
          >
            FAQs
          </a>
        </div>
      </div>
      <div>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "yellow" : "",
              font: e.isActive ? "bold" : "",
              borderBottom: e.isActive ? "2px solid #33BC24" : "",
            };
          }}
          to="/contact"
          className=" font-light cursor-pointer hover:text-[#00DD41] transition-all ease-linear duration-200"
        >
          Contact us
        </NavLink>
      </div>
      <div className="flex items-center gap-6">
        <div
          onMouseEnter={handleMouseEnter7}
          onMouseLeave={handleMouseLeave7}
          className="search relative"
        >
          <i class="ri-search-line text-2xl font-medium cursor-pointer hover:text-[#00DD41] "></i>
          <div
            ref={searchRef}
            className="absolute hidden  rounded-md z-50 h-8 top-[100%] left-[-250%] flex items-center justify-center p-2 w-[12vw]   text-sm"
          >
            <input
              type="text"
              placeholder="Search"
              className="bg-black px-3 py-2 rounded-lg outline-none border border-white/30 shadow-[0_4px_15px_rgba(255,255,25)]"
            />
          </div>
        </div>
        <button className="px-12 py-[1.4vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 font-medium cursor-pointer">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
