import React, { useState } from 'react'
import Footer from './Footer';

function ProjectDetails() {
  
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const existingData =
    JSON.parse(localStorage.getItem("contactLeads")) || [];

  existingData.push({
    ...formData,
    date: new Date().toLocaleString(),
  });
  localStorage.setItem("contactLeads", JSON.stringify(existingData));
  alert("Form data saved locally ✅");
  setFormData({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
};
    return (
    <div className="bg-[#f4f4f4] min-h-screen">
      {/* HEADER */}
      <div className="bg-[#1f1f1f] text-white px-6 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">INVESTO XPERT</h1>

        <div className="flex gap-3 w-[50%]">
          <select className="bg-black border border-gray-600 px-3 py-1 rounded text-sm">
            <option>Ghaziabad</option>
          </select>
          <input
            type="text"
            placeholder="Search Projects"
            className="w-full bg-black border border-gray-600 px-3 py-1 rounded text-sm"
          />
        </div>

        <div className="flex gap-4 text-sm">
          <span>❤</span>
          <span>☰</span>
        </div>
      </div>

      {/* FILTER BAR */}
     <div className="bg-[#2c2c2c] text-white px-6 py-3 flex flex-wrap gap-3 text-sm">

  {/* FOR */}
  <select className="bg-[#2c2c2c] border border-gray-500 px-3 py-1 rounded">
    <option>For Residential</option>
    <option>Residential</option>
    <option>Commercial</option>
    <option>Plot</option>
  </select>

  {/* BEDROOMS */}
  <select className="bg-[#2c2c2c] border border-gray-500 px-3 py-1 rounded">
    <option>Bedrooms</option>
    <option>1 BHK</option>
    <option>2 BHK</option>
    <option>3 BHK</option>
    <option>4 BHK</option>
    <option>5 BHK</option>
  </select>

  {/* PROPERTY TYPE */}
  <select className="bg-[#2c2c2c] border border-gray-500 px-3 py-1 rounded">
    <option>Property Type</option>
    <option>Apartment</option>
    <option>Villa</option>
    <option>Builder Floor</option>
    <option>Penthouse</option>
  </select>

  {/* BUDGET */}
  <select className="bg-[#2c2c2c] border border-gray-500 px-3 py-1 rounded">
    <option>Budget</option>
    <option>Under 50 L</option>
    <option>50 L - 1 Cr</option>
    <option>1 Cr - 2 Cr</option>
    <option>2 Cr+</option>
  </select>

  {/* AREA */}
  <select className="bg-[#2c2c2c] border border-gray-500 px-3 py-1 rounded">
    <option>Area</option>
    <option>Ghaziabad</option>
    <option>Noida</option>
    <option>Greater Noida</option>
    <option>Delhi</option>
  </select>

  {/* PROJECT STATUS */}
  <select className="bg-[#2c2c2c] border border-gray-500 px-3 py-1 rounded">
    <option>Project Status</option>
    <option>New Launch</option>
    <option>Under Construction</option>
    <option>Ready To Move</option>
  </select>

  {/* COLLECTIONS */}
  <select className="bg-[#2c2c2c] border border-gray-500 px-3 py-1 rounded">
    <option>Collections</option>
    <option>Luxury</option>
    <option>Affordable</option>
    <option>Premium</option>
  </select>

</div>


      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-12 gap-6">
        {/* LEFT LISTING */}
        <div className="col-span-8 space-y-6">
          {/* CARD 1 */}
          <div className="bg-white rounded shadow p-4">
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
              New Launch
            </span>

            <div className="flex gap-4 mt-3">
              <img
                src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nfGVufDB8fDB8fHww"
                className="rounded w-[450px] h-[300px]"
                alt=""
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold">
                  Gaur NYC Residences
                </h2>
                <p className="text-sm text-gray-500">
                  Wave City, Ghaziabad
                </p>

                <p className="text-blue-600 font-semibold mt-1">
                  ₹ 2.10 Cr
                </p>

                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  ★★★★★ <span className="text-gray-600 ml-2">5.0 Rating</span>
                </div>

                <p className='text-justify'>Gaur NYC Residences ek modern luxury housing project hai jo world-class lifestyle ko redefine karta hai. Spacious apartments, smart interiors aur high-end amenities ke saath ye project comfort aur elegance ka perfect balance offer karta hai.</p>

                <button className="bg-pink-600 text-white px-4 py-2 mt-3 rounded text-sm">
                  INSTANT CALLBACK
                </button>
              </div>
            </div>

            {/* TABLE */}
            <div className="mt-4 border-t pt-3">
              <div className="grid grid-cols-3 text-sm font-semibold text-gray-600">
                <p>UNIT</p>
                <p>SIZE</p>
                <p>PRICE</p>
              </div>

              <div className="grid grid-cols-3 text-sm mt-2">
                <p>5 BHK</p>
                <p>3385 Sq.Ft.</p>
                <p>3.36 Cr</p>
              </div>

              <div className="grid grid-cols-3 text-sm mt-2">
                <p>5 BHK</p>
                <p>5000 Sq.Ft.</p>
                <p>5.00 Cr</p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded shadow p-4">
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
              New Launch
            </span>

            <div className="flex gap-4 mt-3">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                className="rounded  h-[300px]"
                alt=""
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold">
                  ATS Floral Pathways
                </h2>
                <p className="text-sm text-gray-500">NH-24, Ghaziabad</p>

                <p className="text-blue-600 font-semibold mt-1">
                  ₹ 1.55 Cr – 1.65 Cr
                </p>

                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  ★★★★★ <span className="text-gray-600 ml-2">5.0 Rating</span>
                </div>
                <p className='text-justify'>ATS Floral Pathways ek thoughtfully designed residential project hai jo greenery aur modern living ka perfect blend offer karta hai. Well-planned apartments, premium amenities aur peaceful.</p>
                <button className="bg-pink-600 text-white px-4 py-2 mt-3 rounded text-sm">
                  INSTANT CALLBACK
                </button>
              </div>
            </div>

            <div className="mt-4 border-t pt-3">
              <div className="grid grid-cols-3 text-sm font-semibold text-gray-600">
                <p>UNIT</p>
                <p>SIZE</p>
                <p>PRICE</p>
              </div>

              <div className="grid grid-cols-3 text-sm mt-2">
                <p>3 BHK</p>
                <p>1720 Sq.Ft.</p>
                <p>1.55 Cr</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <form className="col-span-4" onSubmit={handleSubmit}>
  <div className="bg-white shadow rounded p-5 sticky top-5">
    <h3 className="font-semibold text-lg mb-4">
      Contact Our Experts
    </h3>

    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full border px-3 py-2 mb-3 rounded"
      required
    />

    <div className="flex gap-2 mb-3">
      <select className="border px-2 py-2 rounded">
        <option>+91</option>
      </select>

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="flex-1 border px-3 py-2 rounded"
        required
      />
    </div>

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full border px-3 py-2 mb-3 rounded"
      required
    />

    <textarea
      name="message"
      placeholder="Message (optional)"
      value={formData.message}
      onChange={handleChange}
      className="w-full border px-3 py-2 rounded mb-4"
    />

    <button
      type="submit"
      className="w-full bg-pink-600 text-white py-2 rounded font-semibold"
    >
      SEND REQUEST
    </button>

    <p className="text-xs text-gray-500 mt-3">
      By submitting, you agree to be contacted via Call / SMS / WhatsApp.
    </p>
  </div>
</form>

      </div>
      <Footer/>
    </div>
  );
}

export default ProjectDetails
