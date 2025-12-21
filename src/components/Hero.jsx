import React from "react";

const Hero = ({ city, setQuery, handleSearch }) => {
  return (
    <header className="mt-20 bg-[url('https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80')] bg-cover bg-center">
      <div className="bg-black/50 p-8 sm:p-20">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">
          Let's find your dream property at <br />
          {/* <span className="text-pink-500">{city.toUpperCase()}</span> */}
        </h1>

        <div className="mt-8 bg-white shadow-lg rounded-lg flex flex-col sm:flex-row overflow-hidden">
          <button className="px-4 py-3 bg-pink-600 text-white font-semibold">
            Buy Property
          </button>

          <select className="px-4 py-3 border-t sm:border-l">
            <option>Residential</option>
            <option>Commercial</option>
          </select>

          <input
            type="text"
            placeholder="Search locality, project or builder"
            className="px-4 py-3 flex-1 border-t sm:border-l"
            // onChange={(e) => setQuery(e.target.value)}
          />

          <button
            // onClick={handleSearch}
            className="px-6 py-3 bg-pink-600 text-white font-semibold"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
