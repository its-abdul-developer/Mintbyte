import React from "react";
import AllPagesTopContent from "../components/AllPagesTopContent";
import Footer from "../components/Footer/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Insights = () => {
  const data = [
    {
      image:
        "https://mintbyte.com/wp-content/uploads/2025/10/investissement4829MB.png",
      date: "October 27, 2025",
      h2: "Comprehensive Share Market Investment Guide for Conservative Investors in India",
      paraa:
        "1. Understanding Share Market Investment for Conservative Investors Entering the Indian share market can appear intimidating, especially for investors who put capital preservation before…",
    },
    {
      image:
        "https://mintbyte.com/wp-content/uploads/2025/10/investissement8472MB.png",
      date: "October 20, 2025",
      h2: "Stock Trading India 101: Your Path from Demat Account to First Profit",
      paraa:
        "1. What Is Stock Trading in India? A Beginner’s Introduction If you’re considering building wealth in India, understanding stock trading India is your first essential step.",
    },
    {
      image:
        "https://mintbyte.com/wp-content/uploads/2025/10/investissement4831MB.png",
      date: "October 15, 2025",
      h2: "RegTech Compliance Automation: How It Saves Indian Investors 60% in Costs",
      paraa:
        "1. Understanding RegTech Compliance Automation: A New Era for Indian Investors For Indian investors, the world of compliance has undergone a dramatic transformation in recent years.",
    },
  ];
  const data2 = [
    {
      image:
        "https://mintbyte.com/wp-content/uploads/2025/09/investissement5821MB.png",
      date: "September 1, 2025",
      h2: "Blockchain Finance in India: Unlocking New…",
      paraa:
        "1. Understanding Blockchain Finance in India: An Investor’s Gateway Imagine handling your investments with greater transparency, lightning-fast transactions, and robust security, all without the complexity usually associated with advanced technology.…",
    },
    {
      image:
        "https://mintbyte.com/wp-content/uploads/2025/08/investissement8473MB.png",
      date: "August 29, 2025",
      h2: "How AI Credit Scoring in India…",
      paraa:
        "Understanding AI Credit Scoring in India: A Game Changer in Lending India’s lending landscape is experiencing a profound transformation, driven by the rise of AI credit scoring India. At its…",
    },
    {
      image:
        "https://mintbyte.com/wp-content/uploads/2025/07/investissement2025MB.png.webp",
      date: "July 30, 2025",
      h2: "Beginner’s Complete Guide to Mutual Funds…",
      paraa:
        "1. What Are Mutual Funds in India and Why Are They Ideal for Beginners in 2025? Mutual funds in India represent a simple yet powerful way to invest. At their…",
    },
  ];
  const data3 = [
    {
      image:
        "https://mintbyte.com/wp-content/uploads/2025/07/weekly-business-news-global-markets.png.webp",
      date: "July 6, 2025",
      h2: "Business News of the Week: 30…",
      paraa:
        "Global markets navigated a complex web of mixed signals this week, as easing geopolitical tensions fueled a rally in risk assets while faltering growth forecasts and divergent central bank policies…",
    },
    {
      image:
        "https://mintbyte.com/wp-content/uploads/2025/06/business-news-week-23-29-june.png.webp",
      date: "June 29, 2025",
      h2: "Business News of the Week: 23…",
      paraa:
        "A Week of Highs and Headwinds: Markets Rally to Records Amid Economic Crosscurrents Global markets scaled new heights this week, as investors chose to focus on the prospect of future…",
    },
    {
      image:
        "https://mintbyte.com/wp-content/uploads/2025/06/business-news-weekly-highlights-june-2024.png.webp",
      date: "June 26, 2025",
      h2: "Business News of the Week: 22…",
      paraa:
        "This week, global markets navigated heightened geopolitical tensions, shifting monetary policy cues, and mixed growth signals. Our weekly roundup examines equity swings, debt stress, and hotspot developments across global and…",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  // Blog
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".blogDiv", {
      scrollTrigger: {
        trigger: ".blogDiv",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },

      opacity: 1,
      duration: 1,
    });
    tl.to(".blogDiv2", {
      scrollTrigger: {
        trigger: ".blogDiv2",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },

      opacity: 1,
      scale: 1,
      duration: 1,
    });
    tl.to(".blogCards", {
      scrollTrigger: {
        trigger: ".blogCards",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
  });
 
  // Financial Awareness

 useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".financialDiv", {
      scrollTrigger: {
        trigger: ".financialDiv",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 1,
    });
    tl.to(".financialDiv2", {
      scrollTrigger: {
        trigger: ".financialDiv2",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },

      opacity: 1,
      duration: 1,
    });
    tl.to(".financialCards", {
      scrollTrigger: {
        trigger: ".financialCards",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
  });

  // Market Analysis

   useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".marketDiv", {
      scrollTrigger: {
        trigger: ".marketDiv",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      opacity: 1,
      duration: 1,
    });
    tl.to(".marketDiv2", {
      scrollTrigger: {
        trigger: ".marketDiv2",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 1,
    });
    tl.to(".marketCards", {
      scrollTrigger: {
        trigger: ".marketCards",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
  });

  // Webinars & Podcasts
   useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".podcastsDiv", {
      scrollTrigger: {
        trigger: ".podcastsDiv",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 1,
    });
    tl.to(".podcastsDiv2", {
      scrollTrigger: {
        trigger: ".podcastsDiv2",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      opacity: 1,
      duration: 1,
    });
    tl.to(".podcastsCards", {
      scrollTrigger: {
        trigger: ".podcastsCards",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".podcastsSubscribe", {
      scrollTrigger: {
        trigger: ".podcastsSubscribe",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
  });

  return (
    <>
      <AllPagesTopContent
        title1="Discover Market"
        title2=""
        title3="Trends With Our"
        title4="Financial Insights"
        flex="hidden"
        flex2="hidden"
        height="h-[115vh]"
        description="Empower your financial decisions with our market updates, expert blogs, webinars and educational resources."
        homeVideo="/videos/video6.mp4"
      />
      <div className="w-full h-[80vh]  flex items-end px-30">
        <div className="blogDiv opacity-0 w-1/2 h-[65%]  p-10 flex flex-col justify-center ">
          <h1 className="text-5xl font-bold">Blog</h1>
          <p className="text-xl my-6">
            Dive into our latest blogs and articles for expert tips, market
            updates, and financial strategies to help you make informed
            decisions.
          </p>
          <div className="w-full h-12  rounded-[50px]">
            <button className="px-5 py-[1.3vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Latest Blogs
            </button>
            <button className="px-8 py-[1.3vh] mx-4 rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
              Archives
            </button>
          </div>
        </div>
        <div className="blogDiv2 scale-[0.7] opacity-0 w-1/2 h-[65%] p-10">
          <div className="w-full h-full  overflow-hidden rounded-3xl border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <img
              className="w-full h-full object-cover"
              src="https://mintbyte.com/wp-content/uploads/2025/01/image-31.png.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="blogCards translate-y-[-18%] opacity-0 w-full pt-20  px-30  flex flex-col items-center justify-between">
        <div className="flex gap-20">
          {data.map((d, i) => {
            return (
              <div
                key={i}
                className="w-full hover:border hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all ease-linear  h-[50vh] bg-white/20 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className=" flex items-center justify-between h-[60%] w-full bg-red-200">
                  <img
                    src={d.image}
                    alt={d.name}
                    className=" h-full w-full object-cover"
                  />
                </div>
                <div className=" p-4">
                  <p className=" text">{d.date}</p>
                  <p className="font-semibold text-[2vh] w-[90%] leading-none my-3">
                    {d.h2}
                  </p>
                  <p className="text-[13px] w-[80%]">{d.paraa}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="px-5 py-[1.2vh] rounded-[50px] mt-15 border text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
          <i class="ri-sun-line"></i> View More
        </button>
      </div>
      <div className="w-full min-h-[100vh] flex flex-col items-center py-20  px-30">
        <div className=" w-full h-[55vh]  flex">
          <div className="financialDiv scale-[0.7] opacity-0 w-1/2 full p-10">
            <div className="w-full h-full  overflow-hidden rounded-3xl border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/01/image-32.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="financialDiv2 opacity-0 w-1/2 h-full  p-10 flex flex-col justify-center ">
            <h1 className="text-5xl font-bold">Financial Awareness</h1>
            <p className="text-xl my-6 w-[80%]">
              Empower your financial journey with our educational resources and
              expert guidance
            </p>
            <div className="w-full h-12  rounded-[50px]">
              <button className="px-5 py-[1.3vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                Latest Blogs
              </button>
              <button className="px-8 py-[1.3vh] mx-4 rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                Archives
              </button>
            </div>
          </div>
        </div>
        <div className="financialCards translate-y-[-18%] opacity-0 flex mt-15 gap-20">
          {data2.map((d, i) => {
            return (
              <div
                key={i}
                className="w-full hover:border hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all ease-linear  h-[50vh] bg-white/20 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className=" flex items-center justify-between h-[60%] w-full bg-red-200">
                  <img
                    src={d.image}
                    alt={d.name}
                    className=" h-full w-full object-cover"
                  />
                </div>
                <div className=" p-4">
                  <p className=" text">{d.date}</p>
                  <p className="font-semibold text-[2vh] w-[90%] leading-none my-3">
                    {d.h2}
                  </p>
                  <p className="text-[13px] w-[80%]">{d.paraa}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="px-5 py-[1.2vh] rounded-[50px] mt-15 border text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
          <i class="ri-sun-line"></i> View More
        </button>
      </div>

      <div className="w-full min-h-[100vh] flex flex-col items-center py-20  px-30">
        <div className=" w-full h-[55vh]  flex">
          <div className="marketDiv opacity-0 w-1/2 h-full  p-10 flex flex-col justify-center ">
            <h1 className="text-5xl font-bold">Market Analysis</h1>
            <p className="text-xl my-6 w-[80%]">
              In-depth research, data-driven insights, and actionable
              intelligence to guide your investment decisions.
            </p>
            <div className="w-full h-12  rounded-[50px]">
              <button className="px-5 py-[1.3vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                Latest Blogs
              </button>
              <button className="px-8 py-[1.3vh] mx-4 rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                Archives
              </button>
            </div>
          </div>
          <div className="marketDiv2 scale-[0.7] opacity-0 w-1/2 full p-10">
            <div className="w-full h-full  overflow-hidden rounded-3xl border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/05/Market-Update.jpg.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="marketCards translate-y-[-18%] opacity-0 flex mt-15 gap-20">
          {data3.map((d, i) => {
            return (
              <div
                key={i}
                className="w-full hover:border hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all ease-linear  h-[50vh] bg-white/20 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className=" flex items-center justify-between h-[60%] w-full bg-red-200">
                  <img
                    src={d.image}
                    alt={d.name}
                    className=" h-full w-full object-cover"
                  />
                </div>
                <div className=" p-4">
                  <p className=" text">{d.date}</p>
                  <p className="font-semibold text-[2vh] w-[90%] leading-none my-3">
                    {d.h2}
                  </p>
                  <p className="text-[13px] w-[80%]">{d.paraa}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="px-5 py-[1.2vh] rounded-[50px] mt-15 border text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
          <i class="ri-sun-line"></i> View More
        </button>
      </div>
      <div className="w-full min-h-[170vh] ">
        <div className="w-full min-h-[170vh] rounded-b-[50%]  flex flex-col items-center  px-30 border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)]">
          <div className=" w-full h-[55vh]  flex">
            <div className="podcastsDiv scale-[0.7] opacity-0 w-1/2 full p-10">
              <div className="w-full h-full  overflow-hidden rounded-3xl border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="w-full h-full object-cover"
                  src="https://mintbyte.com/wp-content/uploads/2025/01/image-33.png.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="podcastsDiv2 opacity-0 w-1/2 h-full  p-10 flex flex-col justify-center ">
              <h1 className="text-5xl font-bold">Webinars & Podcasts</h1>
              <p className="text-xl my-6 w-[80%]">
                Learn from the experts with our curated selection of webinars
                and podcasts.
              </p>
              <div className="w-full h-12  rounded-[50px]">
                <button className="px-5 py-[1.3vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                  Latest Blogs
                </button>
                <button className="px-8 py-[1.3vh] mx-4 rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                  Archives
                </button>
              </div>
            </div>
          </div>
          <div className="podcastsCards translate-y-[-18%] opacity-0 flex mt-15 gap-20">
            {data3.map((d, i) => {
              return (
                <div
                  key={i}
                  className="w-full hover:border hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all ease-linear  h-[50vh] bg-white/20 rounded-lg overflow-hidden cursor-pointer"
                >
                  <div className=" flex items-center justify-between h-[60%] w-full bg-red-200">
                    <img
                      src={d.image}
                      alt={d.name}
                      className=" h-full w-full object-cover"
                    />
                  </div>
                  <div className=" p-4">
                    <p className=" text">{d.date}</p>
                    <p className="font-semibold text-[2vh] w-[90%] leading-none my-3">
                      {d.h2}
                    </p>
                    <p className="text-[13px] w-[80%]">{d.paraa}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="px-5 py-[1.2vh] rounded-[50px] mt-15 border text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
            <i class="ri-sun-line"></i> View More
          </button>
          <div className="w-full h-[45vh]">
            <div className="podcastsSubscribe translate-y-[-35%] opacity-0 w-[70%] h-[20vh] border mx-60 mt-20 rounded-lg p-5 flex items-center">
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
              <div className="w-1/2 h-20 pl-10">
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

export default Insights;
