import React from "react";
import { FaWrench } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
        <FaWrench className="mr-2" /> Skills
      </h2>
      <textarea
        placeholder="List your skills (e.g., JavaScript, React, Node.js)"
        className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2 h-32 mb-4"></textarea>
      <p className="text-sm text-gray-600 mb-4">
        Separate each skill with a comma for better formatting in your resume.
      </p>
    </div>
  );
};

export default Skills;
