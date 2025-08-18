export default function FlightSearch() {
  return (
    <div className="bg-gray-900 text-white shadow-lg rounded-xl p-4 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
      <form className="flex flex-col md:flex-row flex-wrap gap-3">
        {/* From */}
        <input
          type="text"
          placeholder="From"
          className="w-full md:flex-1 min-w-[140px] p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />

        {/* To */}
        <input
          type="text"
          placeholder="To"
          className="w-full md:flex-1 min-w-[140px] p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />

        {/* Date */}
        <input
          type="date"
          className="w-full md:flex-1 min-w-[160px] p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />

        {/* Passengers */}
        <input
          type="number"
          placeholder="Passengers"
          className="w-full md:w-32 p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-white text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}
