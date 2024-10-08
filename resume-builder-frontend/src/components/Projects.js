import React from "react";
import {
  FaRocket,
  FaPlus,
  FaTrash,
  FaBold,
  FaItalic,
  FaListUl,
  FaListOl,
} from "react-icons/fa";

const Projects = ({ projects, setProjects }) => {
  // Remove a project by index
  const removeProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  // Add a new project entry
  const addProject = () => {
    setProjects([
      ...projects,
      {
        name: "",
        description: "",
        github: "",
        liveLink: "",
      },
    ]);
  };

  // Update the project state when an input field changes
  const handleInputChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const formatText = (index, formatType) => {
    const newProjects = [...projects];
    const textarea = document.getElementById(`project-description-${index}`);
    const { selectionStart, selectionEnd, value } = textarea;

    const beforeText = value.substring(0, selectionStart);
    const afterText = value.substring(selectionEnd);

    let formattedText = "";

    if (formatType === "bullet") {
      const lastLineBreak = beforeText.lastIndexOf("\n") + 1;
      const nextLineBreak =
        value.indexOf("\n", selectionStart) === -1
          ? value.length
          : value.indexOf("\n", selectionStart);

      const currentLine = value.substring(lastLineBreak, nextLineBreak);
      if (currentLine.startsWith("• ")) {
        return;
      }

      formattedText = `${beforeText.substring(
        0,
        lastLineBreak
      )}• ${currentLine}${afterText}`;
    } else if (formatType === "number") {
      const lastLineBreak = beforeText.lastIndexOf("\n") + 1;
      const nextLineBreak =
        value.indexOf("\n", selectionStart) === -1
          ? value.length
          : value.indexOf("\n", selectionStart);
      const currentLine = value.substring(lastLineBreak, nextLineBreak);
      const numberMatch = currentLine.match(/^\d+\. /);
      if (numberMatch) {
        return;
      }
      const numberCount = (beforeText.match(/\d+\./g) || []).length + 1;
      formattedText = `${beforeText.substring(
        0,
        lastLineBreak
      )}${numberCount}. ${currentLine}${afterText}`;
    } else if (formatType === "bold") {
      const selectedText = value.substring(selectionStart, selectionEnd);
      formattedText = `${beforeText}**${selectedText}**${afterText}`;
    } else if (formatType === "italic") {
      const selectedText = value.substring(selectionStart, selectionEnd);
      formattedText = `${beforeText}*${selectedText}*${afterText}`;
    }
    newProjects[index].description = formattedText || value;
    setProjects(newProjects);
    textarea.value = newProjects[index].description;
  };

  return (
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
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="Project Name"
                value={project.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor={`project-description-${index}`}
                className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="flex space-x-2 mt-2">
                <button
                  type="button"
                  onClick={() => formatText(index, "bold")}
                  className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-500">
                  <FaBold />
                </button>
                <button
                  type="button"
                  onClick={() => formatText(index, "italic")}
                  className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-500">
                  <FaItalic />
                </button>
                <button
                  type="button"
                  onClick={() => formatText(index, "bullet")}
                  className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-500">
                  <FaListUl />
                </button>
                <button
                  type="button"
                  onClick={() => formatText(index, "numbered")}
                  className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-500">
                  <FaListOl />
                </button>
              </div>
              <textarea
                id={`project-description-${index}`}
                rows="3"
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="Brief description of your project"
                value={project.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }></textarea>

              {/* Formatting Buttons */}
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
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="https://github.com/..."
                value={project.github}
                onChange={(e) =>
                  handleInputChange(index, "github", e.target.value)
                }
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
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="https://..."
                value={project.liveLink}
                onChange={(e) =>
                  handleInputChange(index, "liveLink", e.target.value)
                }
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
  );
};

export default Projects;
