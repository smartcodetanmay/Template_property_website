import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Most Popular Links
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {Array.from({ length: 110 }).map((_, i) => (
              <a
                key={i}
                href="#"
                className="text-blue-600 hover:underline"
              >
                Noida Plot {i + 1}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-10 text-center">
        © 2025 InvestoXpert — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
