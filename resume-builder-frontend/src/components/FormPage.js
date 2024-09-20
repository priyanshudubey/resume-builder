import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import { FaChevronLeft, FaChevronRight, FaSignOutAlt } from "react-icons/fa";

function FormPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [activeTab, setActiveTab] = useState("personal");

  //    States for each section
  const [educations, setEducations] = useState([
    { institute: "", grade: "", startYear: "", endYear: "" },
  ]);
  const addEducation = () => {
    setEducations([
      ...educations,
      { institute: "", startYear: "", endYear: "", grade: "" },
    ]);
  };
  const removeEducation = (index) => {
    setEducations(educations.filter((_, i) => i !== index));
  };
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

  const tabs = ["personal", "education", "experience", "projects", "skills"];
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);

    if (!storedUsername) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
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
    console.log("Generating Resume...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <header className="bg-purple-700 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Resume Builder</h1>
            <p className="text-xl">
              Create your <strong>ATS Friendly</strong> professional resume in
              minutes
            </p>
          </div>
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
          <div className="mb-4 ml-4 mr-4">
            {activeTab === "personal" && <PersonalDetails />}
            {activeTab === "education" && (
              <Education
                educations={educations}
                setEducations={setEducations}
                addEducation={addEducation}
                removeEducation={removeEducation}
              />
            )}
            {activeTab === "experience" && (
              <Experience
                experiences={experiences}
                setExperiences={setExperiences}
              />
            )}
            {activeTab === "projects" && (
              <Projects
                projects={projects}
                setProjects={setProjects}
              />
            )}
            {activeTab === "skills" && <Skills />}
          </div>
        </div>
      </main>
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
      <>
        <footer className="bg-purple-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} Resume Builder. All rights
              reserved.
            </p>
            <p className="mt-2">Create your professional resume with ease.</p>
          </div>
        </footer>
      </>
    </div>
  );
}

export default FormPage;
