import React, { useState } from "react";
import AllPagesTopContent from "../components/AllPagesTopContent";
import { ChevronDown } from "lucide-react";
import FAQSection from "../components/Resources/FAQSection";
import Footer from "../components/Footer/Footer";
import { Search } from "lucide-react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Resources = () => {
  const faqs = [
    {
      question: "Is the entire Mint byte onboarding process online?",
      answer:
        "Yes, the entire setup is 100% digital, from verification to KYC to mandate authorization.",
    },
    {
      question:
        "How long does it take to complete the entire onboarding process?",
      answer:
        "Most users complete it in 10–15 minutes, but full activation (including KYC & mandate) may take 1–3 working days.",
    },
    {
      question: "Can I use Mint byte if I’m new to investing?",
      answer:
        "Absolutely. Mint byte is designed for first-time investors as well as experienced ones. The onboarding walks you through every step clearly.",
    },
  ];
  const faqs2 = [
    {
      question: "Why is PAN card verification necessary?",
      answer:
        "PAN is used to validate your identity and investment eligibility via SEBI’s centralized KYC registry.",
    },
    {
      question: "What if my PAN is not KYC-verified?",
      answer:
        "Mint byte will guide you through a paperless Video KYC, which includes uploading documents and recording a live verification video.",
    },
    {
      question: "Is Video KYC safe and legally valid?",
      answer:
        "Yes, Video KYC is SEBI and RBI compliant and fully secure. It is a legal alternative to in-person verification.",
    },
    {
      question: "Can I skip KYC and browse the app?",
      answer:
        "No, KYC is mandatory to activate your investment account and access any features.",
    },
    {
      question: "How long does KYC verification take?",
      answer: "The verification process typically takes 1–2 business days.",
    },
  ];
  const faqs3 = [
    {
      question: "What is UCC, and why do I need it?",
      answer:
        "UCC stands for Unique Client Code, assigned by the exchange (BSE STAR MF). It links you to the capital market infrastructure.",
    },
    {
      question: "Can I use a joint bank account?",
      answer:
        "Yes, but you must be one of the primary holders of that account. The name must match your KYC records.",
    },
  ];
  const faqs4 = [
    {
      question: "What is the BSE STAR MF email I receive?",
      answer:
        "One email to confirm your UCC registration Another to confirm your nominee registration Click the links to complete your onboarding.",
    },
    {
      question: "What if I miss clicking those email links?",
      answer:
        "Your onboarding will remain incomplete until these are confirmed. Check your inbox and spam folders promptly.",
    },

    {
      question: "Are these email links time-sensitive?",
      answer:
        "Yes, they usually expire within 48 hours. If expired, you can request a resend via the Mint byte app or support.",
    },
  ];
  const faqs5 = [
    {
      question: "What is an e-Mandate?",
      answer:
        "An e-Mandate allows Mint byte to auto-debit your account for investments - especially SIPs or one-click lumpsum orders.",
    },
    {
      question: "Can I use a mandate for multiple investments?",
      answer:
        "Yes, once set up, it works across all your SIPs and purchases within the set limit.",
    },

    {
      question:
        "What happens if I enter a lower mandate limit than required later?",
      answer:
        "Your SIP or order will fail if it exceeds the set mandate cap. Always keep a slightly higher buffer limit.",
    },
    {
      question: "What are the ways to register a mandate? ",
      answer:
        "You can choose any of these: Net Banking Debit Card Aadhaar e-sign with OTP",
    },
    {
      question: "How long does it take for the mandate to activate?",
      answer: "Mandates are typically approved within 1–3 working days.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  gsap.registerPlugin(ScrollTrigger);

  // Mutual Funds Tools
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".mutualDiv", {
      scrollTrigger: {
        trigger: ".mutualDiv",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".mutualHeading", {
      scrollTrigger: {
        trigger: ".mutualHeading",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".mutualPara", {
      scrollTrigger: {
        trigger: ".mutualPara",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".mutualParagraph", {
      scrollTrigger: {
        trigger: ".mutualParagraph",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".mutualImg", {
      scrollTrigger: {
        trigger: ".mutualImg",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 1,
    });
  });

  // Financial Calculators

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".financialDiv", {
      scrollTrigger: {
        trigger: ".financialDiv",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".financialHeading", {
      scrollTrigger: {
        trigger: ".financialHeading",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".financialPara", {
      scrollTrigger: {
        trigger: ".financialPara",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });

    tl.to(".financialParagraph", {
      scrollTrigger: {
        trigger: ".financialParagraph",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".financialImg", {
      scrollTrigger: {
        trigger: ".financialImg",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 1,
    });
  });

  // FAQs

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

    tl.to(".faqPara", {
      scrollTrigger: {
        trigger: ".faqPara",
        start: "top 70%", // Animation starts when the element enters the viewport
        end: "top 40%",
        scrub: true,
        // End point ensures it doesn't trigger prematurely
      },

      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".searchBox", {
      scrollTrigger: {
        trigger: ".searchBox",
        start: "top 70%", // Animation starts when the element enters the viewport
        end: "top 40%",
        scrub: true,
        // End point ensures it doesn't trigger prematurely
      },

      opacity: 1,
      duration: 1,
    });
    tl.to(".faqsHeading", {
      scrollTrigger: {
        trigger: ".faqsHeading",
        start: "top 70%", // Animation starts when the element enters the viewport
        end: "top 40%",
        scrub: true,
        // End point ensures it doesn't trigger prematurely
      },
      y: 0,
      opacity: 1,
      duration: 1,
    });
  });

  useGSAP(() => {
    gsap.utils.toArray(".resourcesBottom").forEach((section) => {
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
      {/* ---------- Hero Section ---------- */}
      <AllPagesTopContent
        title1="Invest with conviction"
        title2=""
        title3="Build Your"
        title4="Confidence"
        flex="hidden"
        flex2="hidden"
        height="h-[115vh]"
        description="Access intuitive calculators and tools to simplify investments and make informed financial decisions tailored to your goals."
        homeVideo="/videos/video7.mp4"
      />

      {/* ---------- Mutual Fund Tools ---------- */}
      <div className="w-full min-h-[100vh] pt-[20vw] px-[12vw]">
        <div className="mutualDiv translate-y-[-10%] opacity-0 w-full bg-[#77777721] pt-10 rounded-3xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
          <div className="overflow-hidden">
            <h1 className="mutualHeading font-bold text-7xl translate-y-[100%] opacity-0 tracking-tight text-center">
              Mutual Fund<span className="text-[#33BC24]"> Tools</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="mutualPara text-xl text-center translate-y-[100%] opacity-0 mt-5">
              Choose like a Strategist. Outsmart the Average. Invest with
              Intelligence.
            </p>
          </div>

          <div className=" w-full h-[70vh] flex flex-col lg:flex-row gap-10 px-10">
            <div className="mutualParagraph translate-y-[-8%] opacity-0 lg:w-1/2 w-full text-xl pt-10">
              <p>
                Cut through fund factsheets, guesswork and market clutter. Our
                Mutual Fund Tools are built for investors who want to go beyond
                surface-level numbers and align investments with long-term
                goals.
              </p>
              <p className="my-7">
                Whether you’re optimizing existing holdings or scouting for
                smarter bets – compare performance trends, risk, and expense
                ratios to make decisions based on real data.
              </p>
              <ul className="space-y-1">
                <li>✅ Side-by-side comparisons to remove ambiguity</li>
                <li>✅ Risk-return clarity tailored to your comfort zone</li>
                <li>✅ Instant visual insights — no deep digging</li>
                <li>✅ Decode hidden patterns across fund categories</li>
              </ul>
              <p className="mt-6">
                Built for brains, not bandwidth – These tools make your money
                work smarter, not harder.
              </p>

              <button className="px-6 py-[1.3vh] mt-10 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                Check Tools <i className="ri-arrow-right-long-fill"></i>
              </button>
            </div>

            <div className="mutualImg scale-[0.7] opacity-0 lg:w-1/2 pt-10 w-full rounded-3xl overflow-hidden">
              <img
                src="https://mintbyte.com/wp-content/uploads/2025/07/image-29.png.webp"
                className="w-full object-cover"
                alt="Mutual Fund Tools"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Financial Calculators ---------- */}
      <div className="w-full min-h-[100vh] pt-[8vw] px-[12vw]">
        <div className="financialDiv translate-y-[-10%] opacity-0 w-full bg-[#77777721] pt-10 rounded-3xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)]">
          <div className="overflow-hidden">
            <h1 className="financialHeading font-bold text-7xl translate-y-[100%] opacity-0 tracking-tight text-center">
              Financial<span className="text-[#33BC24]"> Calculators</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="financialPara text-xl text-center translate-y-[100%] opacity-0 mt-5">
              Crunch the Numbers. Predict the Future. Invest with Intent.
            </p>
          </div>

          <div className="w-full h-[70vh] flex flex-col lg:flex-row gap-10 px-10">
            <div className="financialParagraph translate-y-[-8%] opacity-0 lg:w-1/2 w-full text-xl pt-10">
              <p>
                When numbers are done right, decisions become smarter – Say
                goodbye to clunky spreadsheets. Our calculators translate
                complex math into actionable insights for your financial growth.
              </p>
              <p className="mb-7">
                Because behind every confident investor is a brilliant
                calculator. See your future before you invest in it.
              </p>
              <ul className="space-y-1">
                <li>✅ SIP & Lumpsum planners to shape your strategy</li>
                <li>✅ SWP and goal planners for milestones</li>
                <li>✅ Instant projections for cash flow visualization</li>
                <li>✅ Real-life scenarios — no Excel, no stress</li>
              </ul>

              <p className="mt-6">
                Because every number tells a story, we just help you read it
                better with our intuitive Financial Calculators.
              </p>

              <button className="px-6 py-[1.3vh] mt-10 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                Check Tools <i className="ri-arrow-right-long-fill"></i>
              </button>
            </div>

            <div className="financialImg scale-[0.7] opacity-0 lg:w-1/2 pt-10 w-full rounded-3xl overflow-hidden">
              <img
                src="https://mintbyte.com/wp-content/uploads/2025/07/image-30.png.webp"
                className="w-full object-cover"
                alt="Financial Calculators"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="faqs" className="w-full px-[8vw]">
        <div>
          <section className="w-full min-h-[50vh] bg-transparent flex flex-col items-center justify-center px-6 text-center">
            {/* Title */}

            <div className="row">
              <div className="col-12 text-center">
                <h1 className="animatedText text-4xl md:text-6xl mb-3 font-bold text-white translate-none rotate-none scale-none opacity-100 translate-0">
                  Frequently Asked{" "}
                  <span className="text-[#00FF66]">Questions (FAQs)</span>
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden">
              <p className="faqPara text-gray-400 translate-y-[100%] opacity-0 mb-6 text-sm md:text-xl mt-4">
                Quick answers to common queries about ThirtySix Studio services.
              </p>
            </div>

            {/* Search Box */}
            <div className="searchBox w-full relative opacity-0">
              <input
                type="text"
                placeholder="Search here!"
                className="w-1/2 py-4 pl-5    border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF66] shadow-[0_4px_20px_rgba(0,255,102,0.2)]"
              />
              <Search
                className="absolute right-[26%] top-1/2 -translate-y-1/2 text-gray-400"
                size={30}
              />
            </div>
          </section>
        </div>
        <div className="overflow-hidden">
          <h1 className="faqsHeading uppercase text-4xl translate-y-[100%] opacity-0 text-[#33BC24] font-bold">
            Onboarding
          </h1>
        </div>

        <FAQSection title="GENERAL SETUP" faqs={faqs}/>
        <FAQSection title="PAN & KYC VERIFICATION" faqs={faqs2} />
        <FAQSection title="PERSONAL & BANK DETAILS" faqs={faqs3} />
        <FAQSection title="EMAIL VERIFICATION & AUTHENTICATIONS" faqs={faqs4} />
        <FAQSection title="BANK MANDATE" faqs={faqs5} />
      </div>

      <div className="w-full h-[150vh]  z-10   relative">
        <div className="w-full h-full rounded-b-[50%] border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)]  overflow-hidden ">
          <div className="px-[8vw]">
            <FAQSection title="PAN & KYC VERIFICATION" faqs={faqs2} />
          </div>
          <div className="resourcesBottom translate-y-[35%] opacity-0 w-full h-[30vh] bg-[#77777787] mt-[12vw] px-30 flex items-center justify-between">
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
          <div className="resourcesBottom translate-y-[-40%] opacity-0 w-[58%] h-[24vh] rounded-2xl mt-[-2.5vw]  ml-[22vw]  p-8 flex items-center border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
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

export default Resources;
