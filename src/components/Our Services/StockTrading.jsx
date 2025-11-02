import React from "react";
import AllPagesTopContent from "../AllPagesTopContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
const StockTrading = () => {
  const data = [
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
    {
      img1: "/images/groups/customer.png",
      img2: "/images/groups/customer2.png",
      title: "The service was exceptional and seamless.",
      para: "  The service was exceptional and seamless. I am most impressed and satisfied with the professional manner in which this transaction was controlled &....",
      span: "Read more",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <AllPagesTopContent
        title1="Stock Trading"
        title2="Services"
        title3="Navigate Markets,"
        title4="Unlock Potential"
        flex="hidden"
        flex2="hidden"
        height="h-[115vh]"
        description="Mintbyte's Stock Trading Services empower you to navigate the complexities of the stock market and unlock its potential for profit."
        // homeDescription="hidden"
        homeVideo="/videos/video2.mp4"
      />
      <div className="w-full ">
        <div className="w-full h-96 "></div>
        <div className="w-full h-20 mt-20 relative flex items-center justify-center">
          <h1 className="text-6xl font-bold">
            What is <span className="text-[#33BC24]">Stock Trading</span>
          </h1>
          <svg
            className=" absolute left-[64%] top-[-68%]  text-green-400"
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
                src="/images/groups/stock.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-[45%] h-full  p-10 text-xl">
            <p>
              Stock trading involves buying and selling shares of publicly
              listed companies on a stock exchange, with the goal of profiting
              from price changes.
            </p>
            <p className="my-10">
              Approaches include intraday trading (same-day buying and selling),
              delivery-based trading (holding for long-term gains), and
              derivative trading (trading futures and options based on
              underlying stocks).
            </p>
            <p>
              Stock trading offers potential for high profits but also carries
              risks due to market volatility. Success requires research,
              analysis, and understanding market dynamics.
            </p>
            <button className="px-5 py-[2vh] mt-10 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Book an Appointment
            </button>
          </div>
        </div>
        <div className="w-full pb-10">
          <div className="text-center pt-20 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">
              Types of Stock Trading Services
            </h1>

            <p className="text-center w-[28%] mt-5">
              Mintbyte offers a range of stock trading services to cater to
              different investment styles and preferences:
            </p>
          </div>
          <div className="w-full h-[90vh] py-10 ">
            <div className="w-full h-[35vh] my-15 flex gap-10 justify-between px-40">
              <div className="w-1/2  h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img className="h-18" src="/images/groups/stock2.png" alt="" />
                <h2 className="text-xl font-medium my-4">Intraday Trading</h2>
                <p>
                  Capitalize on daily market movements for quick profits.
                  Requires active monitoring and quick decision-making.
                </p>
              </div>
              <div className="w-1/2  h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img className="h-18" src="/images/groups/stock3.png" alt="" />
                <h2 className="text-xl font-medium my-4">Equity Trading</h2>
                <p>
                  Buy and sell stocks across various sectors and market
                  capitalizations. Build a diversified portfolio for long-term
                  wealth creation.
                </p>
              </div>
              <div className="w-1/2 h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img className="h-18" src="/images/groups/stock4.png" alt="" />
                <h2 className="text-xl font-medium my-4">
                  Delivery-based Trading – Long Term Investments
                </h2>
                <p>
                  Invest in high-potential stocks for long-term growth. Suitable
                  for investors with a buy-and-hold approach.
                </p>
              </div>
            </div>
            <div className="w-full h-[35vh] flex gap-10 justify-between px-40">
              <div className="w-1/2 h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img className="h-18" src="/images/groups/stock5.png" alt="" />
                <h2 className="text-xl font-medium my-4">Derivative Trading</h2>
                <p>
                  Trade futures and options for hedging, speculation, or
                  leverage. Requires knowledge of derivatives markets and risk
                  management.
                </p>
              </div>
              <div className="w-1/2 h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img className="h-18" src="/images/groups/stock6.png" alt="" />
                <h2 className="text-xl font-medium my-4">
                  ETFs and Index Investments
                </h2>
                <p>
                  Invest in a basket of securities that track a specific index.
                  Achieve diversification with low costs and minimal hassle.
                </p>
              </div>
              <div className="w-1/2 h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img className="h-18" src="/images/groups/stock7.png" alt="" />
                <h2 className="text-xl font-medium my-4">IPO & FPO Services</h2>
                <p>
                  Participate in initial public offerings (IPOs) and follow-on
                  public offerings (FPOs). Invest in new and upcoming companies
                  with growth potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[100vh] pt-10">
          <div className="w-full min-h-[100vh] py-20 transition-all ease-linear  border-t border-white/30  shadow-[0_8px_15px_-5px_rgba(255,255,255,0.25)] rounded-t-[50%] overflow-hidden pt-25">
            <div className="w-full h-[35vh] flex flex-col items-center gap-8 justify-end text-center relative">
              <h1 className="text-7xl font-medium w-[40%] leading-[1.2]">
                Why Choose Our Stock
                <span className="text-[#33BC24]"> Trading Services</span>
              </h1>
              <svg
                className=" absolute left-[67%] top-[26%]  text-green-400"
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
            <div className="relative w-full h-[70vh] flex px-[4vw] py-30 gap-20 items-center justify-center">
              <div className="w-[40%] h-full p-4 pr-5 text-2xl font-medium">
                <div className="flex items-center mb-4 gap-3 h-20 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
                  <img
                    className="h-full"
                    src="/images/groups/mobilei1.png"
                    alt=""
                  />
                  <img
                    className="h-full"
                    src="/images/groups/mobilep1.png"
                    alt=""
                  />
                </div>
                <div className="flex items-center mb-4 gap-3 h-20 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
                  <img
                    className="h-full"
                    src="/images/groups/mobilei1.png"
                    alt=""
                  />
                  <img
                    className="h-full"
                    src="/images/groups/mobilep1.png"
                    alt=""
                  />
                </div>
                <div className="flex items-center mb-4 gap-3 h-20 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
                  <img
                    className="h-full"
                    src="/images/groups/mobilei1.png"
                    alt=""
                  />
                  <img
                    className="h-full"
                    src="/images/groups/mobilep1.png"
                    alt=""
                  />
                </div>
                <div className="flex items-center mb-4 gap-3 h-20 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
                  <img
                    className="h-full"
                    src="/images/groups/mobilei1.png"
                    alt=""
                  />
                  <img
                    className="h-full"
                    src="/images/groups/mobilep1.png"
                    alt=""
                  />
                </div>
                <div className="flex items-center mb-4 gap-3 h-20 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
                  <img
                    className="h-full"
                    src="/images/groups/mobilei1.png"
                    alt=""
                  />
                  <img
                    className="h-full"
                    src="/images/groups/mobilep1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className=" h-full">
                <img className=" " src="/images/groups/mutual.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[100vh] relative">
          <div className="w-full min-h-[100vh] transition-all ease-linear border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)] rounded-b-[50%] overflow-hidden pt-20 px-20">
            <div className=" pt-10 ">
              <div className="w-full h-[30vh] relative bg-[#77777787] rounded-xl px-30 flex items-center justify-between">
                <div>
                  <h1 className="text-5xl font-bold">
                    Start trading with Our Advanced Platform.
                  </h1>
                  <h1 className="text-5xl font-bold">Open an account now!</h1>
                </div>
                <div className="">
                  <button className="px-12 py-[1.5vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                    Contact Us
                  </button>
                </div>
                <div className="absolute w-[60%] h-40 bottom-[-25%] left-[25%] flex items-center justify-between p-10 rounded-xl border border-white/30  shadow-[0_8px_15px_5px_rgba(255,255,255,0.25)] ">
                  <h1 className="text-4xl font-bold">
                    Fix an
                    <span className="text-[#33BC24]"> Appointment</span> with us
                  </h1>
                  <button className="px-12 py-[1.5vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                    Book an Appointment
                  </button>
                </div>
              </div>
              <div className="text-center pt-50">
                <h1 className="text-5xl font-bold">
                  <span className="text-[#33BC24]">Trusted</span> by over
                </h1>
                <h1 className="text-5xl font-bold text-yellow-400">
                  25,000+ customers
                </h1>
                <p className="text-sm mt-5">
                  Don’t take our word for it. Here’s what other people are
                  saying about us…
                </p>
              </div>
              <div className="w-full rounded-t-lg  px-3 text-sm flex justify-between pt-6">
                <div className="w-70 h-18 px-2 py-2 bg-white rounded">
                  <img src="/images/groups/trust.png" alt="" />
                  <p className="text-sm mt-2 text-black tracking-tight">
                    4.8 OUT OF 5 BASED ON 700+ REVIEWS
                  </p>
                </div>
                <div className="">
                  <select
                    className="px-5 py-4 rounded  bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer"
                    id="city"
                    name="city"
                  >
                    <option value="Sort By">Sort By</option>
                    <option
                      onClick={() => {
                        console.log("hello");
                      }}
                      value="All Reviews"
                    >
                      All Reviews
                    </option>
                    <option value="Trustindex">Trustindex</option>
                    <option value="Apple Appstore">Apple Appstore</option>
                    <option value="Google Playstore">Google Playstore</option>
                  </select>
                </div>
              </div>
              <div className="w-full mx-auto pb-10">
                <div className="mt-20 ">
                  <Slider {...settings}>
                    {data.map((d, i) => (
                      <div
                        key={i}
                        className="hover:border hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all ease-linear  h-[25vh] bg-white/20 p-4 rounded-lg"
                      >
                        <div className="rounded-lg flex items-center justify-between h-12">
                          <img
                            src={d.img1}
                            alt={d.name}
                            className=" h-10 object-cover rounded-full"
                          />
                          <img
                            src={d.img2}
                            alt={d.name}
                            className="h-4 object-cover rounded-full"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center text-center p-4">
                          <p className="font-semibold text-xl">{d.title}</p>
                          <p className=" w-[66%]">
                            {d.para} <span>{d.span}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="text-center mt-15">
                  <button className="px-6 py-4 rounded-[50px] text-sm bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                    View all Testimonials <i class="ri-arrow-right-s-line"></i>{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-[45vh]">
              <div className="absolute w-[70%] h-[20vh] border bottom-40 left-[15%] rounded-lg p-5 flex items-center">
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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default StockTrading;

