// src/pages/Destinations.jsx
import { useState } from "react";
import Swal from "sweetalert2";

const destinations = [
  {
    name: "Japan",
    image: "/japan.jpg",
    description: "Experience the cherry blossoms and modern Tokyo life.",
  },
  {
    name: "Indonesia",
    image: "/indonesia.jpg",
    description: "Relax at Bali beaches and explore rich cultural heritage.",
  },
  {
    name: "Paris",
    image: "/paris.jpg",
    description: "City of love with Eiffel Tower and rich history.",
  },
  {
    name: "Turkey",
    image: "/turkey.jpg",
    description: "Discover Istanbul, Cappadocia and stunning architecture.",
  },
  {
    name: "Dubai",
    image: "/dubai.jpg",
    description: "Luxury shopping, modern architecture and desert safaris.",
  },
  {
    name: "Greece",
    image: "/greece.jpg",
    description: "Explore ancient ruins and beautiful Mediterranean islands.",
  },
  // 🔥 New Destinations
   {
    name: "Pakistan",
    image: "/pakistan.jpg",
    description: "Visit Hunza Valley, Badshahi Mosque and Mazar-e-Quaid",
  },
  {
    name: "Maldives",
    image: "/Maldives.jpg",
    description: "Crystal clear waters, luxury resorts and underwater beauty.",
  },
  {
    name: "Switzerland",
    image: "/switzerland.jpg",
    description: "Snowy Alps, scenic lakes and peaceful mountain villages.",
  },
];

export default function Destinations() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Show Info Popup
  const handleInfo = (place) => {
    Swal.fire({
      title: place.name,
      text: place.description,
      imageUrl: place.image,
      imageWidth: 400,
      imageHeight: 250,
      confirmButtonText: "Close",
      background: "#1a1a1a",
      color: "#fff",
    });
  };

  // Show Booking Form
  const handleBook = (place) => {
    setSelectedPlace(place);

    Swal.fire({
      title: `Book your trip to ${place.name}`,
      html: `
        <input type="text" id="name" class="swal2-input" placeholder="Your Name">
        <input type="email" id="email" class="swal2-input" placeholder="Your Email">
        <input type="date" id="date" class="swal2-input" placeholder="Travel Date">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Book Now",
      background: "#1a1a1a",
      color: "#fff",
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#name").value;
        const email = Swal.getPopup().querySelector("#email").value;
        const date = Swal.getPopup().querySelector("#date").value;

        if (!name || !email || !date) {
          Swal.showValidationMessage(`Please enter all details`);
        }
        return { name, email, date };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "🎉 Booked!",
          text: `Your flight to ${place.name} is booked successfully.`,
          icon: "success",
          background: "#1a1a1a",
          color: "#fff",
        });
      }
    });
  };

  return (
    <div>
      {/* Hero Section */}
  {/* Hero Section */}
<div className="relative h-[60vh] flex flex-col md:flex-row items-center justify-center bg-gray-900 px-6 md:px-20">
  {/* Left Side - Text */}
  <div className="md:w-1/2 flex flex-col justify-center md:justify-start">
    <h1 className="text-white text-5xl md:text-6xl font-bold text-center md:text-left">
      Explore the World
    </h1>
    <p className="text-gray-300 mt-4 text-center md:text-left text-lg md:text-xl">
      Discover breathtaking destinations, plan your perfect trip, and create memories that last a lifetime.
    </p>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
    <img
      src="/img5.png"
      alt="Explore"
      className="w-full max-w-md rounded-xl shadow-lg"
    />
  </div>
</div>



      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Popular Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((place, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {place.name}
                </h3>
                <p className="text-gray-600 mt-2">{place.description}</p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleInfo(place)}
                    className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
                  >
                    Info
                  </button>
                  <button
                    onClick={() => handleBook(place)}
                    className="flex-1 bg-gray-700 text-white py-2 rounded-lg hover:bg-black"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
