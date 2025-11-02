import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CardSlider = () => {
  const cards = [
    { id: 1, color: "bg-blue-400/20" },
    { id: 2, color: "bg-green-400/20" },
    { id: 3, color: "bg-yellow-400/20" },
    { id: 4, color: "bg-pink-400/20" },
    { id: 5, color: "bg-purple-400/20" },
    { id: 6, color: "bg-red-400/20" },
  ];

  const [index, setIndex] = useState(0);

  const nextCard = () => {
    if (index < cards.length - 2) {
      setIndex(index + 1);
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative w-screen h-[400px] flex items-center justify-center overflow-hidden">
      {/* Cards Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out gap-6"
        style={{
          transform: `translateX(-${index * 50}%)`, // move one card (half of visible area)
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className={`w-[50vw] h-72 ${card.color} rounded-2xl border border-white/30 backdrop-blur-md 
              hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all duration-300 
              flex items-center justify-center text-white text-2xl font-semibold`}
          >
            Card {card.id}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevCard}
        className="absolute left-10 text-white p-2 border border-white/30 rounded-full hover:bg-white/10 transition"
      >
        <ArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextCard}
        className="absolute right-10 text-white p-2 border border-white/30 rounded-full hover:bg-white/10 transition"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default CardSlider;
