import React, { useState } from "react";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const MarketSection = () => {
  const data = [
    {
      id: 1,
      title: "Business News of the Week: 30 June – 6 July",
      date: "July 6, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/07/weekly-business-news-global-markets.png.webp",
      desc: "Global markets navigated a complex web of mixed signals this week, as easing geopolitical tensions fueled a rally in risk assets while faltering growth forecasts and divergent central bank policies",
    },
    {
      id: 2,
      title: "Business News of the Week: 23 June – 29 June",
      date: "June 29, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/business-news-week-23-29-june.png.webp",
      desc: "A Week of Highs and Headwinds: Markets Rally to Records Amid Economic Crosscurrents Global markets scaled new heights this week, as investors chose to focus on the prospect of future",
    },
    {
      id: 3,
      title: "Business News of the Week: 16 June – 22 June",
      date: "June 22, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/business-news-weekly-highlights-june-2024.png.webp",
      desc: "This week, global markets navigated heightened geopolitical tensions, shifting monetary policy cues, and mixed growth signals. Our weekly roundup examines equity swings, debt stress, and hotspot developments across global and",
    },
    {
      id: 4,
      title: "Business News of the Week: 09 June – 15 June",
      date: "June 15, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/ChatGPT-Image-Jun-15-2025-11_50_23-PM.png.webp",
      desc: "Global markets faced pivotal rate decisions and revisions to growth forecasts, testing investor sentiment. This roundup highlights key developments shaping business sentiment across global and Indian markets this week. OECD",
    },
    {
      id: 5,
      title: "Business News of the Week: 02 June – 08 June",
      date: "June 9, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/weekly-global-business-news-june-2024.png.webp",
      desc: "A weekly summary of policy shifts, corporate deals, and major global economic movements.",
    },
    {
      id: 6,
      title: "Business News of the Week: 29 May – 04 June",
      date: "June 6, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/global-business-news-weekly-highlights-2025.png.webp",
      desc: "Global markets navigated monetary, economic and geopolitical shifts between May 29 and June 4, 2025. This article spotlights six pivotal market and policy developments that investors must monitor. ECB Cuts",
    },
    {
      id: 7,
      title:
        "S&P 500 and Nasdaq Composite Face Steepest Drops Since 2022 Amid Trump’s Tariff Policies",
      date: "May 7, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/mintbyte-market-turbulence-investing.png.webp",
      desc: "The first quarter of 2025 proved chaotic for U.S. equities as investors grappled with mounting fears of economic instability and geopolitical headwinds. Escalating trade tensions following a fresh wave of",
    },
    {
      id: 8,
      title:
        "Navigating Market Turbulence: Understanding Stock Volatility Post-Fed Rate Decisions",
      date: "March 20, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/stock-volatility-fed-rate-banner.png.webp",
      desc: "Global financial markets remain highly volatile as investors react to shifting Federal Reserve policies and broader economic uncertainties. Stock prices fluctuate in response to interest rate decisions, trade restrictions, and",
    },
    {
      id: 9,
      title:
        "Indian Bonds Rally Ahead: Anticipated RBI Rate Cuts Drive 10-Year Yield to 6.25% by Year-End",
      date: "Marc 15, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/indian-bond-rally-yield-drop.png.webp",
      desc: "Indian government bonds are gaining traction among investors as anticipation builds around further interest rate cuts by the Reserve Bank of India (RBI). Market analysts expect these monetary policy adjustments",
    },
    {
      id: 10,
      title:
        "Navigating Economic Turbulence: Analyzing US Tariff Chaos, ECB Rate Cuts, and Global Trade",
      date: "March 13, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/economic-turbulence-investment-strategies.png.webp",
      desc: "Global markets face heightened uncertainty as new US tariffs disrupt international trade, central banks adjust monetary policies, and economic forecasts shift. Investors must navigate these complexities as shifting trade alliances,",
    },
    {
      id: 11,
      title:
        "BSE Shares Drop Over 6% Amid NSE Expiry Date Change: Insights and Future Outlook",
      date: "March 9, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/bse-shares-drop-nse-expiry-shift.png.webp",
      desc: "The recent shift in the National Stock Exchange’s (NSE) weekly expiry date has created significant ripples in the market, particularly impacting BSE Ltd.",
    },
    {
      id: 12,
      title:
        "Gold Prices Surge in India: Expert Predictions Suggest $3,000 Global Benchmark",
      date: "March 8, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/gold-price-surge-banner.png.webp",
      desc: "Gold prices are witnessing a sharp surge, reaching near-record highs both globally and in India. This rally is fueled by rising economic uncertainty, sustained central bank purchases",
    },
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Correct pagination logic — exactly 6 cards per page
  const startIndex = (page - 1) * itemsPerPage;
  const displayedData = data.slice(startIndex, startIndex + itemsPerPage);

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.to(".marketCards", {
      opacity:1,
      delay:4.2,
      duration:1.5,
    })
  })

  
  useGSAP(() => {
    gsap.utils.toArray(".marketBottom").forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      });
    });
  });


  return (
    <>
      <div className="w-full bg-[#090909] min-h-[100vh] ">
        <div className="w-full min-h-[100vh] overflow-hidden  rounded-b-[50%] pt-10 border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)]  ">
          <section className="marketCards opacity-0 w-full min-h-screen bg-[#090909] text-white pt-40 px-6 md:px-16">
            <div className="px-[8vw]">
              {/* Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {displayedData.map((item) => (
                  <div
                    key={item.id}
                    className="cursor-pointer border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-t-2xl overflow-hidden  hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-56 object-cover rounded-t-2xl"
                    />
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://secure.gravatar.com/avatar/8d0e62adb6489aa499f1b17937a0cc34?s=96&d=mm&r=g"
                          alt={item.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <p className="text-sm text-gray-300">{item.author}</p>
                        <CalendarDays size={16} className="text-gray-500" />
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>

                      <h3 className="text-lg font-semibold text-white hover:text-green-500 transition-colors flex items-center justify-between">
                        {item.title}
                        <ArrowUpRight size={30} />
                      </h3>

                      <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-10 gap-3">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className={`px-4 py-2 border rounded-lg text-sm ${
                    page === 1
                      ? "text-gray-600 border-gray-800 cursor-not-allowed"
                      : "text-white border-gray-700 hover:bg-gray-800"
                  }`}
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-4 py-2 border rounded-lg text-sm ${
                      page === i + 1
                        ? "bg-green-500 text-white border-green-500"
                        : "text-white border-gray-700 hover:bg-gray-800"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className={`px-4 py-2 border rounded-lg text-sm ${
                    page === totalPages
                      ? "text-gray-600 border-gray-800 cursor-not-allowed"
                      : "text-white border-gray-700 hover:bg-gray-800"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </section>
          <div className="w-full h-[80vh] pt-20   ">
            <div className="marketBottom translate-y-[35%] opacity-0 w-full h-[30vh] bg-[#77777787] px-30 flex items-center justify-between">
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
            <div className="marketBottom translate-y-[-40%] opacity-0 w-[58%] h-[24vh] rounded-2xl mt-[-2.5vw]  ml-[22vw]  p-8 flex items-center border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
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
    </>
  );
};

export default MarketSection;
