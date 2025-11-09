import React, { useState } from "react";
import { MapPin, Phone, Mail, Upload } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const FloatingInput = ({ label, type = "text", value, onChange, name }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="peer w-full bg-transparent border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-md px-3 pt-5 pb-2 text-sm text-white outline-none transition-all duration-300 placeholder-transparent focus:border-green-500"
        placeholder="Enter text"
        id={name}
      />
      <label
        htmlFor={name}
        className="absolute left-3 text-white/70 text-sm top-1/2 -translate-y-1/2 transition-all duration-300 
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-sm 
        peer-focus:top-2 peer-focus:text-xs peer-focus:text-white bg-[#090909] px-1"
      >
        {label}
      </label>
    </div>
  );
};

const FloatingSelect = ({ label, options, value, onChange, name }) => {
  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="peer w-full bg-transparent border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-md px-3 pt-5 pb-2 text-sm text-white outline-none focus:border-green-500 appearance-none"
        id={name}
      >
        <option value=""></option>
        {options.map((opt, i) => (
          <option key={i} value={opt} className="bg-[#090909] text-white">
            {opt}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className="absolute left-3 text-white/70 text-sm top-1/2 -translate-y-1/2 transition-all duration-300 
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-sm 
        peer-focus:top-2 peer-focus:text-xs peer-focus:text-white bg-[#090909] px-1"
      >
        {label}
      </label>
    </div>
  );
};

const ContactForm = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFileName(e.target.files[0] ? e.target.files[0].name : "No file chosen");
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".contactForm", {
      scrollTrigger: {
        trigger: ".contactForm",
        start: "top 80%",
        end: " top 40%",
        scrub: true,
      },
      x: 0,
      opacity: 1,
      duration: 0.6,
    });

    gsap.utils.toArray(".contactAddress").forEach((Address) => {
      tl.to(Address, {
        scrollTrigger: {
          trigger: Address,
          start: "top 200%",
          end: " top 40%",

          scrub: true,
        },
        x: 0,
        opacity: 1,
        duration: 0.6,
      });
    });
  });

  return (
    <div className="w-full min-h-[90vh] px-[10vw] py-[5vw] flex justify-between gap-10  text-white">
      {/* Left Form Section */}
      <div className="contactForm w-[50%] translate-x-[-70%] opacity-0 backdrop-blur-xl bg-transparent border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-2xl p-10">
        <p className="text-sm text-white/70 mb-6">
          <span className="italic font-semibold text-white">
            Please fill out the form below,
          </span>{" "}
          and we’ll reply soon.
        </p>

        <form className="space-y-5 text-sm">
          {/* Row 1 */}
          <div className="flex gap-5">
            <FloatingInput
              label="Name"
              value={form.name}
              onChange={handleChange}
              type="text"
              name="name"
            />
            <FloatingInput
              label="Email"
              value={form.email}
              onChange={handleChange}
              type="email"
              name="email"
            />
          </div>

          {/* Row 2 */}
          <div className="flex gap-5">
            <FloatingInput
              label="Phone Number"
              value={form.phone}
              onChange={handleChange}
              type="text"
              name="phone"
            />
            <FloatingSelect
              label="I am a"
              value={form.role}
              onChange={handleChange}
              options={[
                "Student",
                "Architect",
                "Engineer",
                "Designer",
                "Other",
              ]}
              name="role"
            />
          </div>

          {/* Message */}
          <div className="relative w-full">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder=""
              className="peer w-full bg-transparent border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-md px-3 pt-5 pb-2 text-sm text-white outline-none transition-all duration-300 focus:border-green-500"
              id="message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 text-white/70 text-sm top-4 transition-all duration-300 
    peer-placeholder-shown:top-1/6 peer-placeholder-shown:-translate-y-1/2 
    peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-sm 
    peer-focus:top-2 peer-focus:text-xs peer-focus:text-white bg-[#090909] px-1"
            >
              Your Message
            </label>
          </div>

          {/* File Upload */}
          <div className="space-y-3 text-sm mt-4">
            <label className="flex items-center gap-3 border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-md p-3 cursor-pointer bg-transparent hover:bg-white/10 transition-all">
              <Upload className="text-white" size={18} />
              <span className="text-white">
                Choose File{" "}
                <span className="text-white/60 ml-2 text-xs">({fileName})</span>
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
            </label>
            <p className="text-xs text-white/60 ml-1">
              File types allowed: pdf, doc, docx
            </p>

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-white/80">
              <input type="checkbox" className="accent-white" />
              Sign me up for Mintbyte’s regular updates
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-5 py-[1vh] rounded-[50px] bg-[#33BC24] text-white hover:bg-[#00CC66] hover:shadow-[0_0_10px_#00FF88] transition-all duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Info Section */}
      <div className="w-[40%]  mt-25 flex flex-col gap-6">
        <div className="contactAddress translate-x-[70%] opacity-0 flex gap-3 border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] p-5 rounded-xl">
          <div className="bg-white/20 p-7 rounded-xl flex items-center justify-center">
            <MapPin className="text-white" />
          </div>
          <p className="text leading-relaxed text-white/80">
            HD–327, WeWork Oberoi Commerz II, 20th floor, CTS No. 95, 4 B & 3 &
            4,590, Off W. E. Highway, Oberoi Garden City, Goregaon East (D2),
            Mumbai, MH 400063
          </p>
        </div>

        <div className="contactAddress translate-x-[70%] opacity-0 flex gap-3 border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] p-5 rounded-xl">
          <div className="bg-white/20 p-7 rounded-xl flex items-center justify-center">
            <Phone className="text-white" />
          </div>
          <p className="text-xl mt-5 text-white/80">+91-9833 139 568</p>
        </div>

        <div className="contactAddress translate-x-[70%] opacity-0 flex gap-3 border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.4)] p-5 rounded-xl">
          <div className="bg-white/20 p-7 rounded-xl flex items-center justify-center">
            <Mail className="text-white" />
          </div>
          <div className="text-lg text-white/80 leading-relaxed">
            <p>
              <span className="font-semibold">General Inquiries:</span>{" "}
              info@mintbyte.com
            </p>
            <p>
              <span className="font-semibold">Customer Support:</span>{" "}
              support@mintbyte.com
            </p>
            <p>
              <span className="font-semibold">Career Opportunities:</span>{" "}
              careers@mintbyte.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
