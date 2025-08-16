import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // 2.5 sec baad popup close aur home page redirect
    setTimeout(() => {
      setShowPopup(false);
      navigate("/");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none h-28"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-6 text-center animate-bounce">
            <h3 className="text-xl font-bold mb-2">✅ Message Sent!</h3>
            <p className="text-gray-600">We’ll get back to you shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
}
