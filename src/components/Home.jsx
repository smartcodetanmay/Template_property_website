import React, { useEffect, useState } from "react";

const Home = () => {
  const [collections, setCollections] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    setFiltered(
      city.toLowerCase() === "all"
        ? collections
        : collections.filter((item) => item.city.toLowerCase() === city.toLowerCase())
    );
  }, [city, collections]);

  const handleSearch = () => {
    const value = query.toLowerCase().trim();
    if (!value) return alert("Please type something");

    const results = collections.filter((item) => {
      const cityMatch = city.toLowerCase() === "all" || item.city.toLowerCase() === city.toLowerCase();
      const searchMatch =
        item.title.toLowerCase().includes(value) || item.city.toLowerCase().includes(value);
      return cityMatch && searchMatch;
    });

    if (results.length > 0) {
      setFiltered(results);
      setSelectedProject(results[0]);
    } else {
      alert("No results found");
    }
  };

  
  const trendingProjectsStatic = [
    {
      id: "t1",
      title: "Noida Heights",
      city: "Noida",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
      properties: "3 BHK, 4 BHK",
      price: "₹ 1.5cr - 3cr",
      trending: true,
    },
    {
      id: "t2",
      title: "Delhi Residency",
      city: "Delhi",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
      properties: "2 BHK, 3 BHK",
      price: "₹ 1cr - 2cr",
      trending: true,
    },
  ];

  const trendingProjectsFiltered = [
    ...collections
      .filter((item) => item.trending)
      .filter(
        (item) => city.toLowerCase() === "all" || item.city.toLowerCase() === city.toLowerCase()
      ),
    ...trendingProjectsStatic.filter(
      (item) => city.toLowerCase() === "all" || item.city.toLowerCase() === city.toLowerCase()
    ),
  ];

  return (
    <div className="bg-gray-50">
     
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-pink-600 text-white flex items-center justify-center text-lg font-bold rounded">IX</div>
          <p className="text-lg font-semibold">InvestoXpert</p>
          <div className="flex gap-4 font-medium">
            <p className="cursor-pointer hover:text-pink-600">Home</p>
            <p className="cursor-pointer hover:text-pink-600">Services</p>
            <p className="cursor-pointer hover:text-pink-600">About</p>
          </div>
        </div>
        <div className="relative">
          <select value={city} onChange={(e) => setCity(e.target.value)} className="border px-3 py-2 rounded">
            <option>All</option>
            <option>Faridabad</option>
            <option>Noida</option>
            <option>Delhi</option>
            <option>Ghaziabad</option>
          </select>
        </div>
      </nav>

       
      <header className="mt-20 bg-[url('https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80')] bg-cover bg-center">
        <div className="bg-black/50 w-full h-full p-8 sm:p-20">
          <h1 className="text-white text-3xl sm:text-5xl font-bold leading-tight">
            Let's find your dream property at <br />
            <span className="text-pink-500">{city.toUpperCase()}</span>
          </h1>
          <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row">
            <div className="flex">
              <button className="px-4 py-3 bg-pink-600 text-white font-semibold">Buy Property</button>
              <button className="px-4 py-3 text-gray-600 font-medium">Rent Property</button>
            </div>
            <select className="border-t sm:border-l sm:border-t-0 px-4 py-3 w-full sm:w-auto">
              <option>Residential</option>
              <option>Commercial</option>
            </select>
            <input
              type="text"
              placeholder="Search locality, landmark, project or builder"
              className="px-4 py-3 flex-1 border-t sm:border-l sm:border-t-0"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="px-6 py-3 bg-pink-600 text-white font-semibold">Search</button>
          </div>
        </div>
      </header>

       
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          <p className="text-sm uppercase text-gray-500">We have handcrafted our</p>
          <h2 className="text-3xl font-bold mt-2">Curated Collections</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {filtered.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg shadow cursor-pointer" onClick={() => setSelectedProject(item)}>
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="p-3">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.city}</p>
                <p className="text-pink-600 font-bold mt-1">{item.properties || "1–2 Properties"} | {item.price || "1cr-2cr"}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

       
      {trendingProjectsFiltered.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Trending Projects</h2>
            <p className="text-gray-500 text-sm mt-2">
              Explore top trending projects{city.toLowerCase() !== "all" ? ` in ${city}` : ""}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trendingProjectsFiltered.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg shadow cursor-pointer" onClick={() => setSelectedProject(item)}>
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="p-3">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-pink-600 font-bold mt-1">{item.properties} | {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

       
      <footer className="bg-black text-white py-8 text-center">
        <div className="bg-blue-50 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-black">Most Popular Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {Array.from({ length: 110 }).map((_, i) => (
                <a key={i} href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Noida Plot {i + 1}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#111] text-white py-14">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h2 className="text-2xl font-bold">InvestoXpert</h2>
              <p className="text-gray-400 mt-2">Your trusted real-estate partner.</p>
            </div>
            <div className="mt-10 sm:mt-0">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-2">Email: investoxpert@gmail.com</p>
              <p className="text-gray-300 mb-2">Phone: +91 9876543210</p>
              <p className="text-gray-300">Address: Tower B, Sector 62, Noida, UP</p>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-12 pt-6 border-t border-gray-700">© 2025 InvestoXpert — All Rights Reserved</div>
        </div>
      </footer>

       
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button className="absolute top-2 right-3 text-xl font-bold" onClick={() => setSelectedProject(null)}>×</button>
            <h2 className="text-xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-600 mb-2">{selectedProject.city}</p>
            <h3 className="font-semibold text-lg mb-3 text-pink-600">Available Plots</h3>
            <ul className="space-y-2">
              <li className="p-3 border rounded shadow-sm"><p>Plot Size: 100 sq yards</p><p>Price: ₹ 25 Lac</p></li>
              <li className="p-3 border rounded shadow-sm"><p>Plot Size: 150 sq yards</p><p>Price: ₹ 35 Lac</p></li>
              <li className="p-3 border rounded shadow-sm"><p>Plot Size: 200 sq yards</p><p>Price: ₹ 50 Lac</p></li>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
