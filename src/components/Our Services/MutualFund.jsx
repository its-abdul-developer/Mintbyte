import React, { useEffect, useRef } from "react";
import AllPagesTopContent from "../AllPagesTopContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const MutualFund = () => {
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
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".animatedText", {
      scrollTrigger: {
        trigger: ".animatedText",
        start: "top 85%", // Animation starts when the element enters the viewport
        end: "top 50%", // End point ensures it doesn't trigger prematurely
        toggleActions: "play none none reset", // Plays animation once and doesn't reset
      },

      y: -150, // Bounces in from above
      opacity: 0, // Fades in as it bounces
      ease: "bounce.out", // Bounce easing for a dynamic effect
      duration: 1.5, // Total animation duration
    });

    const tl = gsap.timeline();
    tl.to(".mutualImg", {
      scrollTrigger: {
        trigger: ".mutualImg",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 2,
    });
    tl.to(".mutualPara", {
      scrollTrigger: {
        trigger: ".mutualPara",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 2,
    });
    tl.to(".collectionHeading", {
      scrollTrigger: {
        trigger: ".collectionHeading",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 2,
    });
    tl.to(".collectionPara", {
      scrollTrigger: {
        trigger: ".collectionPara",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 2,
    });
    tl.to(".collectionCards", {
      scrollTrigger: {
        trigger: ".collectionCards",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 2,
    });
    tl.to(".bestMutual", {
      scrollTrigger: {
        trigger: ".bestMutual",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 2,
    });
    tl.to(".bestPara", {
      scrollTrigger: {
        trigger: ".bestPara",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 2,
    });
    tl.to(".buttons", {
      scrollTrigger: {
        trigger: ".buttons",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },

      opacity: 1,
      duration: 1,
    });
  });

  // Advantages

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".advantageHeading", {
      scrollTrigger: {
        trigger: ".advantageHeading",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 2,
    });

    gsap.utils.toArray(".advantageTrack").forEach((track) => {
      tl.to(track, {
        scrollTrigger: {
          trigger: track,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
        x: 0,
        opacity: 1,
        duration: 2,
      });
    });
    gsap.utils.toArray(".advantageTrack2").forEach((track) => {
      tl.to(track, {
        scrollTrigger: {
          trigger: track,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
        x: "50%",
        opacity: 1,
        duration: 2,
      });
    });

    tl.to(".advantageImg", {
      scrollTrigger: {
        trigger: ".advantageImg",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 2,
    });
    tl.to(".typesMutual", {
      scrollTrigger: {
        trigger: ".typesMutual",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      opacity: 1,
      duration: 2,
    });

    gsap.utils.toArray(".typesDiv").forEach((typesDiv) => {
      tl.to(typesDiv, {
        scrollTrigger: {
          trigger: typesDiv,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
        x: 0,
        y: 0,
        opacity: 1,
        duration: 2,
      });
    });

    tl.to(".platform", {
      scrollTrigger: {
        trigger: ".platform",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });

    tl.to(".customerHeading", {
      scrollTrigger: {
        trigger: ".customerHeading",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      // delay: 1,
      duration: 1,
    });

    tl.to(".customerPara", {
      scrollTrigger: {
        trigger: ".customerPara",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
      delay: 1,
      opacity: 1,
      duration: 1,
    });

    tl.to(".mobileReview", {
      y: 0,
      opacity: 1,
      delay: 1.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".mobileReview",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
    });
    tl.to(".mobileSelect", {
      y: "0%",
      opacity: 1,
      delay: 1.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".mobileSelect",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
    });
    tl.to(".mobileSlider", {
      y: "50%",
      opacity: 1,
      delay: 1.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".mobileSlider",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
    });
    tl.to(".mobileBtn", {
      y: 0,
      opacity: 1,
      delay: 1.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".mobileBtn",
        start: "top 80%",
        end: "top 35%",
        scrub: 1.5,
      },
    });
    tl.to(".Subscribe", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Subscribe",
        start: "top 80%",
        end: "top 35%",
        scrub: 1.5,
      },
    });

  });

  return (
    <>
      <AllPagesTopContent
        title1="Mutual Fund"
        title2="Gateway"
        title3="to Diversified"
        title4="Investment Success"
        flex="hidden"
        flex2="hidden"
        height="h-[115vh]"
        description="Mintbyte offers a wide range of Mutual Fund Services to help you achieve your financial goals."
        // homeDescription="hidden"
        homeVideo="/videos/video3.mp4"
      />
      <div className="w-full ">
        <div className="w-full h-96 "></div>
        <div className="w-full h-20 mt-20 relative flex items-center justify-center">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="animatedText text-6xl font-bold translate-none rotate-none scale-none opacity-100 translate-0">
                What is <span className="text-[#33BC24]">Mutual Fund</span>
              </h1>
            </div>
          </div>

          <svg
            className=" absolute left-[63%] top-[-68%]  text-green-400"
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
          <div className="mutualImg scale-[0.7] opacity-0 w-1/2 h-full  pl-25">
            <div className="w-[90%] h-full rounded-3xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="/images/groups/mutual.png"
                alt=""
              />
            </div>
          </div>
          <div className="mutualPara translate-y-[25%] opacity-0 w-[45%] h-full  p-10 text-xl">
            <p>
              A mutual fund is simply a financial intermediary that allows a
              group of investors to pool their money together with a
              predetermined investment objective.
            </p>
            <p className="my-10">
              As you probably know, mutual funds have become extremely popular
              over the last 20 years. What was once just another obscure
              financial instrument is now a part of our daily lives.{" "}
            </p>
            <p>
              In fact, to many people, investing means buying mutual funds.
              After all, it’s common knowledge that investing in mutual funds is
              (or at least should be) better than simply letting your cash waste
              away in a savings account.
            </p>
            <button className="px-5 py-[1vh] mt-10 rounded-[50px] text-sm bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Join us
            </button>
          </div>
        </div>
        <div className="w-full h-20  flex items-center justify-center mt-40">
          <div className="flex flex-col items-center gap-6">
            <div className="overflow-hidden w-[60%]">
              <h1 className="collectionHeading text-6xl font-bold translate-y-[100%] opacity-0 text-center">
                <span className="text-[#33BC24]">A mutual fund </span> is
                nothing more than a collection of stocks & bonds
              </h1>
            </div>
            <div className=" overflow-hidden">
              <p className="collectionPara translate-y-[100%] opacity-0 text-lg">
                You can make money from a mutual fund in three ways:
              </p>
            </div>
          </div>
        </div>
        <div className="collectionCards translate-y-[35%] opacity-0 w-full h-[40vh] px-30 mt-20  flex gap-10">
          <div className="w-1/2 h-full rounded-xl flex flex-col items-center justify-center gap-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center">
              <img src="/images/groups/tick.png" alt="" />
            </div>
            <p className="text-lg mx-20 text-center">
              Income is earned from dividends on stocks and interest on bonds. A
              fund pays out nearly all income it receives over the year to fund
              owners in the form of a distribution.
            </p>
          </div>
          <div className="w-1/2 h-full rounded-xl flex flex-col items-center justify-center gap-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center">
              <img src="/images/groups/tick.png" alt="" />
            </div>
            <p className="text-lg mx-20 text-center">
              If the fund sells securities that have increased in price, the
              fund has a Capital Gain. Most funds also pass on these gains to
              investors in the form of distribution.
            </p>
          </div>
          <div className="w-1/2 h-full rounded-xl flex flex-col items-center justify-center gap-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center">
              <img src="/images/groups/tick.png" alt="" />
            </div>
            <p className="text-lg mx-20 text-center">
              If fund holdings increase in price but are not sold by the fund
              manager, the fund’s shares increase in price. You can then sell
              your mutual fund shares for a profit.
            </p>
          </div>
        </div>

        <div className="w-full min-h-[100vh] pt-35">
          <div className="w-full pb-30 pt-15">
            <div className="w-full  flex flex-col items-center justify-center text-center relative">
              <div className=" overflow-hidden mb-5 w-[40%]">
                <h1 className="bestMutual text-6xl font-bold translate-y-[100%] opacity-0">
                  Discover the{" "}
                  <span className="text-[#33BC24]">best mutual</span> Fund tools
                </h1>
              </div>
              <svg
                className=" absolute left-[67%] top-[-50%]  text-green-400"
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
              <div className="overflow-hidden">
                <p className="bestPara translate-y-[100%] opacity-0">
                  Your go-to resource for mutual fund research and analysis to
                  optimize your financial growth.
                </p>
              </div>
            </div>
            <div className="buttons opacity-0 w-full  mt-20 flex flex-col leading-0 ">
              <div className="w-full h-22 px-30 text-center">
                <button className="px-8 py-[3vh] rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                  SIP Calculator
                </button>
                <button className="px-8 py-[3vh] mx-7 rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                  Past SIP Performance
                </button>
                <button className="px-8 py-[2vh] text-xl  rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                  Current NFOs
                </button>
                <button className="px-8 py-[3vh] mx-7 rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                  Recent Announced Dividends
                </button>
                <button className="px-8 py-[3vh] rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                  Fund Factsheets
                </button>
              </div>
              <div className="w-full h-22 px-30 text-center">
                <button className="px-8 py-[3vh] rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                  Latest NAV
                </button>
                <button className="px-8 py-[3vh] mx-5 rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                  Scheme Comparison
                </button>
                <button className="px-8 py-[3vh] rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                  SWP Performance
                </button>
                <button className="px-8 py-[3vh] mx-5 rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                  MF Activity
                </button>
                <button className="px-8 py-[3vh] rounded-[50px] border text-white hover:bg-[#0C1C15]  transition-all duration-300 cursor-pointer">
                  MF Performance
                </button>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[100vh] transition-all ease-linear hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] border-t border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)] rounded-t-[50%] overflow-hidden">
            <div className="w-full h-[35vh] flex flex-col items-center gap-8 justify-end text-center relative">
              <div className="overflow-hidden w-[40%]">
                <h1 className="advantageHeading text-7xl font-medium translate-y-[100%] opacity-0 leading-[1.2]">
                  <span className="text-[#33BC24]">Advantages</span> of Mutual
                  Fund
                </h1>
              </div>
              <svg
                className=" absolute left-[61%] top-[26%]  text-green-400"
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
            <div className="relative w-full h-[70vh] flex px-[4vw] pt-30 gap-20 items-center justify-center">
              <div className="w-[40%] h-full p-4 pr-5 text-2xl font-medium">
                <div className="advantageTrack  translate-x-[50%] opacity-0 flex items-center mb-4 gap-3 h-20 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
                <div className=" advantageTrack2 translate-x-[-50%] opacity-0 flex items-center mb-4 gap-3 h-20 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
                <div className="advantageTrack  translate-x-[50%] opacity-0 flex items-center mb-4 gap-3 h-20 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
                <div className=" advantageTrack2 translate-x-[-50%] opacity-0 flex items-center mb-4 gap-3 h-20 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
                <div className="advantageTrack  translate-x-[50%] opacity-0 flex items-center mb-4 gap-3 h-20 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
              <div className="advantageImg scale-[0.7] opacity-0 h-full flex items-center justify-end">
                <img className=" " src="/images/groups/mutual.png" alt="" />
              </div>
            </div>
            <div className="w-full pb-10">
              <div className="typesMutual opacity-0 overflow-hidden text-center pt-20 h-fit">
                <h1 className="text-5xl font-bold">Types of Mutual Funds</h1>

                <p className="text-sm mt-5">
                  Mutual Fund Services: A Gateway to Diversified Investment
                  Success
                </p>
              </div>
              <div className="w-full h-[90vh] py-10 ">
                <div className="w-full h-[35vh] my-15 flex gap-10 justify-between px-40">
                  <div className="typesDiv opacity-0 w-[35%] h-full  translate-x-[-70%] rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                    <img
                      className="h-18"
                      src="/images/groups/mutual3.png"
                      alt=""
                    />
                    <h2 className="text-xl font-medium my-4">
                      Equity Mutual Funds
                    </h2>
                    <p>
                      Invest in a diversified portfolio of stocks for long-term
                      capital appreciation. Choose from large-cap, mid-cap, and
                      small-cap funds to match your risk appetite. Benefit from
                      professional management and market expertise.
                    </p>
                  </div>
                  <div className="typesDiv opacity-0 w-[65%] h-full  translate-x-[70%] rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                    <img
                      className="h-18"
                      src="/images/groups/mutual4.png"
                      alt=""
                    />
                    <h2 className="text-xl font-medium my-4">
                      Debt Mutual Funds
                    </h2>
                    <p>
                      Earn steady income with lower risk compared to equity
                      funds. Invest in liquid funds for short-term needs or
                      corporate bonds for consistent yields. Maintain stability
                      in your portfolio with a focus on capital preservation.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[35vh] flex gap-10 justify-between px-40">
                  <div className="typesDiv opacity-0 w-[33%] h-full  translate-x-[-70%] rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                    <img
                      className="h-18"
                      src="/images/groups/mutual5.png"
                      alt=""
                    />
                    <h2 className="text-xl font-medium my-4">Hybrid Funds</h2>
                    <p>
                      Achieve a balance of growth and stability by combining
                      equity and debt investments. Choose from aggressive,
                      balanced, or conservative hybrid funds based on your risk
                      profile. Benefit from diversification and potential for
                      higher returns than pure debt funds.
                    </p>
                  </div>
                  <div className="typesDiv opacity-0 w-[33%] h-full translate-y-[60%]  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                    <img
                      className="h-18"
                      src="/images/groups/mutual6.png"
                      alt=""
                    />
                    <h2 className="text-xl font-medium my-4">
                      Thematic and Sectoral Funds
                    </h2>
                    <p>
                      Invest in specific sectors or themes like technology,
                      healthcare, or ESG. Capitalize on emerging trends and
                      high-growth opportunities. Align your investments with
                      your values and beliefs.
                    </p>
                  </div>
                  <div className="typesDiv opacity-0 w-[33%] h-full  translate-x-[70%] rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                    <img
                      className="h-18"
                      src="/images/groups/mutual7.png"
                      alt=""
                    />
                    <h2 className="text-xl font-medium my-4">
                      Smart Investment Strategies
                    </h2>
                    <p>
                      Systematic Investment Plans (SIPs): Invest regularly with
                      small amounts and benefit from compounding. Systematic
                      Withdrawal Plans (SWPs): Receive regular income from your
                      investments. Systematic Transfer Plans (STPs):
                      Strategically manage your portfolio by transferring funds
                      between schemes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[100vh] relative">
          <div className="w-full min-h-[100vh] transition-all ease-linear hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)] rounded-b-[50%] overflow-hidden px-20">
            <div className=" pt-10 ">
              <div className="platform translate-y-[30%] opacity-0 w-full h-[30vh] bg-[#77777787] rounded-xl px-30 flex items-center justify-between">
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
              <div className="w-full pb-10">
                <div className="text-center pt-20">
                  <div className="  overflow-hidden">
                    <h1 className="customerHeading text-5xl translate-y-[100%] font-bold">
                      <span className="text-[#33BC24]">Trusted</span> by over
                    </h1>
                  </div>
                  <div className=" overflow-hidden">
                    <h1 className="customerHeading text-5xl translate-y-[-110%]  font-bold text-yellow-400">
                      25,000+ customers
                    </h1>
                  </div>
                  <p className="customerPara text-sm mt-5 opacity-0">
                    Don’t take our word for it. Here’s what other people are
                    saying about us…
                  </p>
                </div>
              </div>
              <div className="w-full rounded-t-lg overflow-hidden  px-3 text-sm flex justify-between pt-6">
                <div className="mobileReview translate-y-[-150%] opacity-0 w-70 h-18 px-2 py-2 bg-white rounded">
                  <img src="/images/groups/trust.png" alt="" />
                  <p className="text-sm mt-2 text-black tracking-tight">
                    4.8 OUT OF 5 BASED ON 700+ REVIEWS
                  </p>
                </div>
                <div className="">
                  <select
                    className="mobileSelect px-5 py-4 rounded  bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] translate-y-[150%] opacity-0 transition-all duration-300 cursor-pointer"
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
                <div className="mobileSlider translate-y-[-50%] opacity-0 mt-20 ">
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
                <div className="text-center mt-15 overflow-hidden">
                  <button className="mobileBtn px-6 py-4 translate-y-[-100%] rounded-[50px] text-sm bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                    View all Testimonials <i class="ri-arrow-right-s-line"></i>{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-[45vh]">
              <div className="Subscribe translate-y-[-50%] opacity-0 absolute w-[70%] h-[20vh] border bottom-40 left-[15%] rounded-lg p-5 flex items-center">
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
export default MutualFund;
