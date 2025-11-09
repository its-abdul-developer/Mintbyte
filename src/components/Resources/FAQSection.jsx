import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FAQSection = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".faqChildHeading", {
      scrollTrigger: {
        trigger: ".faqChildHeading",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },
      x: "0",
      opacity: 1,
      duration: 2,
      stagger: {
        each: 0.5,
      },
    });
    tl.to(".faqsDiv", {
      scrollTrigger: {
        trigger: ".faqsDiv",
        start: "top 70%",
        end: "top 35%",
        scrub: true,
      },

      opacity: 1,
      duration: 2,
      stagger: {
        each: 0.5,
      },
    });
  });

  return (
    <div className="mt-16">
      <div className="overflow-hidden">
        <h2 className="faqChildHeading uppercase text-3xl translate-x-[-100%] opacity-0  font-medium mb-6">
          {title}
        </h2>
      </div>
      <div className="faqsDiv opacity-0 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" border border-white/20 rounded-2xl shadow-[0_4px_8px_-2px_rgba(0,255,255,0.25)] overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold cursor-pointer  hover:text-[#33BC24] transition-all"
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-[#33BC24]" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-4 text-gray-400 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
