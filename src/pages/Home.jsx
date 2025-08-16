// src/pages/Home.jsx
import { useEffect, useState } from "react";
import FlightSearch from "../components/FlightSearch";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function Home() {
  // Cursor position state
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
    <div className="relative w-full bg-gray-50 overflow-hidden">
      {/* ===== Custom Plane Cursor ===== */}
      <motion.img
        src="/plane.png"
        alt="cursor plane"
        className="fixed w-16 h-16 pointer-events-none z-[9999]" // made bigger
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          x: ["-5%", "5%", "-5%"], // sway left to right
          rotate: [-15, 15, -15],   // slight rotation for more flying effect
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-center bg-cover flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/img3.png')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text on top of image */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore the World
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover breathtaking destinations and unforgettable adventures with us.
          </p>
        </div>

        {/* Flight search box - overlapping */}
        <div className="absolute bottom-[-30px] z-20 w-full flex justify-center">
          <FlightSearch />
        </div>
      </div>

      {/* ===== About Section (below Hero) ===== */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Journey</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          We started with a dream to make traveling easier and more memorable.
          Today, we connect people with the world’s most beautiful destinations.
        </p>

        {/* Timeline */}
        <div className="space-y-8">
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold text-xl">2018</h3>
            <p className="text-gray-600">Started as a small travel blog.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold text-xl">2020</h3>
            <p className="text-gray-600">Launched our booking platform.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold text-xl">2025</h3>
            <p className="text-gray-600">
              Serving thousands of happy travelers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gray-900 text-white py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={500} duration={3} />+
            </h3>
            <p className="mt-2">Happy Travelers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={120} duration={3} />+
            </h3>
            <p className="mt-2">Destinations</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={50} duration={3} />+
            </h3>
            <p className="mt-2">Team Members</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={1000} duration={3} />+
            </h3>
            <p className="mt-2">Bookings</p>
          </div>
        </div>
      </section>

      {/* Adventure Section (smaller height) */}
      <section className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Left side - Text & Button */}
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Plan Your Next Adventure</h2>
            <p className="mb-6">
              Let us help you discover your dream destination today!
            </p>
            <Link
              to="/contact"
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Right side - Plane Image (static) */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/plane.png"
              alt="Airplane"
              className="w-50 md:w-96 drop-shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
