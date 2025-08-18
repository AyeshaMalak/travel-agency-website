export default function FlightSearch() {
  return (
    <div className="bg-gray-900 text-white shadow-lg rounded-xl p-4 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
      <form className="flex flex-col sm:flex-row flex-wrap gap-3">
        {/* From */}
        <input
          type="text"
          placeholder="From"
          className="w-full sm:flex-1 min-w-[140px] p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />

        {/* To */}
        <input
          type="text"
          placeholder="To"
          className="w-full sm:flex-1 min-w-[140px] p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />

        {/* Date */}
        <input
          type="date"
          className="w-full sm:flex-1 min-w-[160px] p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />

        {/* Passengers */}
        <input
          type="number"
          placeholder="Passengers"
          className="w-full sm:w-28 p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}
