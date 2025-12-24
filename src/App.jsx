import React from "react";
import Routing from "./utils/Routing";
import SplashCursor from "./Reactbits/SplashCursor";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);


  return (
    <>
      <div
        className="w-full bg-[#090909] text-white"
      >
        <SplashCursor />
        <Routing />
      </div>
    </>
  );
}
