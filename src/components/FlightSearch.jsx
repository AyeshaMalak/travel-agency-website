export default function FlightSearch() {
  return (
    <div className="bg-gray-900 text-white shadow-lg rounded-xl p-3 md:p-4 w-[95%] md:w-[80%] lg:w-[70%]">
      <form className="flex flex-col md:flex-row items-center gap-2">
        <input
          type="text"
          placeholder="From"
          className="flex-1 p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <input
          type="text"
          placeholder="To"
          className="flex-1 p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <input
          type="date"
          className="p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <input
          type="number"
          placeholder="Passengers"
          className="w-28 p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}
