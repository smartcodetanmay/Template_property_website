import React from "react";

const Navbar = ({ city, setCity }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-6">
        <div className="w-10 h-10 bg-pink-600 text-white flex items-center justify-center text-lg font-bold rounded">
          IX
        </div>
        <p className="text-lg font-semibold">InvestoXpert</p>
        <div className="flex gap-4 font-medium">
          <p className="cursor-pointer hover:text-pink-600">Home</p>
          <p className="cursor-pointer hover:text-pink-600">Services</p>
          <p className="cursor-pointer hover:text-pink-600">About</p>
        </div>
      </div>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option>All</option>
        <option>Faridabad</option>
        <option>Noida</option>
        <option>Delhi</option>
        <option>Ghaziabad</option>
      </select>
    </nav>
  );
};

export default Navbar;
