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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full bg-gray-50 overflow-x-hidden">
      {/* ===== Custom Plane Cursor ===== */}
      <motion.img
        src="/plane.png"
        alt="cursor plane"
        className="fixed w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 pointer-events-none z-[9999]"
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

      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen bg-center bg-cover flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/img3.png')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-12">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
            Explore the World
          </h1>
          <p className="text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto">
            Discover breathtaking destinations and unforgettable adventures with us.
          </p>
        </div>

        {/* Flight search box */}
        <div className="absolute -bottom-12 sm:-bottom-16 w-full flex justify-center px-4 sm:px-0">
          <FlightSearch />
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-6">
          Our Journey
        </h2>
        <p className="text-center text-sm sm:text-lg text-gray-600 mb-10 sm:mb-12">
          We started with a dream to make traveling easier and more memorable. Today, we connect people with the world’s most beautiful destinations.
        </p>

        {/* Timeline */}
        <div className="space-y-4 sm:space-y-6">
          <motion.div className="p-4 sm:p-6 bg-white rounded-2xl shadow-md" whileHover={{ scale: 1.05 }}>
            <h3 className="font-bold text-base sm:text-xl">2018</h3>
            <p className="text-gray-600 text-xs sm:text-base">Started as a small travel blog.</p>
          </motion.div>
          <motion.div className="p-4 sm:p-6 bg-white rounded-2xl shadow-md" whileHover={{ scale: 1.05 }}>
            <h3 className="font-bold text-base sm:text-xl">2020</h3>
            <p className="text-gray-600 text-xs sm:text-base">Launched our booking platform.</p>
          </motion.div>
          <motion.div className="p-4 sm:p-6 bg-white rounded-2xl shadow-md" whileHover={{ scale: 1.05 }}>
            <h3 className="font-bold text-base sm:text-xl">2025</h3>
            <p className="text-gray-600 text-xs sm:text-base">Serving thousands of happy travelers worldwide.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gray-900 text-white py-10 sm:py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold"><CountUp end={500} duration={3} />+</h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-base">Happy Travelers</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold"><CountUp end={120} duration={3} />+</h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-base">Destinations</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold"><CountUp end={50} duration={3} />+</h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-base">Team Members</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold"><CountUp end={1000} duration={3} />+</h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-base">Bookings</p>
          </div>
        </div>
      </section>

      {/* Adventure Section */}
      <section className="bg-gray-800 text-white py-10 sm:py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12">
          {/* Text & Button */}
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Plan Your Next Adventure
            </h2>
            <p className="mb-5 sm:mb-6 text-sm sm:text-base md:text-lg">
              Let us help you discover your dream destination today!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Plane Image */}
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/plane.png"
              alt="Airplane"
              className="w-32 sm:w-48 md:w-80 lg:w-[28rem] drop-shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
