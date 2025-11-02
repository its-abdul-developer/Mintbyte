import React from "react";
import AllPagesTopContent from "../AllPagesTopContent";
import Footer from "../Footer/Footer"
const Alternative = () => {
  return (
    <>
      <AllPagesTopContent
        title1="Alternative Investment"
        title2=""
        title3="Funds (AIF)"
        title4=""
        flex="hidden"
        flex2="hidden"
        height="h-[115vh]"
        description="At Mintbyte, our Alternative Investment Funds (AIFs) are designed to help sophisticated investors achieve exceptional returns. These funds use advanced strategies to outperform traditional investments potentially."
        homeVideo="/videos/video11.mp4"
      />

      <div className="w-full">
        <div className="w-full h-96 "></div>
        <div className="w-full h-20 mt-20 relative flex items-center justify-center">
          <h1 className="text-6xl font-bold">
            About <span className="text-[#33BC24]">AIF</span>
          </h1>
          <svg
            className=" absolute left-[56%] top-[-100%]  text-green-400"
            width="117"
            height="117"
            viewBox="0 0 117 117"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_600_8752)">
              <path
                d="M75.9227 86.8119C77.9638 88.0146 79.6918 88.8791 81.2175 90C82.0273 90.5967 83.0703 91.6383 83.0286 92.4336C82.9848 93.2617 81.9081 94.3352 81.0282 94.7561C78.4563 95.9904 75.7592 97.0314 73.069 97.974C72.4876 98.178 71.432 98.0854 70.9349 97.4509C70.3376 96.9282 71.5143 95.7428 72.0972 95.4202C74.3311 94.2087 76.6954 93.2108 79.2098 92.045C77.7772 91.2009 76.5706 90.5241 75.3811 89.7891C72.2058 87.8156 71.9888 85.6041 74.8928 83.2845C78.9978 79.9988 83.1946 76.8184 87.3556 73.5828C87.8572 73.1952 88.3335 72.7927 88.8173 72.3775C89.6406 71.8208 89.4296 71.6281 88.6416 71.8641C87.1312 72.3404 85.6156 72.7966 84.1052 73.273C81.4217 74.1171 78.7434 74.9813 76.0547 75.8052C75.448 75.9943 74.7646 76.0527 74.1751 76.1836C73.1371 76.4089 72.2259 75.7524 71.7869 75.1351C71.4143 74.6081 71.1507 73.8379 71.9066 72.7291C73.5161 70.4324 75.2956 68.2529 77.0803 66.0936C81.097 61.2188 85.1443 56.379 89.038 51.278C87.0423 52.2882 85.0212 53.2835 83.056 54.3288C78.7085 56.6346 74.4146 59.0234 70.0387 61.2613C68.5408 62.0354 66.8217 63.2428 65.1889 61.6658C63.6554 60.1815 64.6586 58.4499 65.2648 56.9284C67.1902 52.1534 69.2245 47.4256 71.2081 42.6679C71.4062 42.1868 71.5334 41.6811 71.8661 40.6816C69.0201 42.3522 66.4817 43.6746 64.1424 45.2679C59.2151 48.6156 54.3698 52.1141 49.4961 55.5447C46.2513 57.8342 44.4612 57.104 43.9777 53.1129C43.3652 48.1235 42.9265 43.0998 42.3945 38.0896C42.2937 37.1592 42.0922 36.2548 41.8433 34.793C41.2548 35.676 40.8799 36.1382 40.6266 36.6551C37.6984 42.5812 34.7828 48.5148 31.8598 54.461C31.0924 56.0242 30.5703 57.9539 28.5512 58.2501C26.4388 58.5597 25.5837 56.7066 24.538 55.3218C23.4565 53.8819 22.4303 52.4061 20.9832 51.0069C20.973 52.5893 20.9704 54.1591 20.9603 55.7415C20.9504 57.0336 21.0389 58.3326 20.9052 59.6031C20.8608 60.0552 20.2537 60.8247 19.9658 60.7916C19.448 60.7427 18.928 60.7267 18.5348 59.8289C18.3627 59.4542 18.2929 58.9349 18.2918 58.4731C18.2262 55.309 18.0749 52.1455 18.2264 48.9897C18.2771 48.0632 18.9935 46.7603 19.7503 46.4035C20.384 46.1108 21.8122 46.7303 22.4205 47.3791C23.9831 49.0171 25.2903 50.9146 26.6976 52.7002C27.1589 53.2795 27.6054 53.8842 28.2352 54.6994C28.9786 53.2928 29.5801 52.1271 30.2017 50.9563C33.4135 44.8386 36.6254 38.721 39.85 32.6108C40.0763 32.1976 40.3407 31.8069 40.6357 31.4512C41.6609 30.262 43.2329 30.2318 44.0033 31.591C44.7097 32.827 45.2637 34.2636 45.4567 35.6753C46.1593 40.8886 46.6882 46.1361 47.2774 51.368C47.3374 51.9329 47.4251 52.4798 47.5297 53.2588C51.0761 50.8053 54.3755 48.3942 57.7926 46.1891C61.8726 43.5548 66.0293 41.051 70.1987 38.5548C71.4646 37.7977 72.8584 36.6207 74.387 37.7946C75.9155 38.9686 75.4577 40.7312 74.9216 42.1916C73.2321 46.7981 71.3681 51.353 69.5823 55.9199C69.2878 56.6516 68.9859 57.3959 68.9538 58.4359C71.9175 56.9713 74.8812 55.5067 77.8397 54.022C82.1909 51.8549 86.5242 49.6602 90.8806 47.5132C91.9188 46.9977 93.0996 46.3271 94.1179 47.4395C95.1541 48.5795 94.6011 49.8079 93.8394 50.8108C90.7275 54.9037 87.5954 59.0018 84.3769 63.0147C81.7729 66.2455 79.0318 69.3613 76.4813 72.9652C78.6215 72.3476 80.7282 71.6418 82.8944 71.1249C85.6248 70.4622 88.3834 69.8674 91.1561 69.4516C92.003 69.3187 93.515 69.6802 93.7109 70.1884C93.9894 70.9332 93.6422 72.334 93.0411 72.9193C90.8222 75.0618 88.4229 77.0468 86.0079 78.9714C82.8688 81.5453 79.635 83.9609 75.9227 86.8119Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
        <div className="w-full h-[55vh] px-30 overflow-hidden  flex justify-between mt-10">
          <div className="w-1/2 h-full  pl-25">
            <div className="w-[90%] h-full rounded-3xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="/images/groups/aif.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-[45%] h-full  p-10 text-xl">
            <h2 className="text-5xl font-medium">
              Your Gateway to High-Performance Investing
            </h2>
            <p className="my-10">
              Alternative Investment Funds (AIFs) offer investors access to a
              diverse range of non-traditional investment opportunities beyond
              stocks and bonds, such as private equity, venture capital, and
              real estate. These funds aim for higher returns but carry higher
              risks. Key benefits include diversification, access to exclusive
              opportunities, and professional management. However, investors
              should be aware of the higher risks associated with AIFs,
              including potential capital loss, illiquidity, and the complexity
              of these investment vehicles.
            </p>

            <button className="px-8 py-[1.3vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Join Us
            </button>
          </div>
        </div>
        <div className="w-full p-20">
          <div className="text-center pt-20 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">Our AIFs Catogries</h1>

            <p className="text-center w-[40%] mt-5">
              We classify AIFs into three categories, each tailored to specific
              investor needs - Category I focuses on socially impactful
              investments, Category II covers a broad range of strategies, and
              Category III employs complex or risky strategies.
            </p>
          </div>
          <div className="w-full border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] p-10 rounded-3xl mt-15">
            <div className="flex items-center gap-8 mb-8">
              <h1 className="py-4 px-7 border-8 rounded-full w-fit font-bold text-6xl">
                1
              </h1>
              <h1 className="text-4xl font-medium">
                Growth-Oriented Ventures for Visionary Investors
              </h1>
            </div>
            <div className="w-full h-full  flex gap-10">
              <div className="w-1/2 h-full">
                <div className="w-full h-[50%] rounded-3xl ">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/groups/aif8.png"
                    alt=""
                  />
                </div>
                <div className="p-10">
                  <h2 className="text-3xl font-medium">
                    Why Choose Category I
                  </h2>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif2.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Capital Appreciation Invest in high-potential industries
                      driving the future economy.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif3.png"
                      alt=""
                    />
                    <p className="text-lg w-[70%]">
                      Government Incentives Benefit from tax exemptions & other
                      regulatory support to encourage sustainable growth
                      investments.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif4.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Impact Investing Align your financial goals with
                      meaningful societal contributions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full">
                <div className="p-10">
                  <h2 className="text-3xl font-medium">Key Investment Areas</h2>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif5.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Startups and early-stage ventures, including tech and
                      green energy innovations.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif6.png"
                      alt=""
                    />
                    <p className="text-lg w-[70%]">
                      Infrastructure and sustainable development projects offer
                      tangible, long-term returns.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif7.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Social ventures address critical societal needs, such as
                      healthcare and education.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[50%] rounded-3xl ">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/groups/aif9.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] p-10 rounded-3xl mt-15">
            <div className="flex items-center gap-8 mb-8">
              <h1 className="py-4 px-7 border-8 rounded-full w-fit font-bold text-6xl">
                2
              </h1>
              <h1 className="text-4xl font-medium">
                Balanced Strategies for Stability and Growth
              </h1>
            </div>
            <div className="w-full h-full  flex gap-10">
              <div className="w-1/2 h-full">
                <div className="w-full h-[50%] rounded-3xl ">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/groups/aif10.png"
                    alt=""
                  />
                </div>
                <div className="p-10">
                  <h2 className="text-3xl font-medium">
                    Why Choose Category II
                  </h2>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif2.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Diversified Returns: Leverage a mix of equity and debt
                      investments for steady and compounded growth.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif3.png"
                      alt=""
                    />
                    <p className="text-lg w-[70%]">
                      Active Fund Management: Benefit from expert fund managers
                      who optimize returns through research-driven decisions.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif4.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Resilient Investments: Enjoy relatively lower volatility
                      with a medium to long-term focus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full">
                <div className="p-10">
                  <h2 className="text-3xl font-medium">Key Investment Areas</h2>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif5.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Private equity investments in established companies with
                      robust growth potential.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif6.png"
                      alt=""
                    />
                    <p className="text-lg w-[70%]">
                      Debt funds offer consistent yields through structured
                      credit solutions.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif7.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Real estate projects in commercial and residential spaces
                      with promising ROI.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[50%] rounded-3xl ">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/groups/aif11.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] p-10 rounded-3xl mt-15">
            <div className="flex items-center gap-8 mb-8">
              <h1 className="py-4 px-7 border-8 rounded-full w-fit font-bold text-6xl">
                3
              </h1>
              <h1 className="text-4xl font-medium">
                High-Performance Strategies for Experienced Investors
              </h1>
            </div>
            <div className="w-full h-full  flex gap-10">
              <div className="w-1/2 h-full">
                <div className="w-full h-[50%] rounded-3xl ">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/groups/aif12.png"
                    alt=""
                  />
                </div>
                <div className="p-10">
                  <h2 className="text-3xl font-medium">
                    Why Choose Category III
                  </h2>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif2.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Enhanced Returns: Target above-market returns with
                      innovative and active trading strategies.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif3.png"
                      alt=""
                    />
                    <p className="text-lg w-[70%]">
                      Global Exposure: Gain access to international markets and
                      multi-asset investment opportunities.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif4.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Dynamic Adaptability: Maximize returns in volatile markets
                      through tactical rebalancing and cutting-edge analytics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full">
                <div className="p-10">
                  <h2 className="text-3xl font-medium">Key Investment Areas</h2>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif5.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Hedge funds employ derivatives, arbitrage, and
                      high-frequency trading.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif6.png"
                      alt=""
                    />
                    <p className="text-lg w-[70%]">
                      Multi-asset funds offering dynamic allocations across
                      global markets.
                    </p>
                  </div>
                  <div className="flex items-center gap-10 mt-6">
                    <img
                      className="px-5 py-5 bg-amber-400 rounded-full"
                      src="/images/groups/aif7.png"
                      alt=""
                    />
                    <p className="text-lg w-[60%]">
                      Opportunistic investments in distressed assets and
                      turnaround ventures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100vh] pt-20 text-center">
          <div className="w-full min-h-[180vh] py-20 transition-all ease-linear  border border-white/30  shadow-[0_8px_15px_-5px_rgba(255,255,255,0.25)] rounded-[50%]">
            <div className="w-full pt-20 flex flex-col items-center gap-8 justify-end text-center relative">
              <h1 className="text-7xl font-medium w-[35%] leading-[1.2]">
                Who Should <span className="text-[#33BC24]">Invest?</span>
                </h1>
           
              <p className="text-lg w-[40%]">
                These funds are suitable for experienced investors who are
                comfortable with higher levels of risk and are seeking
                potentially higher returns.
              </p>
            </div>
            <div className=" w-full h-[70vh] px-[4vw]">
              <div className="relative flex justify-center pt-30">
                <h1 className="text-7xl font-bold leading-[1.2]">
                  Here is <span className="text-[#33BC24]">why?</span>
                </h1>
                <svg
                  className=" absolute left-[59%] top-[25%]  text-green-400"
                  width="117"
                  height="117"
                  viewBox="0 0 117 117"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_600_8752)">
                    <path
                      d="M75.9227 86.8119C77.9638 88.0146 79.6918 88.8791 81.2175 90C82.0273 90.5967 83.0703 91.6383 83.0286 92.4336C82.9848 93.2617 81.9081 94.3352 81.0282 94.7561C78.4563 95.9904 75.7592 97.0314 73.069 97.974C72.4876 98.178 71.432 98.0854 70.9349 97.4509C70.3376 96.9282 71.5143 95.7428 72.0972 95.4202C74.3311 94.2087 76.6954 93.2108 79.2098 92.045C77.7772 91.2009 76.5706 90.5241 75.3811 89.7891C72.2058 87.8156 71.9888 85.6041 74.8928 83.2845C78.9978 79.9988 83.1946 76.8184 87.3556 73.5828C87.8572 73.1952 88.3335 72.7927 88.8173 72.3775C89.6406 71.8208 89.4296 71.6281 88.6416 71.8641C87.1312 72.3404 85.6156 72.7966 84.1052 73.273C81.4217 74.1171 78.7434 74.9813 76.0547 75.8052C75.448 75.9943 74.7646 76.0527 74.1751 76.1836C73.1371 76.4089 72.2259 75.7524 71.7869 75.1351C71.4143 74.6081 71.1507 73.8379 71.9066 72.7291C73.5161 70.4324 75.2956 68.2529 77.0803 66.0936C81.097 61.2188 85.1443 56.379 89.038 51.278C87.0423 52.2882 85.0212 53.2835 83.056 54.3288C78.7085 56.6346 74.4146 59.0234 70.0387 61.2613C68.5408 62.0354 66.8217 63.2428 65.1889 61.6658C63.6554 60.1815 64.6586 58.4499 65.2648 56.9284C67.1902 52.1534 69.2245 47.4256 71.2081 42.6679C71.4062 42.1868 71.5334 41.6811 71.8661 40.6816C69.0201 42.3522 66.4817 43.6746 64.1424 45.2679C59.2151 48.6156 54.3698 52.1141 49.4961 55.5447C46.2513 57.8342 44.4612 57.104 43.9777 53.1129C43.3652 48.1235 42.9265 43.0998 42.3945 38.0896C42.2937 37.1592 42.0922 36.2548 41.8433 34.793C41.2548 35.676 40.8799 36.1382 40.6266 36.6551C37.6984 42.5812 34.7828 48.5148 31.8598 54.461C31.0924 56.0242 30.5703 57.9539 28.5512 58.2501C26.4388 58.5597 25.5837 56.7066 24.538 55.3218C23.4565 53.8819 22.4303 52.4061 20.9832 51.0069C20.973 52.5893 20.9704 54.1591 20.9603 55.7415C20.9504 57.0336 21.0389 58.3326 20.9052 59.6031C20.8608 60.0552 20.2537 60.8247 19.9658 60.7916C19.448 60.7427 18.928 60.7267 18.5348 59.8289C18.3627 59.4542 18.2929 58.9349 18.2918 58.4731C18.2262 55.309 18.0749 52.1455 18.2264 48.9897C18.2771 48.0632 18.9935 46.7603 19.7503 46.4035C20.384 46.1108 21.8122 46.7303 22.4205 47.3791C23.9831 49.0171 25.2903 50.9146 26.6976 52.7002C27.1589 53.2795 27.6054 53.8842 28.2352 54.6994C28.9786 53.2928 29.5801 52.1271 30.2017 50.9563C33.4135 44.8386 36.6254 38.721 39.85 32.6108C40.0763 32.1976 40.3407 31.8069 40.6357 31.4512C41.6609 30.262 43.2329 30.2318 44.0033 31.591C44.7097 32.827 45.2637 34.2636 45.4567 35.6753C46.1593 40.8886 46.6882 46.1361 47.2774 51.368C47.3374 51.9329 47.4251 52.4798 47.5297 53.2588C51.0761 50.8053 54.3755 48.3942 57.7926 46.1891C61.8726 43.5548 66.0293 41.051 70.1987 38.5548C71.4646 37.7977 72.8584 36.6207 74.387 37.7946C75.9155 38.9686 75.4577 40.7312 74.9216 42.1916C73.2321 46.7981 71.3681 51.353 69.5823 55.9199C69.2878 56.6516 68.9859 57.3959 68.9538 58.4359C71.9175 56.9713 74.8812 55.5067 77.8397 54.022C82.1909 51.8549 86.5242 49.6602 90.8806 47.5132C91.9188 46.9977 93.0996 46.3271 94.1179 47.4395C95.1541 48.5795 94.6011 49.8079 93.8394 50.8108C90.7275 54.9037 87.5954 59.0018 84.3769 63.0147C81.7729 66.2455 79.0318 69.3613 76.4813 72.9652C78.6215 72.3476 80.7282 71.6418 82.8944 71.1249C85.6248 70.4622 88.3834 69.8674 91.1561 69.4516C92.003 69.3187 93.515 69.6802 93.7109 70.1884C93.9894 70.9332 93.6422 72.334 93.0411 72.9193C90.8222 75.0618 88.4229 77.0468 86.0079 78.9714C82.8688 81.5453 79.635 83.9609 75.9227 86.8119Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-full h-[40vh] px-30 mt-20  flex gap-10">
                <div className="w-1/2 h-full rounded-xl flex flex-col items-center justify-center gap-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                  <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center">
                    <img src="/images/groups/tick.png" alt="" />
                  </div>
                  <p className="text-lg mx-20 text-center">
                    Income is earned from dividends on stocks and interest on
                    bonds. A fund pays out nearly all income it receives over
                    the year to fund owners in the form of a distribution.
                  </p>
                </div>
                <div className="w-1/2 h-full rounded-xl flex flex-col items-center justify-center gap-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                  <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center">
                    <img src="/images/groups/tick.png" alt="" />
                  </div>
                  <p className="text-lg mx-20 text-center">
                    If the fund sells securities that have increased in price,
                    the fund has a Capital Gain. Most funds also pass on these
                    gains to investors in the form of distribution.
                  </p>
                </div>
                <div className="w-1/2 h-full rounded-xl flex flex-col items-center justify-center gap-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                  <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center">
                    <img src="/images/groups/tick.png" alt="" />
                  </div>
                  <p className="text-lg mx-20 text-center">
                    If fund holdings increase in price but are not sold by the
                    fund manager, the fund’s shares increase in price. You can
                    then sell your mutual fund shares for a profit.
                  </p>
                </div>
              </div>
              <button className="px-5 py-[1.2vh] mt-15 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                Get Started
              </button>
              <div className="w-full h-[30vh] mt-[3vw] relative bg-[#777777ed] rounded-xl px-20 flex items-center justify-between">
                <div>
                  <h1 className="text-5xl font-bold">
                    Elevate your wealth with expert portfolio management.
                  </h1>
                  <h1 className="text-5xl font-bold">
                    Contact us to explore our PMS solutions.
                  </h1>
                </div>
                <div className="">
                  <button className="px-12 py-[1.5vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-[45vh]">
              <div className=" absolute left-[15%] mt-[25vw] w-[70%] h-[20vh] border rounded-lg p-5 flex items-center">
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
                    *We respect your privacy. Your information is secure with
                    us.
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
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Alternative;
