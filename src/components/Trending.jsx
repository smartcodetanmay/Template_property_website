import React from "react";

const Trending = ({ data }) => {
  if (data.length === 0) return null;

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Trending Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {
            data.map((item, index) => (
              <div
              key={index}
                className="rounded-lg shadow cursor-pointer overflow-hidden"
              // onClick={() => setSelectedProject(data)}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-3">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-pink-600 font-bold">
                    {item.price}
                  </p>
                </div>
              </div>
            ))
          }

    </div>
      </div>
    </section>
  );
};

export default Trending;
