export default function FlightSearch() {
  return (
    <div className="bg-gray-900 text-white shadow-lg rounded-xl p-3 sm:p-4 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%]">
      <form className="flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-3">
        <input
          type="text"
          placeholder="From"
          className="flex-1 min-w-[120px] p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <input
          type="text"
          placeholder="To"
          className="flex-1 min-w-[120px] p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <input
          type="date"
          className="flex-1 min-w-[140px] p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <input
          type="number"
          placeholder="Passengers"
          className="w-full sm:w-28 p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />
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
