    import React from "react";

const ProjectModal = ({ project, close }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        <button onClick={close} className="absolute top-2 right-3 text-xl">
          ×
        </button>

        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-500 mb-4">{project.city}</p>

        <ul className="space-y-2">
          <li className="border p-3 rounded">100 sq yd — ₹25L</li>
          <li className="border p-3 rounded">150 sq yd — ₹35L</li>
          <li className="border p-3 rounded">200 sq yd — ₹50L</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectModal;
