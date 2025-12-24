import React from "react";
import AllPagesTopContent from "../AllPagesTopContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const EstatePlaning = () => {
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

  gsap.registerPlugin(ScrollTrigger);

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
    tl.to(".estateImg", {
      scrollTrigger: {
        trigger: ".estateImg",
        start: "top 85%",
        end: "top 35%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,

      duration: 2,
    });

    gsap.utils.toArray(".estateBox").forEach((estateBox) => {
      tl.to(estateBox, {
        scrollTrigger: {
          trigger: estateBox,
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
  });
  return (
    <>
      <AllPagesTopContent
        title1="Estate Planning "
        title2=""
        title3="Preserving your"
        title4="Wealth"
        flex="hidden"
        flex2="hidden"
        height="h-[115vh]"
        description="Plan for the future with estate planning. Secure your legacy and preserve your wealth for generations."
        homeVideo="/videos/video14.mp4"
      />
      <div className="w-full">
        <div className="w-full h-70 "></div>

        <div className="w-full  p-30 overflow-hidden  flex justify-between mt-10">
          <div className="w-[45%] h-full  p-10 text-xl">
            <div class="col-12">
              <h1 class="animatedText6 opacity-100 text-6xl font-bold [text-shadow:rgba(96,0,0,0.3)_2.26px_2.26px_3.76px,rgba(0,85,21,0.3)_-2.26px_-2.26px_3.76px]">
                Our Estate Planning Services
              </h1>
            </div>

            <p className="mt-10 animatedText6 opacity-100 [text-shadow:rgba(96,0,0,0.3)_2.26px_2.26px_3.76px,rgba(0,85,21,0.3)_-2.26px_-2.26px_3.76px]">
              Safeguard your family's future and ensure your wishes are
              fulfilled with our comprehensive estate planning services. Our
              experienced team will help you navigate the complexities of estate
              planning, ensuring your assets are protected and your legacy is
              preserved.
            </p>
          </div>
          <div className="w-1/2 h-full  pl-25">
            <div className="estateImg scale-[0.5] opacity-0 w-[90%] h-full rounded-3xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="w-full h-full object-cover"
                src="/images/groups/estate.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100vh] py-10 ">
          <div className="w-full  my-15 flex gap-10 justify-between px-40">
            <div className="estateBox opacity-0 translate-x-[-70%]  w-1/2 leading-[1.8] rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img className="h-30" src="/images/groups/estate2.png" alt="" />
              <h2 className="text-xl font-medium my-8">
                Will Drafting and Execution
              </h2>
              <p className="text-lg w-[85%]">
                Legally document your wishes for asset distribution. Appoint
                executors and guardians for minor dependents
              </p>
            </div>
            <div className="estateBox opacity-0 translate-x-[70%]  w-1/2 flex flex-col gap-10">
              <div className="w-full  h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img className="h-18" src="/images/groups/estate3.png" alt="" />
                <h2 className="text-xl font-medium my-4">
                  Trust Creation and Management
                </h2>
                <p className="text-lg w-[85%]">
                  Establish living or testamentary trusts to protect and
                  distribute wealth. Use specialized trusts, such as irrevocable
                  trusts, family trusts, or charitable trusts, for specific
                  goals.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[30vh] flex gap-10 justify-between px-40">
            <div className="estateBox opacity-0 translate-x-[-70%]  w-1/2 h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img className="h-18" src="/images/groups/estate4.png" alt="" />
              <h2 className="text-xl font-medium my-4">Succession Planning</h2>
              <p className="text-lg w-[90%]">
                Plan for the seamless transfer of family businesses and critical
                assets. Protect your business legacy for future generations.
              </p>
            </div>
            <div className="estateBox opacity-0 translate-y-[-50%] w-1/2 h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img className="h-18" src="/images/groups/estate5.png" alt="" />
              <h2 className="text-xl font-medium my-4">
                Tax Optimization Strategies
              </h2>
              <p className="text-lg w-[85%]">
                Utilize strategies to minimize estate duties and inheritance
                taxes. Leverage tax-efficient instruments such as trusts, life
                insurance, and gifting.
              </p>
            </div>
            <div className="estateBox opacity-0 translate-x-[70%]  w-1/2 h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img className="h-18" src="/images/groups/estate6.png" alt="" />
              <h2 className="text-xl font-medium my-4">
                Power of Attorney and Advance Directives
              </h2>
              <p className="text-lg w-[85%]">
                Appoint trusted individuals to manage your financial and
                healthcare decisions in case of incapacity. Ensure clarity and
                legal backing for end-of-life wishes
              </p>
            </div>
          </div>
          <div className="w-full mt-10 h-[30vh] flex gap-10 justify-between px-40">
            <div className="estateBox opacity-0 translate-x-[-70%]  w-1/2 h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img className="h-18" src="/images/groups/estate7.png" alt="" />
              <h2 className="text-xl font-medium my-4">
                Charitable Giving and Philanthropy
              </h2>
              <p className="text-lg w-[90%]">
                Establish charitable trusts or foundations to support causes
                close to your heart. Optimize tax benefits while creating a
                lasting social impact
              </p>
            </div>
            <div className="estateBox opacity-0 translate-y-[70%] w-1/2 h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img className="h-18" src="/images/groups/estate8.png" alt="" />
              <h2 className="text-xl font-medium my-4">
                Asset Inventory and Consolidation
              </h2>
              <p className="text-lg">
                Comprehensive assessment and documentation of all your assets,
                including property, investments, and other valuables. Eliminate
                discrepancies and streamline asset ownership.
              </p>
            </div>
            <div className="estateBox opacity-0 translate-x-[70%]  w-1/2 h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img className="h-18" src="/images/groups/estate9.png" alt="" />
              <h2 className="text-xl font-medium my-4">
                International Estate Planning
              </h2>
              <p className="text-lg">
                Plan for cross-border asset transfers, ensuring compliance with
                local and international laws. Address complexities like double
                taxation or foreign asset ownership.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100vh] relative">
          <div className="w-full min-h-[100vh] transition-all ease-linear border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)] rounded-b-[50%] overflow-hidden pt-20 px-20">
            <div className="pt-10 ">
              <div className="subscribe  translate-y-[-40%] opacity-0  w-full h-[30vh] relative bg-[#777777ed] rounded-xl px-20 flex items-center justify-between">
                <div>
                  <h1 className="text-5xl font-bold">
                    Craft an estate plan that reflects your
                  </h1>
                  <h1 className="text-5xl font-bold">
                    values and secures your future.
                  </h1>
                </div>
                <div className="">
                  <button className="px-12 py-[1.5vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
                    Book an Appointment
                  </button>
                </div>
              </div>
              <div className="text-center pt-20">
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
                  Don’t take our word for it. Here’s what other people are
                  saying about us…
                </p>
              </div>
              <div className="w-full px-2">
                <div className="px-20   ">
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
                        <option value="Google Playstore">
                          Google Playstore
                        </option>
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
                        View all Testimonials{" "}
                        <i class="ri-arrow-right-s-line"></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[45vh]">
              <div className="subscribe  translate-y-[-40%] opacity-0  absolute w-[70%] h-[20vh] border bottom-30 left-[15%] rounded-lg p-5 flex items-center">
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

export default EstatePlaning;
