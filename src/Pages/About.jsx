import React, { useState } from "react";
import AllPagesTopContent from "../components/AllPagesTopContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const data = [
    {
      title: "Cost-Efficiency",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Screenshot-2025-01-21-002427.png.webp",
    },
    {
      title: "Risk Management",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Group-1321316853.png",
    },
    {
      title: "Innovation & Expertise",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Screenshot-2025-01-20-185454.png.webp",
    },
    {
      title: "Tailored Portfolios",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Group-1321316850.png",
    },
    {
      title: "Dynamic Strategies",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Group-1321316851.png",
    },
  ];
  const data2 = [
    {
      title: "Zero-Fee Accounts for Non-Profits",
      para: "We provide no-fee wealth management to non-profits ensuring they achieve their missions, managing $1M+ in assets and saving non-profits $200K annually",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Group-1321316857.png",
    },

    {
      title: "Sustainable Investment Advocacy",
      para: "We curate portfolios focusing on renewable energy, sustainable agriculture, and companies driving social impact. Our investment portfolios have grown by 30% in the past yea",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Group-1321316858.png",
    },

    {
      title: "Women in Wealth Initiatives",
      para: "We empower women to achieve financial independence through mentorship and education. Over 100 women have gained confidence to navigate their financial journeys",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Screenshot-2025-01-21-003556.png.webp",
    },

    {
      title: "Blockchain for Transparency",
      para: "Partnering with non-profits, we plan to use blockchain to ensure transparency in donations. Our pilot project tracks $500,000, giving donors real-time visibility into their impact",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Screenshot-2025-01-21-003652.png.webp",
    },

    {
      title: "AI for Charitable Wealth Allocation",
      para: "We create AI-driven tools to help clients identify high-impact charitable opportunities, optimizing their contributions for maximum societal benefit",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Screenshot-2025-01-21-004000.png.webp",
    },

    {
      title: "Digital Asset Education",
      para: "We educate clients on blockchain, cryptocurrency, and NFTs, empowering them to invest responsibly in emerging digital assets",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Screenshot-2025-01-21-004036.png.webp",
    },

    {
      title: "Green Financing Solutions",
      para: "We offer eco-friendly financial products like green bonds and sustainable loans, helping clients support environmental conservation while achieving financial goals.",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Screenshot-2025-01-21-004103.png.webp",
    },

    {
      title: "Tech-Driven Financial Inclusion",
      para: "AI-powered tools make wealth management accessible to underserved communities, benefiting 500+ through financial literacy programs last year",
      img: "https://mintbyte.com/wp-content/uploads/2025/01/Group-1321316855.png",
    },
  ];

  const data3 = [
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
  });

  // Who Are We?
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".aboutImg", {
      scrollTrigger: {
        trigger: ".aboutImg",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },

      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "power2.in",
    });
    tl.to(".aboutAbsoluteImg1", {
      scrollTrigger: {
        trigger: ".aboutAbsoluteImg1",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },

      y: "50%",
      opacity: 1,
      delay: 1,
    });
    tl.to(".aboutAbsoluteImg2", {
      scrollTrigger: {
        trigger: ".aboutAbsoluteImg2",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },

      y: 0,
      opacity: 1,
      delay: 1,
    });
    tl.to(".whoPara", {
      scrollTrigger: {
        trigger: ".whoPara",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },

      opacity: 1,
      delay: 2,
      duration: 0.6,
      ease: "power2.in",
    });
  });

  // Why Choose Mintbyte?

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".animatedText2", {
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
    tl.to(".ourAdvantages", {
      scrollTrigger: {
        trigger: ".ourAdvantages",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      duration: 0.6,
    });
    tl.to(".whyPara", {
      scrollTrigger: {
        trigger: ".whyPara",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      duration: 0.6,
    });
    tl.to(".whySlider", {
      scrollTrigger: {
        trigger: ".whySlider",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      duration: 0.6,
    });
  });

  // fonder profile

  useGSAP(() => {
    const animatedText = document.querySelector(".animatedText3");
    animatedText.innerHTML = animatedText.textContent
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    const tl = gsap.timeline();

    tl.from(animatedText.querySelectorAll("span"), {
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

    tl.to(".founderImg", {
      scrollTrigger: {
        trigger: ".founderImg",
        start: "top 85%",
        end: "top 35%",
        scrub: true,
      },

      opacity: 1,
      duration: 0.6,
    });
    tl.to(".aboutFounder", {
      scrollTrigger: {
        trigger: ".aboutFounder",
        start: "top 85%",
        end: "top 35%",
        scrub: true,
      },

      opacity: 1,
      duration: 0.6,
    });
  });

  // Key Accomplishments
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".animatedText4", {
      scrollTrigger: {
        trigger: ".animatedText4",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },

      rotationY: 180,
      opacity: 0,
      duration: 2,
    });
    tl.to(".casePara", {
      scrollTrigger: {
        trigger: ".casePara",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },

      y: 0,
      duration: 0.6,
    });
    tl.fromTo(
      ".caseImgDiv1",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".caseImgDiv1",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    // Case 2
    tl.fromTo(
      ".caseImgDiv2",
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".caseImgDiv2",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    // Case 3
    tl.fromTo(
      ".caseImgDiv3",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".caseImgDiv3",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    // Case 4
    tl.fromTo(
      ".caseImgDiv4",
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".caseImgDiv4",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    tl.to(".caseBtn", {
      scrollTrigger: {
        trigger: ".caseBtn",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },

      opacity: 1,
      duration: 0.6,
    });
  });

  // Environmental,
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
    tl.to(".environmentalPara", {
      scrollTrigger: {
        trigger: ".environmentalPara",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      textShadow:
        "6px 6px 10px rgba(255, 0, 0, 0.8), -6px -6px 10px rgba(0, 226, 57, 0.8)",
      duration: 0.1,
    });
    tl.to(".environmentalImg", {
      scrollTrigger: {
        trigger: ".environmentalImg",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
      opacity: 1,
      scale: 1,
      duration: 0.6,
    });
    tl.to(".environmentalSlider", {
      scrollTrigger: {
        trigger: ".environmentalSlider",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
      y: 0,
      duration: 0.6,
    });
  });

  // Careers

  useGSAP(() => {
    gsap.from(".animatedText1", {
      scrollTrigger: {
        trigger: ".animatedText1",
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
    tl.to(".careerPara", {
      scrollTrigger: {
        trigger: ".careerPara",
        start: "top 85%", // Animation starts when the element enters the viewport
        end: "top 50%", // End point ensures it doesn't trigger prematurely
        scrub: true,
      },

      y: 0,
      duration: 1,
      stagger: {
        each: 0.3,
      },
    });
    tl.to(".careerTrackImg", {
      scrollTrigger: {
        trigger: ".careerTrackImg",
        start: "top 70%", // Animation starts when the element enters the viewport
        end: "top 50%", // End point ensures it doesn't trigger prematurely
        scrub: true,
      },
      x: 0,
      opacity: 1,

      duration: 2,
      stagger: {
        each: 0.3,
      },
    });
    tl.to(".careerImg", {
      scrollTrigger: {
        trigger: ".careerImg",
        start: "top 85%", // Animation starts when the element enters the viewport
        end: "top 50%", // End point ensures it doesn't trigger prematurely
        scrub: true,
      },

      opacity: 1,
      scale: 1,
      duration: 1,
    });
  });

  // Job Opportunities

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".animatedTextt2", {
      scrollTrigger: {
        trigger: ".animatedTextt2",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
      scale: 0.5,
      opacity: 0,
      duration: 2,
    });
    tl.to(".jobPara", {
      scrollTrigger: {
        trigger: ".jobPara",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },

      y: 0,
      duration: 1,
    });
    tl.to(".jobForm", {
      scrollTrigger: {
        trigger: ".jobForm",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },

      x: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(".jobTrackImg", {
      scrollTrigger: {
        trigger: ".jobTrackImg",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },

      x: 0,
      opacity: 1,
      duration: 1,
    });
  });

  // Trusted by over
  // 25,000+ customers

  useGSAP(() => {
    const tl = gsap.timeline();
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

      tl.to(".customerSubscribe", {
      scrollTrigger: {
        trigger: ".customerSubscribe",
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
        title1="Financial Growth"
        title2=""
        title3="with"
        title4="Expertise"
        flex="hidden"
        height="h-[115vh]"
        description="At Mintbyte, we're not just portfolio managers—we're your partners in navigating the complexities of the financial world to achieve lasting success. "
        homeVideo="/videos/video2.mp4"
      />
      <div className="w-full">
        <div
          id="who-we-are"
          className=" w-full h-[90vh] relative flex items-end justify-center pb-15"
        >
          <div className="row w-100">
            <div className="col-12 text-center">
              <h1 className="animatedText text-6xl font-bold translate-none rotate-none scale-none opacity-100 translate-0">
                Who <span className="text-[#33BC24]">Are We?</span>
              </h1>
            </div>
          </div>

          <svg
            className=" absolute left-[60%] top-[70%]  text-green-400"
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
        <div className="w-full  flex gap-22 px-35 pb-36">
          <div className="w-[40%] h-[46vh]  relative">
            <div className="aboutAbsoluteImg1 absolute z-1 translate-y-[-50%] opacity-0 right-[-10%] w-[10vw] h-[10vw] p-1.5 rounded-lg border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <div className="w-full h-[60%] rounded-lg overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="https://mintbyte.com/wp-content/uploads/2025/01/image-1-9.png.webp"
                  alt=""
                />
              </div>
              <h2 className="text-[16px] font-medium mt-1">Our Vision</h2>
              <p className="text-[11px]">
                Empowering Financial Success Through Innovation & Technology.
              </p>
            </div>
            <div className="aboutAbsoluteImg2 absolute z-1 translate-y-[50%] opacity-0 left-[1%] top-[75%] w-[10vw] h-[10vw] p-1.5 rounded-lg border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <div className="w-full h-[60%] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://mintbyte.com/wp-content/uploads/2025/01/image-14.png.webp"
                  alt=""
                />
              </div>
              <h2 className="text-[16px] font-medium mt-1">Our mission</h2>
              <p className="text-[11px]">
                Empowering Financial Success Through Innovation & Technology.
              </p>
            </div>
            <div className="aboutImg opacity-0 scale-[0.8] w-full h-full  rounded-2xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/01/Amit_Tiwari_Generate_an_image_of_modern_Indian_finance_profess_49817cc8-3c8b-4595-84e9-f5f0b99edff2-1024x845.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="whoPara opacity-0 w-[60%] h-full p-10">
            <h2 className="text-3xl font-medium">About Us</h2>
            <p className="mt-5 text-lg">
              At Mintbyte, we're not just portfolio managers—we're your partners
              in navigating the complexities of the financial world to achieve
              lasting success.
            </p>
            <p className="mt-5 text-lg">
              Our team of seasoned financial experts leverages cutting-edge
              technology and data-driven insights to deliver personalized
              investment strategies that align with your unique financial goals
              and risk tolerance.{" "}
            </p>
            <p className="my-5 text-lg">
              We deliver bespoke solutions for NRIs, HNIs, UHNIs, Family
              Offices, MNCs, SMEs, NGOs, Women Investors, Indian Youth and
              families, and retirees to help them confidently build and protect
              their wealth. Our commitment to transparency, integrity, and
              client-centricity sets us apart as a trusted financial partner.
            </p>
            <button className="px-6 py-[1.3vh] rounded-[50px] text-sm bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              Join us
            </button>
          </div>
        </div>
        <div id="why-choose-us" className="w-full bg-[#7777772f]">
          <div className="w-full h-[30vh] flex flex-col items-center justify-center gap-4">
            <div class="col-12 text-center">
              <h1 class="animatedText2 text-6xl font-bold translate-none rotate-none scale-none opacity transform scale-[0.774] translate-x-0 translate-y-0">
                Why Choose <span className="text-[#33BC24]">Mintbyte</span>
              </h1>
            </div>

            <div className="w-fit overflow-hidden ">
              <h2 className="ourAdvantages text-3xl translate-y-[100%] font-medium">
                Our Advantages
              </h2>
            </div>
            <div className=" overflow-hidden w-[25%]">
              <p className="whyPara text-xl translate-y-[100%]  text-center">
                At Mintbyte, you will get all the financial world benefits to
                achieve lasting success.
              </p>
            </div>
          </div>
          <div className="whySlider w-full  translate-y-[-25%] mx-auto pb-20 px-25">
            <div className="mt-10 ">
              <Slider {...settings}>
                {data.map((d, i) => (
                  <div
                    key={i}
                    className="hover:border hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all ease-linear  h-[30vh] bg-white/20 rounded-lg overflow-hidden cursor-pointer"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <img
                        src={d.img}
                        alt={d.name}
                        className=" h-20 mb-5  object-cover"
                      />

                      <p className=" text-lg">{d.title}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div
          id="founder's-profile"
          className="bg-[url('/images/groups/fonder.png')] bg-cover bg-no-repeat bg-center relative w-full p-25 px-40"
        >
          <div class="row">
            <div class="w-full">
              <h1 class="animatedText3 font-bold text-6xl text-yellow-400">
                <span class="translate-y-0 opacity-100 inline-block  ">F</span>
                <span class="translate-y-0 opacity-100 inline-block  ">o</span>
                <span class="translate-y-0 opacity-100 inline-block  ">u</span>
                <span class="translate-y-0 opacity-100 inline-block  ">n</span>
                <span class="translate-y-0 opacity-100 inline-block  ">d</span>
                <span class="translate-y-[0.07px] opacity-[0.9985]   inline-block">
                  e
                </span>
                <span class="translate-y-[0.96px] opacity-[0.9808]   inline-block">
                  r'
                </span>
                <span class="translate-y-[2.84px] opacity-[0.9431]   inline-block">
                  s
                </span>
                <span class="translate-y-[9.61px] opacity-[0.8077] inline-block">
                  &nbsp;
                </span>
                <span class="translate-y-[5.73px] opacity-[0.8854] inline-block">
                  I
                </span>
                <span class="translate-y-[14.5px] opacity-[0.71] inline-block">
                  n
                </span>
                <span class="translate-y-[20.38px] opacity-[0.5923] inline-block">
                  t
                </span>
                <span class="translate-y-[27.27px] opacity-[0.4546] inline-block">
                  r
                </span>
                <span class="translate-y-[35.15px] opacity-[0.2969] inline-block">
                  o
                </span>
                <span class="translate-y-[9.61px] opacity-[0.8077] inline-block">
                  d
                </span>

                <span class="translate-y-[50px] opacity-0 inline-block">u</span>
                <span class="translate-y-[50px] opacity-0 inline-block">c</span>
                <span class="translate-y-[50px] opacity-0 inline-block">t</span>
                <span class="translate-y-[50px] opacity-0 inline-block">i</span>
                <span class="translate-y-[50px] opacity-0 inline-block">o</span>
                <span class="translate-y-[50px] opacity-0 inline-block">n</span>
              </h1>
            </div>
          </div>

          <img
            className="founderImg opacity-0 mt-20"
            src="/images/groups/fonder2.png"
            alt=""
          />
          <div className="aboutFounder opacity-0 absolute top-[50%] left-[36%] w-[45%] p-12 bg-[#FFD921] text-black">
            <h1 className="text-3xl font-semibold">Founder</h1>
            <p className="text-xl mt-6 ">
              Amit Tiwari is a <b>dynamic</b> and <b>innovative leader</b> in
              the <b>financial services industry,</b> with a distinguished
              career in <b>wealth management, investment strategy,</b> and{" "}
              <b>technological innovation.</b>
            </p>
            <p className="text-xl mt-6 ">
              His extensive experience in <b>finance,</b> combined with his
              forward-thinking approach to <b>leveraging technology, </b>has
              been instrumental in shaping{" "}
              <b>Mintbyte's client-centric approach</b> and
              <b>commitment to excellence.</b>
            </p>
          </div>
        </div>
        <div id="case-studies" className="w-full pb-20">
          <div className="h-80 flex flex-col items-center justify-center">
            <div class="row">
              <div class="col-12 text-center">
                <h1 class="animatedText4 font-bold text-6xl translate-none rotate-none scale-none transform translate-x-0 translate-y-0 translate-z-0 [transform:rotateY(36.382deg)]">
                  Key <span className="text-[#33BC24]">Accomplishments</span>
                </h1>
              </div>
            </div>
            <div className="w-[50%] text-center overflow-hidden">
              <p className="casePara text-lg mt-5 translate-y-[100%]">
                Amit’s vision and expertise drive Mintbyte’s mission to empower
                investors and provide them with the tools and strategies they
                need to achieve lasting financial well-being.
              </p>
            </div>
          </div>
          <div className="w-full  px-25 ">
            <div className="flex gap-10 w-full h-full pb-20">
              <div className="caseImgDiv1  w-1/2 h-full rounded-2xl overflow-hidden transition-all ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] pb-10">
                <div className="w-full h-[80%]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://mintbyte.com/wp-content/uploads/2025/03/pic4.jpg.webp"
                    alt=""
                  />
                </div>
                <h2 className="text-center text-3xl mt-6">
                  Pioneering Digital Transformation
                </h2>
              </div>
              <div className="caseImgDiv2  w-1/2 h-full rounded-2xl overflow-hidden transition-all ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] pb-10">
                <div className="w-full h-[80%]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://mintbyte.com/wp-content/uploads/2025/03/pic2.jpg.webp"
                    alt=""
                  />
                </div>
                <h2 className="text-center text-3xl mt-6">
                  Expertise in Intelligent Automation
                </h2>
              </div>
              <div className="caseImgDiv3 w-1/2 h-full rounded-2xl overflow-hidden transition-all ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] pb-10">
                <div className="w-full h-[80%]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://mintbyte.com/wp-content/uploads/2025/03/pic1.jpg.webp"
                    alt=""
                  />
                </div>
                <h2 className="text-center ml-4 text-3xl mt-6">
                  Strategic Investment Acumen
                </h2>
              </div>
              <div className="caseImgDiv4  w-1/2 h-full rounded-2xl overflow-hidden transition-all ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] pb-10">
                <div className="w-full h-[80%]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://mintbyte.com/wp-content/uploads/2025/03/pic3.jpg.webp"
                    alt=""
                  />
                </div>
                <h2 className="text-center text-3xl mt-6">
                  Commitment to Client Success
                </h2>
              </div>
            </div>
            <button className="caseBtn opacity-0 px-5 py-3 rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer ml-[50%] mb-20">
              Learn more
            </button>
          </div>
          <div id="environmental" className="w-full h-[40vh] flex gap-20 px-25">
            <div className="w-1/2 h-full  pr-20 pt-20 relative">
              <div class="row">
                <div class="col-12">
                  <h1 class="animatedText6 opacity-100 text-6xl font-bold [text-shadow:rgba(96,0,0,0.3)_2.26px_2.26px_3.76px,rgba(0,85,21,0.3)_-2.26px_-2.26px_3.76px]">
                    <span className="text-[#33BC24]">Environmental,</span>{" "}
                    Social, and Governance
                  </h1>
                </div>
              </div>
              <div className="overflow-hidden">
                <p className="environmentalPara text-lg w-[85%] translate-y-[100%] mt-8">
                  The innovative initiatives emphasize the intersection of
                  modern technology, sustainability, and inclusivity, reflecting
                  a forward-thinking approach to CSR in the wealth management
                  sector{" "}
                </p>
              </div>
              <svg
                className=" absolute left-[69%] top-[0%]  text-green-400"
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
            <div className="environmentalImg w-1/2 h-full opacity-0 scale-[0.7]  rounded-3xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/01/Screenshot-2024-12-20-at-2.21.50-PM-1-1024x542.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="environmentalSlider translate-y-[-25%] w-full mx-auto pt-30 px-25">
            <div className="mt-10 ">
              <Slider {...settings2}>
                {data2.map((d, i) => (
                  <div
                    key={i}
                    className="hover:border hover:border-white/30 hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all ease-linear  h-[35vh] bg-white/20 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <img
                        src={d.img}
                        alt={d.name}
                        className=" h-20 mb-5  object-cover"
                      />

                      <p className=" text-lg">{d.title}</p>
                      <p className="text-center text-sm w-[75%] mt-4">
                        {d.para}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div id="career" className="w-full pb-20 bg-[#7777772f]">
          <div className="w-full  text-center py-20 relative">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="animatedText1 text-6xl font-bold translate-none rotate-none scale-none opacity-100 translate-0">
                  <span className="text-[#33BC24]">Careers</span>
                </h1>
              </div>
            </div>
            <div className="overflow-hidden">
              <p className="careerPara translate-y-[150%] my-4">
                Join Our Team of Financial Innovators!
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="careerPara translate-y-[150%] w-[45%] ml-[26.5vw]">
                At Mintbyte, we’re not just shaping the future of finance –
                we’re building a team of passionate, innovative individuals who
                are driven to make a difference. We offer a dynamic and
                rewarding work environment where you can grow your career,
                collaborate with industry experts, and make a meaningful impact
                on the financial well-being of our clients.
              </p>
            </div>
            <svg
              className=" absolute left-[54%] top-[2%]  text-green-400"
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
          <div className="w-full h-[50vh]  px-30 flex">
            <div className="w-1/2 h-full pt-6">
              <div className="careerTrackImg translate-x-[30%] opacity-0 flex items-center mb-4 mt-4 gap-3 h-22 w-[90%] px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
              <div className="careerTrackImg translate-x-[-30%] opacity-0 flex items-center mb-4 mt-4 gap-3 h-22 w-[90%] px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
              <div className="careerTrackImg translate-x-[30%] opacity-0 flex items-center mb-4 mt-4 gap-3 h-22 w-[90%] px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
              <div className="careerTrackImg translate-x-[-30%] opacity-0 flex items-center mb-4 mt-4 gap-3 h-22 w-[90%] px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
            <div className="careerImg w-1/2 h-full opacity-0 scale-[0.7] rounded-3xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="/images/groups/team.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full  text-center pt-42">
            <div class="col-12 text-center">
              <h1 class="animatedTextt2 text-6xl font-bold translate-none rotate-none scale-none opacity transform scale-[0.774] translate-x-0 translate-y-0">
                Job <span className="text-[#33BC24]">Opportunities</span>
              </h1>
            </div>
            <div className="overflow-hidden w-full flex items-center justify-center">
              <p className=" jobPara mt-8 translate-y-[100%] w-[50%]">
                If you're passionate about finance, technology, and client
                service, we invite you to explore career opportunities at
                Mintbyte. View current openings and submit your application.
                We're excited to hear from you!
              </p>
            </div>
          </div>
          <div className="w-full  px-30 pl-40 flex justify-between">
            <div className="jobForm translate-x-[-40%] opacity-0 flex justify-center items-center h-full w-1/3 pl-15">
              <form
                onSubmit={handleSubmit}
                className=" w-full rounded-2xl p-8 w-[400px] mt-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]"
              >
                <div className="mb-5">
                  <label className="block text-gray-600 font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-gray-600 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-gray-600 font-medium mb-1">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-gray-600 font-medium mb-1">
                    Apply For:
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Position name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-600 font-medium mb-1">
                    Upload your CV
                  </label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:border-green-500 transition-all">
                    <i className="ri-upload-cloud-2-line text-2xl text-gray-600"></i>
                    <input
                      type="file"
                      name="file"
                      accept=".pdf,.docx,.doc"
                      onChange={handleChange}
                      className="text-sm text-gray-500 w-full outline-none"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    File type .pdf, .docx, .doc allowed
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-full font-medium hover:bg-green-600 transition-all"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="w-1/2 h-full pt-20">
              <div className="jobTrackImg translate-x-[30%] opacity-0 flex items-center mb-4 mt-4 gap-3 h-22 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
              <div className="jobTrackImg translate-x-[-30%] opacity-0 flex items-center mb-4 mt-4 gap-3 h-22 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
              <div className="jobTrackImg translate-x-[30%] opacity-0 flex items-center mb-4 mt-4 gap-3 h-22 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
              <div className="jobTrackImg translate-x-[-30%] opacity-0 flex items-center mb-4 mt-4 gap-3 h-22 w-full px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
          </div>
        </div>

        <div id="testimonial" className="w-full min-h-[100vh] px-2 relative">
          <div className="w-full min-h-[100vh] transition-all ease-linear hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-b-[50%] overflow-hidden px-20">
            <div className="text-center pt-20 relative">
              <div className="  overflow-hidden">
                <h1 className="customerHeading text-5xl translate-y-[100%] font-bold">
                  <span className="text-[#33BC24]">Trusted</span> by over
                </h1>
              </div>
              <div className=" overflow-hidden">
                <h1 className="customerHeading text-5xl translate-y-[-100%]  font-bold text-yellow-400">
                  25,000+ customers
                </h1>
              </div>
              <p className="customerPara text-sm mt-5 opacity-0">
                Don’t take our word for it. Here’s what other people are saying
                about us…
              </p>
              <svg
                className=" absolute left-[58%] top-[2%]  text-green-400"
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

            <div className="px-20 ">
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
                  <Slider {...settings3}>
                    {data3.map((d, i) => (
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
                          <p className="">
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

            <div className="customerSubscribe translate-y-[-35%] opacity-0 w-full h-[45vh]">
              <div className="absolute w-[70%] h-[20vh] border bottom-30 left-[15%] rounded-lg p-5 flex items-center">
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

export default About;
