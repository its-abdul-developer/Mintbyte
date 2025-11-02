import React, { useState } from "react";
import AllPagesTopContent from "../components/AllPagesTopContent";
import Footer from "../components/Footer/Footer";
import LiquidChrome from "../Reactbits/LiquidChrome";

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    position: "",
    option: "",
    message: "",
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

  return (
    <>
      <AllPagesTopContent
        title1="Partner"
        title2="with Mintbyte"
        title3="Grow Your"
        title4="Business"
        flex="hidden"
        flex2="hidden"
        height="h-[115vh]"
        description="Join forces with a trusted financial partner dedicated to empowering your business and helping your clients achieve their financial goals."
        homeVideo="/videos/video5.mp4"
      />
      <div
        id="for-financial"
        className="w-full min-h-[55vh] text-6xl font-bold flex flex-col justify-end items-center"
      >
        <h1>
          Elevate <span className="text-[#33BC24]">Your Practice with</span>{" "}
          Mintbyte's Advisor
        </h1>
        <h1>Support Program</h1>
      </div>
      <div className="w-full h-[70vh]">
        <div className="w-full h-full  px-30 pl-40 flex justify-between">
          <div className="flex justify-center items-center h-full w-1/3 pl-15">
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

              <div className="mb-10">
                <label className="block text-gray-600 font-medium mb-1">
                  ARN
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Enter your AMFI Registration Number (ARN)"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-[1vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer"
              >
                Request a Call
              </button>
            </form>
          </div>

          <div className="w-1/2 h-full  pt-10 flex flex-col justify-center items-start">
            <p className="text-xl ">
              “Unlock a world of opportunities and take your advisory practice
              to new heights with our comprehensive suite of tools, resources,
              and expertise.
            </p>
            <p className="text-xl my-7">
              We invite you to explore the many advantages of partnering with
              Mintbyte. Contact us today to learn more about our Advisor Support
              Program and how we can help you take your practice to the next
              level.
            </p>
            <button className="px-6 py-[1.5vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer">
              join Our Network of Successful Advisors now!
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[90vh] py-10 bg-[#7777770b]">
        <h1 className="text-6xl font-bold text-center">
          <span className="text-[#33BC24]">Benefits</span> of Partnering with
          Mintbyte
        </h1>
        <p className="text-center text-xl mt-6">
          Unlock a world of opportunities and harness Mintbyte’s comprehensive
          suite of tools,
        </p>
        <p className="text-center text-xl">
          technology, and expertise for your advisory practice!
        </p>
        <div className="w-full h-[28vh] my-15 flex gap-10 justify-between px-40">
          <div className="w-[35%] h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <img className="h-18" src="/images/groups/partnering2.png" alt="" />
            <h2 className="text-xl font-medium my-4">
              Cutting-Edge Technology​
            </h2>
            <p>
              Access our advanced digital tools and platforms to streamline
              operations, enhance client experience, and increase efficiency.
            </p>
          </div>
          <div className="w-[65%] h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <img className="h-18" src="/images/groups/partnering.png" alt="" />
            <h2 className="text-xl font-medium my-4">
              Comprehensive Product Suite
            </h2>
            <p>
              Expand your offerings with a diverse portfolio of investment
              products, including mutual funds, stocks, bonds, and alternative
              investments. Provide tailored solutions to meet your clients’
              unique financial goals, enhancing their trust and satisfaction
              while growing your business.
            </p>
          </div>
        </div>
        <div className="w-full h-[28vh] flex gap-10 justify-between px-40">
          <div className="w-[33%] h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <img className="h-18" src="/images/groups/partnering3.png" alt="" />
            <h2 className="text-xl font-medium my-4">
              Ongoing Training and Education
            </h2>
            <p>
              Stay ahead of the curve with our continuous professional
              development programs and access to the latest industry insights
              and trends.
            </p>
          </div>
          <div className="w-[33%] h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <img className="h-18" src="/images/groups/partnering4.png" alt="" />
            <h2 className="text-xl font-medium my-4">
              Competitive Payout Structures
            </h2>
            <p>
              Benefit from attractive commission structures and transparent
              compensation models that reward your success.
            </p>
          </div>
          <div className="w-[33%] h-full  rounded-2xl p-8 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <img className="h-18" src="/images/groups/partnering5.png" alt="" />
            <h2 className="text-xl font-medium my-4">
              Practice Management Support
            </h2>
            <p>
              Receive dedicated support for practice management, marketing, and
              business development to help you grow your AUM and achieve your
              business goals.
            </p>
          </div>
        </div>
      </div>
      <div id="for-business" className="w-full h-[100vh]  flex gap-10 px-40">
        <div className="w-1/2 h-full  flex flex-col items-start justify-center gap-10">
          <h1 className="text-6xl font-medium w-[80%]">
            For Businesses: Unlock Growth Potential with Mintbyte's Financial
            Solutions
          </h1>
          <p>
            Partner with Mintbyte to optimize your financial strategies, enhance
            employee benefits, and achieve sustainable business growth.
          </p>

          <button
            type="submit"
            className="px-6 py-[1.3vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer"
          >
            Join Us
          </button>
        </div>
        <div className="w-1/2 h-full  px-15 flex items-center">
          <div className="w-full h-[70%] rounded-3xl  overflow-hidden border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
            <img
              className="w-full h-full object-cover"
              src="https://mintbyte.com/wp-content/uploads/2025/01/image-5-1019x1024.png.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[90vh]  px-30 pt-15 bg-[#7777770b]">
        <h1 className="text-6xl font-bold text-center">
          {" "}
          Areas of
          <span className="text-[#33BC24]">collaborations </span> that drive
          mutual growth & success.
        </h1>
        <div className="w-full h-[70vh]  flex gap-10 ">
          <div className="w-1/2 h-full  p-25">
            <div className="flex items-center mb-4 mt-4 gap-3 h-22  px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
            <div className="flex items-center mb-4 mt-4 gap-3 h-22  px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
            <div className="flex items-center mb-4 mt-4 gap-3 h-22  px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
            <div className="flex items-center mb-4 mt-4 gap-3 h-22  px-2 bg-white rounded-md border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)]">
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
          <div className="w-1/2 h-full p-15 ">
            <div className="w-full h-full  rounded-3xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
              <img
                className="h-full w-full object-cover"
                src="https://mintbyte.com/wp-content/uploads/2025/01/image-1-2-1024x758.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh]  pt-15">
        <h1 className="text-6xl font-bold text-center">
          Why
          <span className="text-[#33BC24]">Partner </span> with Mintbyte
        </h1>
        <div className="w-full h-full  px-25 mt-15">
          <div className="flex gap-10 w-full h-full pb-20">
            <div className="w-1/2 h-[80%] rounded-t-2xl overflow-hidden transition-all ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] pb-10">
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full object-cover"
                  src="https://mintbyte.com/wp-content/uploads/2025/03/image-39.png.webp"
                  alt=""
                />
              </div>
              <h2 className="text-center text-2xl mt-6">
                Expertise and Experience
              </h2>
              <p className="text-center mt-4">
                Benefit from our team’s deep knowledge and experience in the
                financial services industry.
              </p>
            </div>

            <div className="w-1/2 h-[80%] rounded-t-2xl overflow-hidden transition-all ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] pb-10">
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full object-cover"
                  src="https://mintbyte.com/wp-content/uploads/2025/03/image-40.png.webp"
                  alt=""
                />
              </div>
              <h2 className="text-center text-2xl mt-6">
                Provide Tailored Solutions
              </h2>
              <p className="text-center mt-4">
                Customize our offerings to meet your business’s and
                stakeholders’ needs.
              </p>
            </div>

            <div className="w-1/2 h-[80%] rounded-t-2xl overflow-hidden transition-all ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] pb-10">
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full object-cover"
                  src="https://mintbyte.com/wp-content/uploads/2025/03/image-41.png.webp"
                  alt=""
                />
              </div>
              <h2 className="text-center text-2xl mt-6">
                Technology-Driven Approach
              </h2>
              <p className="text-center mt-4">
                Leverage our cutting-edge technology platforms for seamless
                integration and efficient service delivery.
              </p>
            </div>

            <div className="w-1/2 h-[80%] rounded-t-2xl overflow-hidden transition-all ease-linear hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)] pb-10">
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full object-cover"
                  src="https://mintbyte.com/wp-content/uploads/2025/03/image-42.png.webp"
                  alt=""
                />
              </div>
              <h2 className="text-center text-2xl mt-6">
                Commitment to Excellence
              </h2>
              <p className="text-center mt-4">
                Partner with a trusted financial institution dedicated to
                delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[100vh] ">
        <div className="w-full min-h-[100vh] overflow-hidden  rounded-b-[50%] pt-10 border-b border-white/30  shadow-[0_8px_10px_-5px_rgba(255,255,255,0.25)]  ">
          <h1 className="text-6xl font-bold text-center">
            Contact Us to
            <span className="text-[#33BC24]"> Explore Partnership </span>{" "}
            Opportunities
          </h1>
          <p className="text-center mt-8">
            We would love to discuss how Mintbyte can collaborate with your
            business to achieve your financial goals.Please fill out the form
            below;
          </p>
          <p className="text-center">
            one of our representatives will contact you shortly.
          </p>
          <div className="w-full h-full mt-10  px-30 pl-40 flex justify-between">
            <div className="flex justify-center items-center h-full w-[40%] pl-15">
              <form
                onSubmit={handleSubmit}
                className=" w-full rounded-2xl p-8 mt-10 border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]"
              >
                <div className="mb-5">
                  <label className="block text-gray-600 font-medium mb-1">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  />
                </div>
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

                <div className="mb-10">
                  <label className="block text-gray-600 font-medium mb-1">
                    Area of Interest
                  </label>
                  <select
                    className="w-full border border-gray-300 bg-black rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                    id="city"
                    name="city"
                    value={formData.option}
                    onChange={handleChange}
                  >
                    <option value="Sort By">
                      Employee Financial Wellness Programs
                    </option>
                    <option value="All Reviews">
                      Group Insurance Solution
                    </option>
                    <option value="Trustindex">
                      Coporate Investment Solution
                    </option>
                    <option value="Apple Appstore">
                      Client Referral Programs
                    </option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="block text-gray-600 font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                    name="message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-[1vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="w-1/2 h-full p-30 ">
              <div className="w-full rounded-3xl overflow-hidden border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.4)]">
                <img
                  className="h-full w-full object-cover"
                  src="https://mintbyte.com/wp-content/uploads/2025/01/image-7-2011x2048.png.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[80vh]   pt-20 ">
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

      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default PartnerWithUs;
