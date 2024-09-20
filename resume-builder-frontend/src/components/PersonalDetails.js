import React from "react";
import { FaFileAlt } from "react-icons/fa";

const PersonalDetails = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
        <FaFileAlt className="mr-2" /> Personal Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
            placeholder="123-456-7890"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
            placeholder="City, Country"
          />
        </div>
        <div>
          <label
            htmlFor="github"
            className="block text-sm font-medium text-gray-700">
            GitHub
          </label>
          <input
            type="url"
            id="github"
            className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
            placeholder="https://github.com/yourusername"
          />
        </div>
        <div>
          <label
            htmlFor="linkedin"
            className="block text-sm font-medium text-gray-700">
            LinkedIn
          </label>
          <input
            type="url"
            id="linkedin"
            className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
            placeholder="https://linkedin.com/in/yourusername"
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700">
            Website
          </label>
          <input
            type="url"
            id="website"
            className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
            placeholder="https://yourwebsite.com"
          />
        </div>
        <div>
          <label
            htmlFor="blog"
            className="block text-sm font-medium text-gray-700">
            Blog
          </label>
          <input
            type="url"
            id="blog"
            className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
            placeholder="https://yourblog.com"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
