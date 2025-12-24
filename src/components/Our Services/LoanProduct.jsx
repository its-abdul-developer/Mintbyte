import React from "react";
import AllPagesTopContent from "../AllPagesTopContent";
import Footer from "../Footer/Footer";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const LoanProduct = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".loanHeading", {
      scrollTrigger: {
        trigger: ".loanHeading",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      duration: 1,
    });
    tl.fromTo(
      ".loanHeadBox",
      { x: "-100%", opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".loanHeadBox",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: { each: 0.5 },
      }
    );
    tl.to(".loanHeadImg", {
      scrollTrigger: {
        trigger: ".loanHeadImg",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 1,
    });
    tl.to(".animatedText6", {
      scrollTrigger: {
        trigger: ".animatedText6",
        start: "top 85%",
        end: "top 35%",
        // scrub: true,
      },
      textShadow:
        "6px 6px 10px rgba(255, 0, 0, 0.8), -6px -6px 10px rgba(0, 226, 57, 0.8)",
      opacity: 1,
      repeat: -1,
      repeatDelay: 0.2,
      duration: 0.1,
      yoyo: true,
    });

    tl.to(".loanImgDiv", {
      scrollTrigger: {
        trigger: ".loanImgDiv",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 1,
    });

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

    tl.to(".property", {
      scrollTrigger: {
        trigger: ".property",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".loanImgDiv2", {
      scrollTrigger: {
        trigger: ".loanImgDiv2",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 1,
    });

    tl.fromTo(
      ".loanHeadBox2",
      { x: "100%", opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".loanHeadBox2",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: { each: 0.5 },
      }
    );

    gsap.utils.toArray(".allLoanBoxImg").forEach((box) => {
      tl.to(box, {
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
        scale: 1,
        opacity: 1,
      });
    });
    gsap.utils.toArray(".allLoanBox").forEach((box) => {
      tl.to(box, {
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
        x: 0,
        opacity: 1,
        duration: 2,
      });
    });
    gsap.utils.toArray(".allLoanHeading").forEach((heading) => {
      tl.to(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },

        opacity: 1,
        duration: 1,
      });
    });
    
    gsap.utils.toArray(".subscribe").forEach((subscribe) => {
      tl.to(subscribe, {
        scrollTrigger: {
          trigger: subscribe,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 2,
      });
    });

  });

  return (
    <>
      <AllPagesTopContent
        title1="Loan Product "
        title2=""
        title3="Empower your"
        title4="Goals"
        flex="hidden"
        flex2="hidden"
        height="h-[115vh]"
        description="Fuel your aspirations with our diverse loan offerings, thoughtfully designed to match your unique needs and financial goals."
        homeVideo="/videos/video15.mp4"
      />
      <div className="w-full">
        <div className="w-full h-70 "></div>

        <div className="w-full">
          <div className="w-full  p-20 overflow-hidden  flex justify-between mt-10">
            <div className="w-1/2 h-full p-20 flex flex-col gap-10 items-start">
              <div className="overflow-hidden h-30 ">
                <h1 className="loanHeading text-6xl translate-y-[100%] font-bold mb-20">
                  Loans Against{" "}
                  <span className="text-[#33BC24]">Securities</span>
                </h1>
              </div>
              <div className="loanHeadBox w-full flex p-6 items-center gap-10 rounded-2xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan3.png"
                  alt=""
                />
                <div>
                  <h2 className="text-2xl font-bold">
                    Leverage Your Investments
                  </h2>
                  <p>
                    Borrow against your equity shares, mutual funds, or fixed
                    deposits.
                  </p>
                </div>
              </div>
              <div className="loanHeadBox w-full flex p-6 items-center gap-10 rounded-2xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white p-1"
                  src="/images/groups/loan4.png"
                  alt=""
                />
                <div>
                  <h2 className="text-2xl font-bold">Keep Ownership</h2>
                  <p>Retain ownership and benefit from market appreciation.</p>
                </div>
              </div>
              <div className="loanHeadBox w-full flex p-6 items-center gap-10 rounded-2xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white p-2"
                  src="/images/groups/loan5.png"
                  alt=""
                />
                <div>
                  <h2 className="text-2xl font-bold">Pay-as-Used</h2>
                  <p>Interest is charged only on the utilized amount.</p>
                </div>
              </div>
              <div className="loanHeadBox w-full flex p-6 items-center gap-10 rounded-2xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white p-2"
                  src="/images/groups/loan6.png"
                  alt=""
                />
                <div>
                  <h2 className="text-2xl font-bold">Liquidity Solution</h2>
                  <p>
                    Ideal For Managing liquidity without liquidating your
                    portfolio.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full  pl-25">
              <div className="loanHeadImg scale-[0.5] opacity-0 w-[90%] h-full rounded-3xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/groups/loan.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full  px-30 overflow-hidden  flex justify-between mt-10">
            <div className="w-[45%] h-full  pt-40 text-xl flex flex-col justify-center">
              <h1 className="text-6xl font-bold"></h1>
              <div class="row">
                <div class="col-12 ">
                  <h1 class="animatedText6 opacity-100 text-6xl font-bold [text-shadow:rgba(96,0,0,0.3)_2.26px_2.26px_3.76px,rgba(0,85,21,0.3)_-2.26px_-2.26px_3.76px]">
                    Home Loans
                  </h1>
                </div>
              </div>
              <p className="mt-10 w-[80%] animatedText6 opacity-100  [text-shadow:rgba(96,0,0,0.3)_2.26px_2.26px_3.76px,rgba(0,85,21,0.3)_-2.26px_-2.26px_3.76px]">
                Competitive interest rates for both new and resale properties.
                Flexible tenure options to suit your repayment capacity. Tax
                benefits on principal and interest repayments under Sections 80C
                and 24(b). Ideal For : Buying, constructing, or renovating your
                dream home.
              </p>
            </div>
            <div className="w-1/2  pl-25">
              <div className="loanImgDiv scale-[0.7] opacity-0 w-[90%] h-full rounded-3xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/groups/loan2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-50">
          <div className="overflow-hidden text-center">
            <h1 className="property text-6xl font-bold pb-3 translate-y-[100%]">
              <span className="text-[#33BC24]">Loan Against</span> Property
              (LAP)
            </h1>
          </div>
          <div className="w-full  p-20 overflow-hidden  flex justify-between mt-10">
            <div className="w-1/2 h-full  pl-25">
              <div className="loanImgDiv2 scale-[0.6] opacity-0 w-[90%] h-full rounded-3xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/groups/loan7.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 h-full px-20 flex flex-col gap-10 items-start">
              <div className="loanHeadBox2 w-full flex p-6 items-center gap-10 rounded-2xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <h2 className="text-2xl font-bold">
                    Personalized retirement savings goals
                  </h2>
                </div>
              </div>
              <div className="loanHeadBox2 w-full flex p-6 items-center gap-10 rounded-2xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white p-1"
                  src="/images/groups/loan9.png"
                  alt=""
                />
                <div>
                  <p>Inflation-adjusted future expense projections</p>
                </div>
              </div>
              <div className="loanHeadBox2 w-full flex p-6 items-center gap-10 rounded-2xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white p-2"
                  src="/images/groups/loan10.png"
                  alt=""
                />
                <div>
                  <p>
                    Flexible repayment options with high loan-to-value ratios.
                  </p>
                </div>
              </div>
              <div className="loanHeadBox2 w-full flex p-6 items-center gap-10 rounded-2xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white p-2"
                  src="/images/groups/loan11.png"
                  alt=""
                />
                <div>
                  <p>
                    Ideal For Funding significant expenses like weddings,
                    education, or medical emergencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100vh]  flex flex-col items-center py-15 px-40 ">
          <h1 className="font-bold text-7xl tracking-tight text-center"></h1>
          <div className="col-12 text-center">
            <h1 className="animatedText text-6xl font-bold translate-none rotate-none scale-none opacity-100 translate-0">
              All Loans
            </h1>
          </div>
          <div className="w-full h-[55vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <div className="allLoanBoxImg opacity-0 scale-[0.5] w-1/2 h-full p-5 ">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/groups/loan12.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 h-full px-20 flex flex-col gap-6 items-start overflow-hidden">
              <h1 className="allLoanHeading opacity-0 text-3xl font-bold mt-6">
                Personal Loans
              </h1>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>The quick approval process with minimal documentation.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>Unsecured loans requiring no collateral.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Flexible end-use for travel, weddings, or consolidating
                    debt.
                  </p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Ideal For : Meeting short-term financial needs with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[55vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <div className="w-1/2 h-full px-20 flex flex-col gap-6 items-start overflow-hidden">
              <h1 className="allLoanHeading opacity-0 text-3xl font-bold mt-6">
                Business Loans
              </h1>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>The quick approval process with minimal documentation.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>Unsecured loans requiring no collateral.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Flexible end-use for travel, weddings, or consolidating
                    debt.
                  </p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Ideal For : Meeting short-term financial needs with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="allLoanBoxImg opacity-0 scale-[0.5] w-1/2 h-full p-5 ">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/groups/loan13.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[55vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <div className="allLoanBoxImg opacity-0 scale-[0.5] w-1/2 h-full p-5 ">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/groups/loan14.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 h-full px-20 flex flex-col gap-6 items-start overflow-hidden">
              <h1 className="allLoanHeading opacity-0 text-3xl font-bold mt-6">
                Education Loans
              </h1>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>The quick approval process with minimal documentation.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>Unsecured loans requiring no collateral.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Flexible end-use for travel, weddings, or consolidating
                    debt.
                  </p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Ideal For : Meeting short-term financial needs with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[55vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <div className="w-1/2 h-full px-20 flex flex-col gap-6 items-start overflow-hidden">
              <h1 className="allLoanHeading opacity-0 text-3xl font-bold mt-6">
                Vehicle Loans
              </h1>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>The quick approval process with minimal documentation.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>Unsecured loans requiring no collateral.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Flexible end-use for travel, weddings, or consolidating
                    debt.
                  </p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Ideal For : Meeting short-term financial needs with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="allLoanBoxImg opacity-0 scale-[0.5] w-1/2 h-full p-5 ">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/groups/loan15.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[55vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <div className="allLoanBoxImg opacity-0 scale-[0.5] w-1/2 h-full p-5 ">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/groups/loan16.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 h-full px-20 flex flex-col gap-6 items-start overflow-hidden">
              <h1 className="allLoanHeading opacity-0 text-3xl font-bold mt-6">
                Gold Loans
              </h1>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>The quick approval process with minimal documentation.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>Unsecured loans requiring no collateral.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Flexible end-use for travel, weddings, or consolidating
                    debt.
                  </p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Ideal For : Meeting short-term financial needs with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[55vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <div className="w-1/2 h-full px-20 flex flex-col gap-6 items-start overflow-hidden">
              <h1 className="allLoanHeading opacity-0 text-3xl font-bold mt-6">
                Bridge Loans
              </h1>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>The quick approval process with minimal documentation.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>Unsecured loans requiring no collateral.</p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Flexible end-use for travel, weddings, or consolidating
                    debt.
                  </p>
                </div>
              </div>
              <div className="allLoanBox translate-x-[-100%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                <img
                  className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                  src="/images/groups/loan8.png"
                  alt=""
                />
                <div>
                  <p>
                    Ideal For : Meeting short-term financial needs with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="allLoanBoxImg opacity-0 scale-[0.5] w-1/2 h-full p-5 ">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/groups/loan17.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100vh] relative">
          <div className="w-full min-h-[160vh] transition-all ease-linear border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)] rounded-b-[50%] overflow-hidden px-20">
            <div className="px-20">
              <div className="w-full h-[55vh]  mt-10 rounded-2xl flex gap-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <div className="allLoanBoxImg opacity-0 scale-[0.5] w-1/2 h-full p-5 ">
                  <div className="w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                    <img
                      className="w-full h-full object-cover"
                      src="/images/groups/loan13.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-1/2 h-full px-20 flex flex-col gap-6 items-start overflow-hidden">
                  <h1 className="allLoanHeading opacity-0 text-3xl font-bold mt-6">
                    Agriculture & Rural Loans
                  </h1>
                  <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                    <img
                      className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                      src="/images/groups/loan8.png"
                      alt=""
                    />
                    <div>
                      <p>
                        The quick approval process with minimal documentation.
                      </p>
                    </div>
                  </div>
                  <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                    <img
                      className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                      src="/images/groups/loan8.png"
                      alt=""
                    />
                    <div>
                      <p>Unsecured loans requiring no collateral.</p>
                    </div>
                  </div>
                  <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                    <img
                      className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                      src="/images/groups/loan8.png"
                      alt=""
                    />
                    <div>
                      <p>
                        Flexible end-use for travel, weddings, or consolidating
                        debt.
                      </p>
                    </div>
                  </div>
                  <div className="allLoanBox translate-x-[70%] opacity-0 w-full flex p-4 items-center gap-10 rounded-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
                    <img
                      className="border h-12 border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-full bg-white"
                      src="/images/groups/loan8.png"
                      alt=""
                    />
                    <div>
                      <p>
                        Ideal For : Meeting short-term financial needs with
                        ease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10 ">
              <div className="subscribe  translate-y-[40%] opacity-0 w-full h-[30vh] relative bg-[#777777ed] rounded-xl px-10 flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold">
                    Partner with us to access the capital you require while
                  </h1>
                  <h1 className="text-4xl font-bold">
                    staying financially secure. Apply for a Tailored Loan
                  </h1>
                </div>
                <div className="">
                  <button className="px-12 py-[1.5vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer mr-20">
                    Contact us
                  </button>
                </div>
                <div className="subscribe  translate-y-[-40%] opacity-0 absolute w-[70%] h-40 bottom-[-25%] left-[15%] flex items-center justify-between p-10 rounded-xl border border-white/30  shadow-[0_8px_15px_5px_rgba(255,255,255,0.25)] ">
                  <h1 className="text-4xl font-bold">
                    Fix an
                    <span className="text-[#33BC24]"> Appointment</span> with us
                  </h1>
                  <button className="px-12 py-[1.5vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                    Book an Appointment
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-[45vh]">
              <div className=" subscribe translate-y-[-150%] opacity-0 absolute w-[70%] h-[20vh] border bottom-30 left-[15%] rounded-lg p-5 flex items-center">
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

export default LoanProduct;
