import React from "react";

export default function FlightSearch() {
  return (
    <div className="bg-gray-900 text-white shadow-lg rounded-xl p-5 w-full">
      <form className="flex flex-col md:flex-row items-center gap-3">
        <input
          type="text"
          placeholder="From"
          className="flex-1 p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="To"
          className="flex-1 p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          className="flex-1 p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
}
