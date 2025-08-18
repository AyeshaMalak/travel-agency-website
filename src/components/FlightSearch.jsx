export default function FlightSearch() {
  return (
    <div className="bg-gray-900 text-white shadow-lg rounded-xl p-4 sm:p-5 w-full">
      <form className="flex flex-col md:flex-row items-stretch md:items-center gap-3 sm:gap-4">
        <input
          type="text"
          placeholder="From"
          className="flex-1 w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none text-sm sm:text-base"
        />
        <input
          type="text"
          placeholder="To"
          className="flex-1 w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none text-sm sm:text-base"
        />
        <input
          type="date"
          className="w-full md:w-auto p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none text-sm sm:text-base"
        />
        <input
          type="number"
          placeholder="Passengers"
          className="w-full md:w-28 p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none text-sm sm:text-base"
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition text-sm sm:text-base"
        >
          Search
        </button>
      </form>
    </div>
  );
}
