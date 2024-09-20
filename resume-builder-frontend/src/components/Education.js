import React from "react";
import { FaGraduationCap, FaPlus, FaTrash } from "react-icons/fa";

const Education = ({ educations, addEducation, removeEducation }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
        <FaGraduationCap className="mr-2" /> Education
      </h2>
      {educations.map((edu, index) => (
        <div
          key={index}
          className="bg-purple-50 p-4 rounded-lg mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div>
              <label
                htmlFor={`institute-${index}`}
                className="block text-sm font-medium text-gray-700">
                Institute Name
              </label>
              <input
                type="text"
                id={`institute-${index}`}
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="University/School Name"
              />
            </div>
            <div>
              <label
                htmlFor={`grade-${index}`}
                className="block text-sm font-medium text-gray-700">
                Grade/Score
              </label>
              <input
                type="text"
                id={`grade-${index}`}
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="Grade or Score"
              />
            </div>
            <div>
              <label
                htmlFor={`start-year-${index}`}
                className="block text-sm font-medium text-gray-700">
                Start Year
              </label>
              <input
                type="text"
                id={`start-year-${index}`}
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="Start Year"
              />
            </div>
            <div>
              <label
                htmlFor={`end-year-${index}`}
                className="block text-sm font-medium text-gray-700">
                End Year
              </label>
              <input
                type="text"
                id={`end-year-${index}`}
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="End Year"
              />
            </div>
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <FaTrash className="mr-2" /> Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
        <FaPlus className="mr-2" /> Add Education
      </button>
    </div>
  );
};

export default Education;
