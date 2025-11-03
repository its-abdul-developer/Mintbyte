import React, { useEffect } from "react";
import AllPagesTopContent from "../components/AllPagesTopContent";
import gsap from "gsap";
import { useRef } from "react";
import ChromaGrid from "../Reactbits/ChromaGrid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer/Footer";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Home = () => {
  const marqueeRef = useRef(null);
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -100,
        ease: "linear",
        duration: 15, // speed control (zyada number = slow)
        repeat: -1, // infinite loop
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite animation for "Our Partners" marquee
      gsap.to(".marquee-track", {
        xPercent: -100,
        ease: "linear",
        duration: 15,
        repeat: -1,
      });

      // Infinite animation for ChromaGrid section
      gsap.to("#cards .marquee-track", {
        xPercent: -100,
        ease: "linear",
        duration: 25, // slower = smoother effect
        repeat: -1,
      });
    }, marqueeRef1);

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite animation for "Our Partners" marquee
      gsap.to(".marquee-track", {
        xPercent: -100,
        ease: "linear",
        duration: 15,
        repeat: -1,
      });

      // Infinite animation for ChromaGrid section
      gsap.to("#cards .marquee-track", {
        xPercent: -100,
        ease: "linear",
        duration: 25, // slower = smoother effect
        repeat: -1,
      });
    }, marqueeRef2);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      image: "/images/groups/core1.webp",
      title: "PMS",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(to left, #38bdf8, #fb7185, #84cc16)",
    },
    {
      image: "/images/groups/core2.webp",
      title: "Estate Planing",
      borderColor: "#10B981",
      gradient: "linear-gradient(to left, #fb7185, #a21caf, #6366f1)",
    },
    {
      image: "/images/groups/core3.webp",
      title: "National Pension System",
      borderColor: "#10B981",
      gradient: "linear-gradient(to bottom, #db2777, #ef4444, #f97316)",
    },
    {
      image: "/images/groups/core4.webp",
      title: "Stock Trading",
      borderColor: "#10B981",
      gradient: "linear-gradient(to bottom left, #86efac, #fcd34d, #f9a8d4)",
    },
    {
      image: "/images/groups/core5.webp",
      title: "Mutual Funds",
      borderColor: "#10B981",
      gradient: "linear-gradient(to bottom left, #e879f9, #4ade80, #be123c)",
    },
    {
      image: "/images/groups/core6.webp",
      title: "Retirement Saving",
      borderColor: "#10B981",
      gradient:
        "radial-gradient(ellipse at bottom right, #9d174d, #d946ef, #f0abfc)",
    },
    {
      image: "/images/groups/core7.webp",
      title: "Aucillary Offerings",
      borderColor: "#10B981",
      gradient: "linear-gradient(to left, #6366f1, #9d174d, #9d174d)",
    },
    {
      image: "/images/groups/core8.webp",
      title: "Tax-Efficient Investment",
      borderColor: "#10B981",
      gradient:
        "radial-gradient(ellipse at top right, #106ee8, #0fc1a1, #90e0ab)",
    },
    {
      image: "/images/groups/core9.webp",
      title: "Insurance",
      borderColor: "#10B981",
      gradient: "linear-gradient(to left, #716f81, #b97a95, #f6ae99)",
    },
    {
      image: "/images/groups/core10.webp",
      title: "Loan Products",
      borderColor: "#10B981",
      gradient: "linear-gradient(to bottom left, #377d71, #fbc5c5, #fba1a1)",
    },
    {
      image: "/images/groups/core11.webp",
      title: "Alternate Investment",
      borderColor: "#10B981",
      gradient: "linear-gradient(to top, #51eaea, #ffdbc5, #ff9d76)",
    },
  ];

  const items2 = [
    {
      image: "/images/groups/invest1.webp",
      title1: "Home Loan EMI Calculator",
      title2: "Calculate Now",
      gradient: "linear-gradient(to left, #38bdf8, #fb7185, #84cc16)",
    },
    {
      image: "/images/groups/invest2.webp",
      title1: "SIP Calculator",
      title2: "Calculate Now",
      gradient: "linear-gradient(to bottom left, #86efac, #fcd34d, #f9a8d4)",
    },
    {
      image: "/images/groups/invest3.webp",
      title1: "SIP Step-Up Calculator",
      title2: "Calculate Now",
      gradient: "linear-gradient(to left, #716f81, #b97a95, #f6ae99)",
    },
    {
      image: "/images/groups/invest4.webp",
      title1: "Education Calculator",
      title2: "Calculate Now",
      gradient: "linear-gradient(to bottom left, #e879f9, #4ade80, #be123c)",
    },
    {
      image: "/images/groups/invest5.webp",
      title1: "Retirement Calculator",
      title2: "Calculate Now",
      gradient: "linear-gradient(to left, #fb7185, #a21caf, #6366f1)",
    },
    {
      image: "/images/groups/invest6.webp",
      title1: "Carorepati Calculator",
      title2: "Calculate Now",
      gradient: "linear-gradient(to left, #6366f1, #9d174d, #9d174d)",
    },
    {
      image: "/images/groups/invest7.webp",
      title1: "Goal Setting Calculator",
      title2: "Calculate Now",
      gradient:
        "radial-gradient(ellipse at bottom right, #9d174d, #d946ef, #f0abfc)",
    },
  ];

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

  const data2 = [
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

  // MarqueeRef and Ref1
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
  });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(marqueeRef.current, {
      scrollTrigger: {
        trigger: marqueeRef.current,
        start: "top 70%",
        end: "top 50%", // End point ensures it doesn't trigger prematurely
        toggleActions: "play none none reset", // Plays animation once and doesn't reset
        scrub: true,
      },

      opacity: 1,
      delay: 1.5,
      duration: 1,
    });

    tl.to(marqueeRef1.current, {
      scrollTrigger: {
        trigger: marqueeRef1.current,
        start: "top 70%",
        end: "top 50%", // End point ensures it doesn't trigger prematurely
        toggleActions: "play none none reset", // Plays animation once and doesn't reset
        scrub: true,
      },
      opacity: 1,
      delay: 1.5,
      duration: 1,
    });
  });

  // animatedText2
  useGSAP(() => {
    gsap.from(".animatedText2", {
      scrollTrigger: {
        trigger: ".animatedText2",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
      scale: 0.5,
      opacity: 0,
      duration: 2,
    });
  });
  //     Discover the mintbyte advantage
  useGSAP(() => {
    const animatedText = document.querySelector(".animatedText3");
    animatedText.innerHTML = animatedText.textContent
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    gsap.from(animatedText.querySelectorAll("span"), {
      scrollTrigger: {
        trigger: animatedText,
        start: "top 85%",
        end: "top 35%",
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.1,
    });
  });

  const discoverImg1 = useRef(null);
  const discoverImg2 = useRef(null);
  const discoverImg3 = useRef(null);
  const discoverImg4 = useRef(null);
  const discoverImg5 = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    const discoverImgRefs = [
      discoverImg1.current,
      discoverImg2.current,
      discoverImg3.current,
      discoverImg4.current,
      discoverImg5.current,
    ];
    tl.fromTo(
      btnRef.current,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        // duration: 0.6,
        ease: "power2",
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 75%",
          end: "top 35%",

          scrub: true,
        },
     
      }
    );

    gsap.set(discoverImgRefs, {
      x: (i) => (i % 2 === 0 ? "100%" : "-100%"), // alternate sides
      opacity: 0,
    });

    tl.to(discoverImgRefs, {
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power2.out",
      stagger: {
        each: 0.4, // small delay between each
      },
       scrollTrigger: {
          trigger: discoverImgRefs,
          start: "top 75%",
          end: "top 35%",

          scrub: 1.5,
        },
        defaults: { ease: "power3.out" },
    });

    tl.to(
      ".image-container",
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.inOut",
          scrollTrigger: {
          trigger: '.image-container',
          start: "top 75%",
          end: "top 35%",

          scrub: 1.5,
        },
        defaults: { ease: "power3.out" },
      },
      
      "-=1"
    );
  }, []);

  // Evaluate your Investment

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animatedText4",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
    });
    tl.from(".animatedText4", {
      rotationY: 180,
      opacity: 0,
      duration: 2,
    });

    tl.to(marqueeRef2.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
    });
  });

  // Our Mobile App
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".animatedText5", {
      delay: 3,
      skewX: 45,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".animatedText5",
        start: "top 75%",
        end: "top 35%",
        scrub: true,
      },
    });

    tl.to(".mobilePara", {
      y: 0,
      opacity: 1,
      delay: 1.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".mobilePara",
        start: "top 75%",
        end: "top 35%",
        scrub: true,
      },
    });

    tl.to(".mobileIphone1", {
      opacity: 1,
      delay: 1.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".mobileIphone1",
        start: "top 75%",
        end: "top 35%",
        scrub: true,
      },
    });
    tl.to(".mobileIphone2", {
      opacity: 1,
      delay: 1.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".mobileIphone2",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
    });
    tl.to(".mobileTextBox", {
      opacity: 1,
      delay: 1.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".mobileTextBox",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
    });
    tl.to(".mobileDownload", {
      y: 0,
      opacity: 1,
      delay: 1.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".mobileDownload",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
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
  });

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".customerHeading1", {
      scrollTrigger: {
        trigger: ".customerHeading1",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      // delay: 1,
      duration: 1,
    });

    tl.to(".customerHeading2", {
      scrollTrigger: {
        trigger: ".customerHeading2",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
      y: "0%",
      // delay: 1,
      duration: 1,
    });
  });

  // Global Standards
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".globalHeading", {
      scrollTrigger: {
        trigger: ".globalHeading",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
      x: 0,
      // delay: 1,
      duration: 1,
      ease: "linear",
    });

    tl.to(".globalPara", {
      x: 0,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: ".globalPara",
        start: "top 80%",
        end: "top 35%",
        scrub: true,
      },
    });
    tl.to(".global-ISO1", {
      y: "50%",
      opacity: 1,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: ".global-ISO1",
        start: "top 90%",
        end: "top 35%",
        scrub: true,
      },
    });
    tl.to(".global-ISO2", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: ".global-ISO2",
        start: "top 90%",
        end: "top 35%",
        scrub: true,
      },
    });
  });

  // Latest Insights
  useGSAP(() => {
    const tl = gsap.timeline();
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
    tl.to(".insightsSlider", {
      scrollTrigger: {
        trigger: ".insightsSlider",
        start: "top 85%",
        end: "top 35%",
        scrub: true,
      },
      x: 0,
      opacity: 1,
      delay: 1,
      duration: 2,
    });
    tl.to(".insightsBtn", {
      scrollTrigger: {
        trigger: ".insightsBtn",
        start: "top 85%",
        end: "top 35%",
        scrub: true,
      },
      opacity: 1,
      // delay: 1,
      duration: 0.4,
    });
    tl.to(".insightsBtn", {
      scrollTrigger: {
        trigger: ".insightsBtn",
        start: "top 85%",
        end: "top 35%",
        scrub: true,
      },
      opacity: 1,
      // delay: 1,
      duration: 0.4,
    });
    tl.to(".insightsSubscribe", {
      scrollTrigger: {
        trigger: ".insightsSubscribe",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      delay: 1,
      duration: 0.4,
    });
  });

  return (
    <>
      <AllPagesTopContent
        title1="Master"
        title2="the market"
        title3="Elevate"
        title4="Your Life"
        height="h-[115vh]"
        homeDescription="hidden"
        homeVideo="/videos/video1.mp4"
      />
      <div className="w-full ">
        <div className="w-full h-96 "></div>
        <div className="w-full h-20 mt-20 relative flex items-center justify-center">
          <div className="row w-100">
            <div className="col-12 text-center">
              <h1 className="animatedText text-6xl font-bold translate-none rotate-none scale-none opacity-100 translate-0">
                Our <span className="text-[#33BC24]">Partners</span>
              </h1>
            </div>
          </div>

          <svg
            className=" absolute left-[57%] top-[-68%]  text-green-400"
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
        <div
          ref={marqueeRef}
          className="w-full opacity-0  overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] mt-10"
        >
          {/* Track */}
          <div className="marquee-track flex w-[200%]">
            {/* Repeat images twice for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex w-full">
                <div className="w-full h-25 flex items-center  gap-10 px-5">
                  <img
                    className="h-1/2 object-cover"
                    src="/images/groups/group6.png"
                    alt=""
                  />
                </div>
                <div className="w-full h-25 flex items-center justify-center px-5">
                  <img
                    className="h-1/2 object-cover"
                    src="/images/groups/group7.png"
                    alt=""
                  />
                </div>
                <div className="w-full h-25 flex items-center justify-center px-5">
                  <img
                    className="h-1/2 object-cover"
                    src="/images/groups/group8.png"
                    alt=""
                  />
                </div>
                <div className="w-full h-25 flex items-center justify-center px-5">
                  <img
                    className="h-1/2 w-full object-cover"
                    src="/images/groups/group9.png"
                    alt=""
                  />
                </div>
                <div className="w-full h-25 flex items-center justify-center px-5">
                  <img
                    className="h-1/2 w-full object-cover"
                    src="/images/groups/group10.png"
                    alt=""
                  />
                </div>
                <div className="w-full h-25 flex items-center justify-center px-5">
                  <img
                    className="h-1/2 w-full object-cover"
                    src="/images/groups/group11.png"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-20  flex items-center justify-center mt-20">
          <div class="row w-100">
            <div class="col-12 text-center">
              <h1 class="animatedText2 text-6xl font-bold translate-none rotate-none scale-none opacity transform scale-[0.774] translate-x-0 translate-y-0">
                Core <span className="text-[#33BC24]">Services</span>
              </h1>
            </div>
          </div>
        </div>
        <div
          id="cards"
          ref={marqueeRef1}
          className="w-full overflow-hidden py-10 opacity-0"
        >
          <div className="marquee-track flex w-[200%] ">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex w-full mr-3 ">
                <ChromaGrid flex1="hidden" items={items} />
              </div>
            ))}
          </div>
        </div>

        <div className=" w-full min-h-[60vh] px-28 py-20 bg-[#7777772f]">
          <div className=" w-full flex justify-between ">
            <div class="row w-100">
              <div class="w-full text-center">
                <h1 class="animatedText3 font-bold text-6xl text-yellow-400">
                  <span class="translate-y-0 opacity-100 inline-block  ">
                    M
                  </span>
                  <span class="translate-y-0 opacity-100 inline-block  ">
                    i
                  </span>
                  <span class="translate-y-0 opacity-100 inline-block  ">
                    n
                  </span>
                  <span class="translate-y-0 opacity-100 inline-block  ">
                    t
                  </span>
                  <span class="translate-y-0 opacity-100 inline-block  ">
                    b
                  </span>
                  <span class="translate-y-[0.07px] opacity-[0.9985]   inline-block">
                    y
                  </span>
                  <span class="translate-y-[0.96px] opacity-[0.9808]   inline-block">
                    t
                  </span>
                  <span class="translate-y-[2.84px] opacity-[0.9431]   inline-block">
                    e
                  </span>
                  <span class="translate-y-[9.61px] opacity-[0.8077] inline-block">
                    &nbsp;
                  </span>
                  <span class="translate-y-[5.73px] opacity-[0.8854] inline-block">
                    V
                  </span>
                  <span class="translate-y-[14.5px] opacity-[0.71] inline-block">
                    a
                  </span>
                  <span class="translate-y-[20.38px] opacity-[0.5923] inline-block">
                    l
                  </span>
                  <span class="translate-y-[27.27px] opacity-[0.4546] inline-block">
                    u
                  </span>
                  <span class="translate-y-[35.15px] opacity-[0.2969] inline-block">
                    e
                  </span>
                  <span class="translate-y-[9.61px] opacity-[0.8077] inline-block">
                    &nbsp;
                  </span>

                  <span class="translate-y-[50px] opacity-0 inline-block">
                    P
                  </span>
                  <span class="translate-y-[50px] opacity-0 inline-block">
                    r
                  </span>
                  <span class="translate-y-[50px] opacity-0 inline-block">
                    o
                  </span>
                  <span class="translate-y-[50px] opacity-0 inline-block">
                    p
                  </span>
                  <span class="translate-y-[50px] opacity-0 inline-block">
                    o
                  </span>
                  <span class="translate-y-[50px] opacity-0 inline-block">
                    s
                  </span>
                  <span class="translate-y-[50px] opacity-0 inline-block">
                    i
                  </span>
                  <span class="translate-y-[50px] opacity-0 inline-block">
                    t
                  </span>
                  <span class="translate-y-[50px] opacity-0 inline-block">
                    i
                  </span>
                  <span class="translate-y-[50px] opacity-0 inline-block">
                    o
                  </span>
                  <span class="translate-y-[50px] opacity-0 inline-block">
                    n
                  </span>
                </h1>
              </div>
            </div>
            <div className=" overflow-hidden">
              <button
                ref={btnRef}
                className="discoverBtn px-5 py-4 translate-y-[100%] rounded-[50px]  bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer"
              >
                Discover the mintbyte advantage
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between pt-10">
            <div className="w-1/3 h-[60vh] ">
              <div className="discover-container w-full ">
                <div className="transition-all ease-linear duration-300 overflow-hidden">
                  <div
                    ref={discoverImg1}
                    className=" transition-all  translate-x-[100%] overflow-hidden ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]"
                  >
                    <img src="/images/groups/propo1.png" alt="" />
                  </div>
                </div>
                <div className="transition-all ease-linear duration-300 overflow-hidden">
                  <div
                    ref={discoverImg2}
                    className="w-78 h-20 mt-5 transition-all translate-x-[-100%] ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)]  border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]"
                  >
                    <img
                      className="w-full h-full"
                      src="/images/groups/propo2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="transition-all ease-linear duration-300 overflow-hidden">
                  <div
                    ref={discoverImg3}
                    className="w-80 h-20 mt-5  translate-x-[200%] transition-all ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]"
                  >
                    <img
                      className="w-full h-full"
                      src="/images/groups/propo3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="transition-all ease-linear duration-300 overflow-hidden">
                  <div
                    ref={discoverImg4}
                    className="w-95 h-20 mt-5 transition-all  translate-x-[-100%] ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)]  border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]"
                  >
                    <img
                      className="w-full h-full"
                      src="/images/groups/propo4.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="transition-all ease-linear duration-300 overflow-hidden">
                  <div
                    ref={discoverImg5}
                    className="w-75 h-20 mt-5  transition-all translate-x-[200%] ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)]  border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]"
                  >
                    <img
                      className="w-full h-full"
                      src="/images/groups/propo5.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="image-container opacity-0 scale-0 w-1/2 h-[58vh] mt-3 overflow-hidden rounded-2xl border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/01/Value-Proposition-1-1024x723.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100vh] px-2 ">
          <div className="w-full h-[65vh] pt-15">
            <div className="w-full h-22 text-center">
              <div class="row">
                <div class="col-12 text-center">
                  <h1 class="animatedText4 font-medium text-6xl translate-none rotate-none scale-none transform translate-x-0 translate-y-0 translate-z-0 [transform:rotateY(36.382deg)]">
                    Evaluate your{" "}
                    <span className="text-[#33BC24]">Investment</span>
                  </h1>
                </div>
              </div>
              <img
                className="ml-[68%] -mt-[4%]"
                src="/images/groups/group2.png"
                alt=""
              />
            </div>

            <div
              id="cards2"
              ref={marqueeRef2}
              className="w-full opacity-0 overflow-hidden mt-10"
            >
              <div className="marquee-track flex w-[200%]">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex w-full mr-3">
                    <ChromaGrid items2={items2} flex2="hidden" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mobile-container w-full min-h-[100vh] transition-all ease-linear hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-t-[50%] overflow-hidden">
            <div className="w-full h-[35vh] flex flex-col items-center gap-8 justify-end text-center pt-10">
              <div class="row">
                <div class="col-12 text-center">
                  <h1 class="animatedText5 font-medium text-6xl translate-none rotate-none scale-none [transform:translate3d(0,0,0)_skew(13.7955deg,0deg)]">
                    Our <span className="text-[#33BC24]">Mobile App</span>
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-center overflow-hidden">
                <p className="mobilePara w-[55%] opacity-0 translate-y-[100%]">
                  We’re thrilled to introduce the all-new Mintbyte App, your
                  one-stop solution for effortlessly tracking, investing, and
                  growing wealth. Watch your investments flourish with real-time
                  portfolio tracking and actionable insights.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[110vh] flex px-[12vw] gap-2">
              <div className="mobileIphone1 opacity-0 w-[25%] h-full mt-[14vw]">
                <img src="/images/groups/iPhone.png" alt="" />
              </div>
              <div className="mobileIphone2 opacity-0 w-[25%] h-full mt-[8vw]">
                <img src="/images/groups/iPhone1.png" alt="" />
              </div>
              <div className="mobileTextBox opacity-0 w-[45%] h-full p-4 pr-5 text-2xl font-medium mt-4">
                <h2 className="text-2xl">Experience these powerful features</h2>
                <div className="flex items-center mb-4 mt-4 gap-3 h-18 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
                <div className="flex items-center mb-4 gap-3 h-18 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
                <div className="flex items-center mb-4 gap-3 h-18 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
                <div className="flex items-center mb-4 gap-3 h-18 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
                <div className="flex items-center mb-4 gap-3 h-18 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
                <div className="flex items-center mb-4 gap-3 h-18 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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

              <div className="mobileDownload absolute translate-y-[50%] w-[80%] left-[10%] h-45 bg-[#1D1D1D] bottom-12 z-10 rounded-lg flex items-center justify-between pl-6 pr-20  border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <div>
                  <h1 className="text-3xl font-medium">
                    Ready to get started?
                  </h1>
                  <h1 className="text-3xl font-medium">
                    Download the MintByte App today!
                  </h1>
                </div>
                <div className="flex h-12 gap-4">
                  <img
                    className="h-full"
                    src="/images/groups/mobilei2.png"
                    alt=""
                  />
                  <img
                    className="h-full"
                    src="/images/groups/mobilei3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full pb-10">
              <div className="text-center pt-20">
                <div className="  overflow-hidden">
                  <h1 className="customerHeading1 text-5xl translate-y-[100%] font-bold">
                    <span className="text-[#33BC24]">Trusted</span> by over
                  </h1>
                </div>
                <div className=" overflow-hidden">
                  <h1 className="customerHeading2 text-5xl translate-y-[-100%]  font-bold text-yellow-400">
                    25,000+ customers
                  </h1>
                </div>
                <p className="text-sm mt-5">
                  Don’t take our word for it. Here’s what other people are
                  saying about us…
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-2">
          <div className="px-20 border border-white/20 ">
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
        </div>
        <div className="w-full min-h-[100vh] px-2 relative">
          <div className="w-full min-h-[100vh] transition-all ease-linear hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-b-[50%] overflow-hidden px-20">
            <div className="w-full h-85 border border-white/30   flex justify-between rounded-2xl mt-20 relative">
              <div className="w-1/3 flex flex-col justify-center pl-6">
                <div className=" overflow-hidden">
                  <h1 className="globalHeading text-5xl translate-x-[-100%] font-bold">
                    <span className="text-[#33BC24]">Global</span> Standards
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <p className="globalPara text-[12px] w-[80%] mt-3 translate-x-[200%]">
                    We are committed to delivering the highest quality services
                    and safeguarding your information. Our adherence to
                    international standards demonstrates our dedication to
                    excellence and security.
                  </p>
                </div>
              </div>
              <div className="w-1/2 h-full flex gap-10 pr-15">
                <div
                  className="global-ISO1 opacity-0 translate-y-[-50%] w-66 ml-30 h-full border-white/30 shadow-[0_4px_10px_rgba(255,255,255,0.4)]   flex flex-col items-center pt-6 rounded-xl mt-8
                "
                >
                  <img className="h-40" src="/images/groups/iso.png" alt="" />
                  <p className="text-[10px] text-center mt-4">
                    Our Information Security Management System (ISMS) is
                    certified to ISO 27001:2013, demonstrating our rigorous
                    approach to protecting your sensitive information. This
                    certification ensures that we have robust security measures
                    to safeguard your data and maintain its confidentiality,
                    integrity, and availability.
                  </p>
                </div>
                <div
                  className="global-ISO2 opacity-0 translate-y-[50%] w-65 h-85 border-white/30 shadow-[0_4px_10px_rgba(255,255,255,0.4)]   flex flex-col items-center pt-6 rounded-xl absolute right-[7%] top-[-10%]
                "
                >
                  <img className="h-40" src="/images/groups/iso.png" alt="" />
                  <p className="text-[10px] text-center mt-4">
                    Our Information Security Management System (ISMS) is
                    certified to ISO 27001:2013, demonstrating our rigorous
                    approach to protecting your sensitive information. This
                    certification ensures that we have robust security measures
                    to safeguard your data and maintain its confidentiality,
                    integrity, and availability.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full pt-30">
              <div class="row">
                <div class="col-12 text-center">
                  <h1 class="animatedText6 opacity-100 text-6xl font-bold [text-shadow:rgba(96,0,0,0.3)_2.26px_2.26px_3.76px,rgba(0,85,21,0.3)_-2.26px_-2.26px_3.76px]">
                    Latest <span className="text-[#33BC24]">Insights</span>
                  </h1>
                </div>
              </div>
              <div className="w-full mx-auto pb-10">
                <div className="insightsSlider opacity-0 translate-x-[100%] mt-20 ">
                  <Slider {...settings2}>
                    {data2.map((d, i) => (
                      <div
                        key={i}
                        className="hover:border hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all ease-linear  h-[50vh] bg-white/20 rounded-lg overflow-hidden"
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
                          <p className="text-[13px] w-[66%]">{d.paraa}</p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="text-center mt-15">
                  <button className="insightsBtn px-10 py-3 opacity-0 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                    Read All <i class="ri-arrow-right-s-line"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="insightsSubscribe w-full h-[45vh] translate-y-[-40%]">
              <div className="absolute w-[70%] h-[20vh] border bottom-25 left-[15%] rounded-lg p-5 flex items-center">
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

export default Home;
