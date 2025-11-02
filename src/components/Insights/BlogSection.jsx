import React, { useState } from "react";
import { CalendarDays, ArrowUpRight } from "lucide-react";
const BlogSection = () => {
  const data = [
    {
      id: 1,
      title:
        "Blockchain Finance in India: Unlocking New Investment Opportunities",
      date: "September 1, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/09/investissement5821MB.png",
      desc: "1. Understanding Blockchain Finance in India: An Investor’s Gateway Imagine handling your investments with greater transparency, lightning-fast transactions, and robust security, all without the complexity usually associated with advanced technology.",
    },
    {
      id: 2,
      title: "How AI Credit Scoring in India Can Secure Better Loan Rates",
      date: "August 29, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/08/investissement8473MB.png",
      desc: "Understanding AI Credit Scoring in India: A Game Changer in Lending India’s lending landscape is experiencing a profound transformation, driven by the rise of AI credit scoring India. At its",
    },
    {
      id: 3,
      title: "Beginner’s Complete Guide to Mutual Funds in India for 2025",
      date: "July 30, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/07/investissement2025MB.png.webp",
      desc: "1. What Are Mutual Funds in India and Why Are They Ideal for Beginners in 2025? Mutual funds in India represent a simple yet powerful way to invest. At their",
    },
    {
      id: 4,
      title:
        "SEBI vs. Jane Street: How a $5 Billion “Baazigar” Strategy Got Busted",
      date: "July 5, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/07/sebi-vs-jane-street-trading-scheme.png.webp",
      desc: "In the high-stakes world of finance, some stories read like a blockbuster thriller. The recent showdown between India’s market watchdog, the Securities and Exchange Board of India (SEBI), and the",
    },
    {
      id: 5,
      title:
        "Navigating Trade Turbulence: High-Stakes Negotiations Impacting India’s Pharma Exports and Global Supply Chains",
      date: "July 5, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/07/india-pharma-trade-supplychain.png.webp",
      desc: "As U.S.–India trade tensions intensify ahead of a pivotal July 9 deadline, global markets are on edge. For Indian pharmaceutical exporters, this geopolitical uncertainty is more than diplomatic—it threatens revenue",
    },
    {
      id: 6,
      title:
        "India’s Foreign Exchange Reserves Reach $691.5 Billion: A Strong Shield for Imports and Economic Stability",
      date: "June 7, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/india-forex-reserves-rbi-2025.png.webp",
      desc: "India’s burgeoning foreign exchange reserves are a testament to its maturing financial architecture and economic resilience. With reserves reaching an impressive $691.5 billion as of May 30, 2025, the nation",
    },
    {
      id: 7,
      title:
        "SEBI’s New Rules: Standardizing Equity Derivative Expiry Days for Investor Clarity and Market Stability",
      date: "June 7, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/sebi-equity-derivative-expiry-rules-india.png.webp",
      desc: "India’s equity derivatives market has experienced rapid growth, accompanied by a surge in short-term trading and speculative strategies. In response, the Securities and Exchange Board of India (SEBI) has implemented",
    },
    {
      id: 8,
      title:
        "Indian Government Discontinues Gold Monetization Scheme: Unpacking the Impact on Household Wealth and Investment Strategies",
      date: "May 20, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/india-gold-scheme-impact.png.webp",
      desc: "India’s sudden termination of long-term deposit options under the Gold Monetization Scheme has surprised investors and financial planners alike. With gold prices nearing record highs, this shift reshapes how households",
    },
    {
      id: 9,
      title:
        "Nobody Knows Anything: Insights from Robert Moriarty’s Analysis of Investor Behavior and Market Dynamics",
      date: "May 8, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/contrarian-investing-market-uncertainty.png.webp",
      desc: "In a financial world overloaded with predictions and market gurus, clarity often becomes the investor’s most valuable asset. Robert Moriarty’s radically simple yet deeply intuitive approach strips away the noise,",
    },
    {
      id: 10,
      title:
        "Unveiling Warren Buffett’s Investment Philosophy: Key Strategies for Savvy Financial Decision-Making",
      date: "May 7, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/Value-Proposition-3-2048x1229.jpg.webp",
      desc: "Navigating today’s dynamic financial markets calls for more than short-term trades or speculative trends—it demands a steadfast, informed investment approach. Among legendary investors, few embody strategic consistency and long-term vision",
    },
    {
      id: 11,
      title:
        "Master Your Money: A Practical Guide to Financial Literacy, Smart Investment Strategies, and Avoiding Common Pitfalls",
      date: "May 6, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/iStock-1180995065-1-2048x1133.jpg.webp",
      desc: "Financial independence starts not with wealth, but with knowing how to manage money wisely and avoid common traps. MintByte explores practical financial literacy, disciplined investment strategies, and tips to prevent",
    },
    {
      id: 12,
      title:
        "Unlocking Financial Decisions: How Understanding System 1 and System 2 Thinking Can Boost Your Investing Skills and Avoid Biases",
      date: "May 5, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/system1-system2-investment-decision.png.webp",
      desc: "In today’s volatile markets, investors must navigate not only data but also their own cognitive biases. By understanding System 1 and System 2 thinking, investors can make more rational decisions",
    },
    {
      id: 13,
      title:
        "Exploring What Money Can’t Buy: Understanding the Ethical Limits of Market Forces in Finance and Society",
      date: "April 10, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/money-vs-ethics-balance-scale.png.webp",
      desc: "In today’s market-driven world, financial principles increasingly influence areas once guided by ethics, civic duty, or public welfare. From private healthcare to education.",
    },
    {
      id: 14,
      title:
        "IRDAI Empowers Insurers: Bond Forwards Now Allowed for Interest Rate Risk Hedging",
      date: "March 28, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/irdai-insurers-bond-forward-hedging.png.webp",
      desc: "The Insurance Regulatory and Development Authority of India (IRDAI) has introduced a significant regulatory update aimed at strengthening risk management for insurers. This move allows insurance companies to utilize bond",
    },
    {
      id: 15,
      title:
        "Harness the Compound Effect to Unlock Wealth: Transform Small Choices into Financial Success Over Time",
      date: "March 25, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/compound-effect-wealth-growth-banner.png.webp",
      desc: "Financial success isn’t the result of a single monumental decision—it’s built through disciplined, repeated actions over time. The Compound Effect, a principle popularized by Darren Hardy, highlights how small financial",
    },
    {
      id: 16,
      title:
        "Unraveling Peter Lynch’s Investment Myths: Debunking Common Misconceptions About Stock Market Recovery and Value Dancing",
      date: "March 24, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/debunking-stock-market-myths-banner.png.webp",
      desc: "Investors often believe certain “rules” about the stock market that seem logical but can lead to costly mistakes. Legendary investor Peter Lynch has spent decades debunking these myths, helping investors",
    },
    {
      id: 17,
      title:
        "NSDL’s ₹3,000-Crore IPO Delayed: What Investors Need to Know About the Revised Timeline and Financial Updates",
      date: "March 18, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/nsdl-ipo-delay-timeline-banner.png.webp",
      desc: "The National Securities Depository Ltd. (NSDL) has postponed its much-anticipated ₹3,000-crore initial public offering (IPO) due to regulatory obligations. This delay, driven by the need to update its financial disclosures,",
    },
    {
      id: 18,
      title:
        "SEBI’s Proposed Short-Selling Reforms: What Investors Need to Know About New Regulations and Market Impact",
      date: "March 17, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/sebi-short-selling-reforms-banner.png.webp",
      desc: "The Securities and Exchange Board of India (SEBI) is preparing to introduce major revisions to its short-selling regulations. These proposed changes could reshape market participation, liquidity, and investor strategies, prompting",
    },
    {
      id: 19,
      title:
        "SEBI’s Game-Changing Move: Revamping Short-Selling Regulations to Boost Market Efficiency",
      date: "March 17, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/sebi-short-selling-reforms-market-banner.png.webp",
      desc: "The Securities and Exchange Board of India (SEBI) is considering a significant overhaul of short-selling regulations, aiming to enhance market efficiency and investor participation. By easing existing restrictions and revisiting",
    },
    {
      id: 20,
      title:
        "Unlocking Wealth: Everything You Need to Know About SEBI’s New Specialised Investment Funds",
      date: "March 16, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/specialised-investment-funds-unlocking-wealth-banner.png.webp",
      desc: "The Securities and Exchange Board of India has unveiled Specialised Investment Funds, SIFs, a new asset class catering to affluent investors. Designed as a middle ground between mutual funds and",
    },
    {
      id: 21,
      title:
        "Mastering Mutual Fund Performance: How Quartile Rankings Can Elevate Your Investment Strategy",
      date: "March 11, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/07/sebi-vs-jane-street-trading-scheme.png.webp",
      desc: "Successful investing requires a thorough evaluation of mutual fund performance, as it directly influences long-term financial growth. One effective method used by investors is quartile rankings, which provide a structured",
    },
    {
      id: 22,
      title:
        "Understanding the Debt-to-Equity Ratio: A Key Metric for Financial Health and Investment Decisions",
      date: "March 11, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/sebi-equity-derivative-expiry-rules-india.png.webp",
      desc: "Introduction Evaluating a company’s financial health is crucial for investors, lenders, and business leaders. One key metric used to assess financial stability and risk is the debt-to-equity (D/E) ratio, which",
    },
    {
      id: 23,
      title:
        "March 2025 Financial Deadlines and Updates: Essential EPFO Changes, ITR Corrections, Tax-Saving Investments, and Fixed Deposit Insights",
      date: "March 8, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/march-2025-financial-deadlines-banner.png.webp",
      desc: "March 2025 is a crucial month for taxpayers, investors, and EPF subscribers, with multiple financial deadlines and regulatory updates taking effect. Staying informed about these changes can help individuals optimize",
    },
    {
      id: 24,
      title:
        "Investing in a Decline: How to Capitalize on the Indian Stock Market Downturn with Equity Mutual Funds and Smart Strategies",
      date: "March 6, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/indian-market-downturn-equity-mutual-fund-opportunity.png.webp",
      desc: "Understanding the Recent Decline in the Indian Stock Market Key Factors Driving the Market Downturn The Indian stock market has faced significant turbulence in early 2025, with benchmark indices like",
    },
    {
      id: 25,
      title:
        "Indian Mutual Fund Industry Evolution: Competition Rises with ‘MF Lite’ Regulations and New AMCs Challenging Top Players",
      date: "March 3, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/india-mutual-fund-competition-banner.png.webp",
      desc: "The Indian mutual fund industry has historically been dominated by a handful of large asset management companies (AMCs), maintaining a firm grip on market share. However, recent regulatory reforms and",
    },
    {
      id: 26,
      title:
        "IEmpower Your Financial Future: 8 Strategic Investment Options for Women on International Women’s Day 2025",
      date: "March 3, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/financial-empowerment-women-investing-banner.png.webp",
      desc: "Introduction Significance of Financial Independence for Women Financial independence is a crucial pillar of women’s empowerment. It provides the ability to make informed life choices, pursue career growth, and secure",
    },
    {
      id: 27,
      title: "Business News of the Week: 30 June – 6 July",
      date: "July 6, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/07/weekly-business-news-global-markets.png.webp",
      desc: "Global markets navigated a complex web of mixed signals this week, as easing geopolitical tensions fueled a rally in risk assets while faltering growth forecasts and divergent central bank policies",
    },
    {
      id: 28,
      title: "Business News of the Week: 23 June – 29 June",
      date: "June 29, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/business-news-week-23-29-june.png.webp",
      desc: "A Week of Highs and Headwinds: Markets Rally to Records Amid Economic Crosscurrents Global markets scaled new heights this week, as investors chose to focus on the prospect of future",
    },
    {
      id: 29,
      title: "Business News of the Week: 16 June – 22 June",
      date: "June 22, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/business-news-weekly-highlights-june-2024.png.webp",
      desc: "This week, global markets navigated heightened geopolitical tensions, shifting monetary policy cues, and mixed growth signals. Our weekly roundup examines equity swings, debt stress, and hotspot developments across global and",
    },
    {
      id: 30,
      title: "Business News of the Week: 09 June – 15 June",
      date: "June 15, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/ChatGPT-Image-Jun-15-2025-11_50_23-PM.png.webp",
      desc: "Global markets faced pivotal rate decisions and revisions to growth forecasts, testing investor sentiment. This roundup highlights key developments shaping business sentiment across global and Indian markets this week. OECD",
    },
    {
      id: 31,
      title: "Business News of the Week: 02 June – 08 June",
      date: "June 9, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/weekly-global-business-news-june-2024.png.webp",
      desc: "A weekly summary of policy shifts, corporate deals, and major global economic movements.",
    },
    {
      id: 32,
      title: "Business News of the Week: 29 May – 04 June",
      date: "June 6, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/06/global-business-news-weekly-highlights-2025.png.webp",
      desc: "Global markets navigated monetary, economic and geopolitical shifts between May 29 and June 4, 2025. This article spotlights six pivotal market and policy developments that investors must monitor. ECB Cuts",
    },
    {
      id: 33,
      title:
        "S&P 500 and Nasdaq Composite Face Steepest Drops Since 2022 Amid Trump’s Tariff Policies",
      date: "May 7, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/mintbyte-market-turbulence-investing.png.webp",
      desc: "The first quarter of 2025 proved chaotic for U.S. equities as investors grappled with mounting fears of economic instability and geopolitical headwinds. Escalating trade tensions following a fresh wave of",
    },
    {
      id: 34,
      title:
        "Navigating Market Turbulence: Understanding Stock Volatility Post-Fed Rate Decisions",
      date: "March 20, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/stock-volatility-fed-rate-banner.png.webp",
      desc: "Global financial markets remain highly volatile as investors react to shifting Federal Reserve policies and broader economic uncertainties. Stock prices fluctuate in response to interest rate decisions, trade restrictions, and",
    },
    {
      id: 35,
      title:
        "Indian Bonds Rally Ahead: Anticipated RBI Rate Cuts Drive 10-Year Yield to 6.25% by Year-End",
      date: "Marc 15, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/indian-bond-rally-yield-drop.png.webp",
      desc: "Indian government bonds are gaining traction among investors as anticipation builds around further interest rate cuts by the Reserve Bank of India (RBI). Market analysts expect these monetary policy adjustments",
    },
    {
      id: 36,
      title:
        "Navigating Economic Turbulence: Analyzing US Tariff Chaos, ECB Rate Cuts, and Global Trade",
      date: "March 13, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/economic-turbulence-investment-strategies.png.webp",
      desc: "Global markets face heightened uncertainty as new US tariffs disrupt international trade, central banks adjust monetary policies, and economic forecasts shift. Investors must navigate these complexities as shifting trade alliances,",
    },
    {
      id: 37,
      title:
        "BSE Shares Drop Over 6% Amid NSE Expiry Date Change: Insights and Future Outlook",
      date: "March 9, 2025",
      author: "Amit Tiwari",
      img: "https://mintbyte.com/wp-content/uploads/2025/05/bse-shares-drop-nse-expiry-shift.png.webp",
      desc: "The recent shift in the National Stock Exchange’s (NSE) weekly expiry date has created significant ripples in the market, particularly impacting BSE Ltd.",
    },
    {
      id: 38,
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
  return (
    <>
      <div className="w-full bg-[#090909] min-h-[100vh] ">
        <div className="w-full min-h-[100vh] overflow-hidden  rounded-b-[50%] pt-10 border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)]  ">
          <section className="w-full min-h-screen bg-[#090909] text-white pt-40 px-6 md:px-16">
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
    </>
  );
};

export default BlogSection;
