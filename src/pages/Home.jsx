// src/pages/Home.jsx
import { useEffect, useState } from "react";
import FlightSearch from "../components/FlightSearch";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full bg-gray-50 overflow-hidden">
      {/* ===== Custom Plane Cursor ===== */}
      <motion.img
        src="/plane.png"
        alt="cursor plane"
        className="fixed w-10 h-10 sm:w-14 sm:h-14 pointer-events-none z-[9999]"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          x: ["-5%", "5%", "-5%"],
          rotate: [-15, 15, -15],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ===== Hero Section ===== */}
      <div
        className="relative w-full min-h-[80vh] sm:min-h-[90vh] md:min-h-screen bg-center bg-cover flex flex-col items-center justify-center px-4"
        style={{
          backgroundImage: "url('/img3.png')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <div className="relative z-10 text-center text-white px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">
            Explore the World
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-2xl mx-auto">
            Discover breathtaking destinations and unforgettable adventures with us.
          </p>
        </div>

        {/* Flight Search box (relative, no overlap) */}
        <div className="relative z-20 mt-8 w-[95%] sm:w-[90%] md:w-[70%]">
          <FlightSearch />
        </div>
      </div>

      {/* ===== About Section ===== */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Our Journey
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-12">
          We started with a dream to make traveling easier and more memorable.
          Today, we connect people with the world’s most beautiful destinations.
        </p>

        {/* Timeline */}
        <div className="space-y-6 sm:space-y-8">
          {[
            { year: "2018", text: "Started as a small travel blog." },
            { year: "2020", text: "Launched our booking platform." },
            { year: "2025", text: "Serving thousands of happy travelers worldwide." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-4 sm:p-6 bg-white rounded-2xl shadow-md text-center sm:text-left"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold text-lg sm:text-xl">{item.year}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="relative bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { end: 500, text: "Happy Travelers" },
            { end: 120, text: "Destinations" },
            { end: 50, text: "Team Members" },
            { end: 1000, text: "Bookings" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-2xl sm:text-4xl font-bold">
                <CountUp end={stat.end} duration={3} />+
              </h3>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Adventure Section ===== */}
      <section className="bg-gray-800 text-white py-10 sm:py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text & Button */}
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Plan Your Next Adventure
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              Let us help you discover your dream destination today!
            </p>
            <Link
              to="/contact"
              className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Plane Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/plane.png"
              alt="Airplane"
              className="w-40 sm:w-60 md:w-80 drop-shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
