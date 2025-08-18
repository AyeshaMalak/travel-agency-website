import React from "react";
import FlightSearch from "./FlightSearch";

export default function Home() {
  return (
    <div
      className="relative w-full h-auto min-h-[70vh] sm:min-h-[80vh] md:min-h-screen bg-center bg-cover flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-12"
      style={{
        backgroundImage: "url('/img3.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-white">
        
        {/* Text */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
            Explore the World
          </h1>
          <p className="text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto">
            Discover breathtaking destinations and unforgettable adventures with us.
          </p>
        </div>

        {/* Flight search box */}
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[65%]">
            <FlightSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
