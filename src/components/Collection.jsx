import React from "react";
import {Link} from "react-router-dom"
import Footer from "./Footer";

const Collection = ({ data }) => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Curated Collections
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {
          data.map((item, index) => (
            <Link to="/project-details/:id">
            <div key={index}
              className="rounded-lg shadow cursor-pointer overflow-hidden"
              // onClick={() => setSelectedProject(data)}
              >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
                />
              <div className="p-3">
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.city}</p>
                <p className="text-pink-600 font-bold">
                  {item.price}
                </p>
              </div>
            </div>
                </Link>
          ))
        }


      </div>
      {/* <Footer/> */}
    </section>
  );
};

export default Collection;
