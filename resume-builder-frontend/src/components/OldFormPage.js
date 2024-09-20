import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaTrash,
  FaFileAlt,
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
  FaWrench,
  FaChevronRight,
  FaChevronLeft,
  FaSignOutAlt,
} from "react-icons/fa";

function FormPage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [educations, setEducations] = useState([
    { institute: "", startYear: "", endYear: "", grade: "" },
  ]);
  const [experiences, setExperiences] = useState([
    {
      company: "",
      designation: "",
      jobRole: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
    },
  ]);
  const [projects, setProjects] = useState([
    { name: "", description: "", githubLink: "", liveLink: "" },
  ]);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Get the username from local storage
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);

    if (!storedUsername) {
      // If user is not logged in, redirect to the login page
      navigate("/");
    }
  }, [navigate]);

  const tabs = ["personal", "education", "experience", "projects", "skills"];

  const addEducation = () => {
    setEducations([
      ...educations,
      { institute: "", startYear: "", endYear: "", grade: "" },
    ]);
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

  const addProject = () => {
    setProjects([
      ...projects,
      { name: "", description: "", githubLink: "", liveLink: "" },
    ]);
  };

  const removeEducation = (index) => {
    setEducations(educations.filter((_, i) => i !== index));
  };

  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleGenerateResume = () => {
    // Logic for generating resume
    console.log("Generating Resume...");
  };
  const handleLogout = () => {
    // Clear local storage and navigate to login page
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <header className="bg-purple-700 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left side: title and description */}
          <div>
            <h1 className="text-4xl font-bold mb-2">Resume Builder</h1>
            <p className="text-xl">
              Create your professional resume in minutes
            </p>
          </div>

          {/* Right side: username and logout button */}
          <div className="flex items-center">
            {username && <span className="mr-4">Welcome, {username}</span>}
            <button
              onClick={handleLogout}
              className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg flex items-center transition duration-300">
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-2 px-4 text-center ${
                  activeTab === tab
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === "personal" && (
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      placeholder="https://yourblog.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "education" && (
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
            )}

            {activeTab === "experience" && (
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                            newExperiences[index].currentlyWorking =
                              e.target.checked;
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
            )}

            {activeTab === "projects" && (
              <div>
                <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                  <FaRocket className="mr-2" /> Projects
                </h2>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-purple-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                      <div>
                        <label
                          htmlFor={`project-name-${index}`}
                          className="block text-sm font-medium text-gray-700">
                          Project Name
                        </label>
                        <input
                          type="text"
                          id={`project-name-${index}`}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                          placeholder="Project Name"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label
                          htmlFor={`project-description-${index}`}
                          className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          id={`project-description-${index}`}
                          rows="3"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                          placeholder="Brief description of your project"></textarea>
                      </div>
                      <div>
                        <label
                          htmlFor={`project-github-${index}`}
                          className="block text-sm font-medium text-gray-700">
                          GitHub Link
                        </label>
                        <input
                          type="url"
                          id={`project-github-${index}`}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                          placeholder="https://github.com/..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`project-live-${index}`}
                          className="block text-sm font-medium text-gray-700">
                          Live Link
                        </label>
                        <input
                          type="url"
                          id={`project-live-${index}`}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeProject(index)}
                        className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        <FaTrash className="mr-2" /> Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addProject}
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <FaPlus className="mr-2" /> Add Project
                </button>
              </div>
            )}

            {activeTab === "skills" && (
              <div>
                <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
                  <FaWrench className="mr-2" /> Skills
                </h2>
                <textarea
                  placeholder="List your skills (e.g., JavaScript, React, Node.js)"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 h-32 mb-4"></textarea>
                <p className="text-sm text-gray-600 mb-4">
                  Separate each skill with a comma for better formatting in your
                  resume.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          {activeTab !== "personal" && (
            <button
              onClick={handlePrevious}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FaChevronLeft className="mr-2" /> Previous
            </button>
          )}
          {activeTab !== "skills" ? (
            <button
              onClick={handleNext}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center ml-auto">
              Next <FaChevronRight className="ml-2" />
            </button>
          ) : (
            <button
              onClick={handleGenerateResume}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center ml-auto">
              Generate Resume
            </button>
          )}
        </div>
      </main>

      <footer className="bg-purple-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Resume Builder. All rights
            reserved.
          </p>
          <p className="mt-2">Create your professional resume with ease.</p>
        </div>
      </footer>
    </div>
  );
}

export default FormPage;
