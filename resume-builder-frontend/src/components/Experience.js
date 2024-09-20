import React from "react";
import { FaBriefcase, FaPlus, FaTrash } from "react-icons/fa";

const Experience = ({ experiences, setExperiences }) => {
  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        designation: "",
        jobRole: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
      },
    ]);
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
        <FaBriefcase className="mr-2" /> Work Experience
      </h2>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-purple-50 p-4 rounded-lg mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div>
              <label
                htmlFor={`company-${index}`}
                className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id={`company-${index}`}
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label
                htmlFor={`designation-${index}`}
                className="block text-sm font-medium text-gray-700">
                Designation
              </label>
              <input
                type="text"
                id={`designation-${index}`}
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="Your Job Title"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor={`job-role-${index}`}
                className="block text-sm font-medium text-gray-700">
                Job Role
              </label>
              <textarea
                id={`job-role-${index}`}
                rows="3"
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="Describe your job role"></textarea>
            </div>
            <div>
              <label
                htmlFor={`start-date-${index}`}
                className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id={`start-date-${index}`}
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor={`end-date-${index}`}
                className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id={`end-date-${index}`}
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                disabled={exp.currentlyWorking}
              />
            </div>
            <div className="flex items-center">
              <input
                id={`currently-working-${index}`}
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                checked={exp.currentlyWorking}
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].currentlyWorking = e.target.checked;
                  setExperiences(newExperiences);
                }}
              />
              <label
                htmlFor={`currently-working-${index}`}
                className="ml-2 block text-sm text-gray-900">
                Currently Working Here
              </label>
            </div>
          </div>
          {index > 0 && (
            // <button onClick={() => removeExperience(index)}>Remove</button>
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <FaTrash className="mr-2" /> Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
        <FaPlus className="mr-2" /> Add Experience
      </button>
    </div>
  );
};

export default Experience;
